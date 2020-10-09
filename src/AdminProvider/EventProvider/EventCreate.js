import React, { useState, useEffect } from "react";
import { Modal } from "antd";
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
  Button,
  NumberInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import { useFirestore, useStorage } from "reactfire";

import FormModal from "../../Components/FormModal";
import EmpresasFromExcel from "../../Components/EmpresasFromExcel";
import AssistantsFromExcel from "../../Components/AssistantsFromExcel";
import { generateId } from "../../utils";
import PostSave from "./PostSave";
import transformEventData from "./transformData";
import TimeInput from "../../Components/TimeInput"
import TransformSave from "../../Components/TransformSave";

// generate eventId aqui, pasarselo como prop al read excel
function EventCreate(props) {

  const eventId = generateId();
  const storage = useStorage(); 

  return (
    <div>
      <Create {...props}>
        <SimpleForm>
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

          <ReferenceArrayInput
            label="Breaks del evento"
            source="breakIds"
            reference="breaks"
          >
            <SelectArrayInput optionText="name" />
          </ReferenceArrayInput>

          <ImageInput
            labelSingle="Haga click aquí para seleccionar una imagen"
            source="banner"
            accept="image/*"
          >
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
      
    </div>
  );
}

export default EventCreate;
