import React, { useState, useCallback } from "react";
import { Tooltip, notification, Table } from "antd";
import readXlsxFile from "read-excel-file";
import _intersection from "lodash/intersection";
import _flatten from "lodash/flatten";
import _includes from 'lodash/includes'
import { useDropzone } from "react-dropzone";
import { generateId } from "../utils"
import { 
    useFirestore,
    useFirestoreCollectionData
} from "reactfire"
import {
  CreateController,
  SimpleForm,
  TextInput,
  FileInput,
  ImageInput,
  ImageField,
  RadioButtonGroupInput,
} from "react-admin";

function EmpresasFromExcel(props) {
  const [state, setState] = useState({
    
  });

  const firestore = useFirestore(); 

  const parseExcel = (acceptedFiles) => {
    acceptedFiles.forEach(async (f) => {
     
      let data;
      try {
        data = await readXlsxFile(f);
    
      } catch (error) {
        notification.error({
          message: "Woops",
          description: "A ocurrido un error al procesar el archivo",
        });
      }
      const headers = _flatten(data.slice(0, 1)).map(h => h.toLowerCase())
      
      let validData = true;
      const rows = data.slice(1).map((arr, index) => {
        if (arr.length < headers.length) {
          notification.error({
            message: "Woops",
            description: `Debes revisar tu archivo de datos, específicamente alrededor de la línea ${
              index + 1
            }`,
          });
          validData = false;
        }
        let dataObject = {};
        
        headers.forEach((header, index) => {
            
          if (header === 'email') {
            
            dataObject[header] = arr[index].toLowerCase();
           
          } else {
            dataObject[header] = arr[index];
          }
        });
        console.log(dataObject)
        return dataObject;
      });

      if (!_includes(headers, 'email')) {
        notification.error({
          message: 'Woops!',
          description: 'El archivo debe tener una columna cuyo encabezado sea "email"'
        })
        validData = false
      }

      const tildes = ["ñ", "á", "é", "í", "ó", "ú"];
      headers.forEach(header => {
        if (_intersection(header.split(""), tildes).length) {
          notification.error({
            message: "Woops!",
            description:
              "Los encabezados de las columnas no pueden contener tildes o 'ñ'",
          });
          validData = false;
        }
      });
      if (!validData) return;
      console.log("datos parseados", { headers, rows });
      let eventId = generateId() 
      rows.forEach( (row) => {
        row = { ...row, eventId: props.eventId}
        console.log(row)
        firestore.collection("companiesFromExcel").add(row)
      });
     
      
      // function to generate random ID, luego a cada participant agregarle el eventId a cada participante
      // on save le paso el Id generado por la funcion anterior para que el ID del documento del evento creado quede con ese ID
    });
  };
  const onDrop = useCallback(parseExcel, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // const renderCSVPreview = () => {
  //     const { rows, headers} = state
  //     if (rows && headers) return <Table columns={headers} rows={rows}/>
  // }
  return (
    <Tooltip
      title={
        <ul>
          <li>Suba el archivo Excel con sus empresas.</li>
          <li>Los títulos de las columnas no deben tener tildes ni ñ</li>
        </ul>
      }
      fullWidth
    >
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Click para seleccionar el archivo a subir</p>
        )}
      </div>
    </Tooltip>
  );
}

export default EmpresasFromExcel;
