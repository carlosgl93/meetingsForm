import React, { useState } from "react";
import { Modal, Button } from "antd";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  ImageInput,
  ImageField,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import { Link } from "react-router-dom";
import { useFirestore, useStorage } from "reactfire"

import FormModal from "../../Components/FormModal"
import EmpresasFromExcel from "../../Components/EmpresasFromExcel";
import AssistantsFromExcel from "../../Components/AssistantsFromExcel";
import OrganizerCreate from "../OrganizerProvider/OrganizerCreate";
import { generateId } from "../../utils"
import PostSave from "./PostSave"
import transformEventData from "./transformData"

// generate eventId aqui, pasarselo como prop al read excel
function EventCreate(props) {

  const [organizerData, setOrganizerData] = useState({
    name: "",
    lastName: "",
    contactEmail: "",
    company: "",
  });

  const [modalVisible, setModalVisible] = useState(false)

  const eventId = generateId()
  const storage = useStorage()
  let organizerRef = useFirestore().collection("users")

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = (event) => {
    console.log(event);
    organizerCreate()
    setModalVisible(false);
  };

  const handleCancel = (event) => {
    console.log(event);
    setModalVisible(false);
  };

  const organizerCreate = event => {
    event.preventDefault()
    // firebase logic to create organizer
    let res = null
    organizerRef.add(organizerData).then(response => {
      console.log("RESPONSE:", response)
      res = response
    })
  }

  return (
    <div>
      <Create {...props}>
        <SimpleForm  toolbar={<PostSave transform={data => transformEventData(storage, { ...data, id: eventId })} eventId={eventId}/>}>
          <TextInput source="name" label="Nombre del Evento" />
          <DateInput source="date" label="Fecha del Evento" />
          <TextInput source="address" label="Lugar del Evento" />
          <ReferenceInput
            label="Organizador del evento"
            source="organizerId"
            reference="users"
          >
            <SelectInput
              source="name"
              optionText={(record) => `${record.name} ${record.lastName}`}
            />
          </ReferenceInput>
          <button onClick={showModal}></button>
          <Button>
            <Link to="/users/create">Crear Organizador</Link>
          </Button>
          <ReferenceArrayInput label="Breaks del evento" source="breakIds" reference="breaks">
            <SelectArrayInput optionText="name" />
          </ReferenceArrayInput>
          <Button>
            <Link to="/breaks/create">Crear Break</Link>
          </Button>
          <ImageInput labelSingle="Haga click aquí para seleccionar una imagen" source="banner" accept="image/*">
            <ImageField source="src" title="Banner" />
          </ImageInput>
          <RichTextInput label="Descripcion del evento" source="description" />
          {/**Funcion para leer y sacar empresas y participantes */}
          <p>Suba el archivo con las empresas asistentes al evento</p>
          <EmpresasFromExcel eventId={eventId} />
          <p>Suba el archivo con los asistentes del evento</p>
          <AssistantsFromExcel eventId={eventId} />
        </SimpleForm>
      </Create>

      <FormModal
        title="Crea un nuevo organizador"
        visible={modalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      >
        <SimpleForm>
          <TextInput value={organizerData.name} onChange={event => setOrganizerData({
            ...organizerData,
            name: event.target.value
          })} label="Nombre del organizador"/>
          <TextInput 
            onChange={event => setOrganizerData({
              ...organizerData,
              lastName: event.target.value
            })}
            label="Apellido del organizador"/>
          <TextInput
            onChange={event => setOrganizerData({
              ...organizerData,
              contactEmail: event.target.value
            })}
            label="Email de contacto"/>
          <TextInput 
            label="Compañia del organizador"
            onChange={event => setOrganizerData({
              ...organizerData,
              company: event.target.value
            })}
          />
        </SimpleForm>
      </FormModal>
    </div>
  );
}

export default EventCreate;
