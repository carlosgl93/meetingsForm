import React, { useState } from "react";
// external libraries
import {
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ImageInput,
  ImageField,
  Button
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import { Link } from "react-router-dom";
import { useStorage } from "reactfire";
// our components
import EmpresasFromExcel from "../../Components/EmpresasFromExcel";
import AssistantsFromExcel from "../../Components/AssistantsFromExcel";
import PostSave from "../../AdminProvider/EventProvider/PostSave";
import transformEventData from "../../AdminProvider/EventProvider/transformData";
import OrganizerCreateForm from "../OrganizerCreateForm"

function EventForm(props) {
  
  const storage = useStorage()

  return (
    <SimpleForm
      toolbar={
        <PostSave
          transform={(data) =>
            transformEventData(storage, { ...data, id: props.eventId })
          }
          eventId={props.eventId}
        />
      }
    >
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
      <Button 
      component={Link}
      to={{
        pathname:"clients/create",
        state: { eventId: props.eventId}
      }}
      label="Crear organizador"
      >
      </Button>

      <ReferenceArrayInput
        label="Breaks del evento"
        source="breakIds"
        reference="breaks"
      >
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <Button onClick={props.showModal}>
        Crear break
      </Button>
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
      <EmpresasFromExcel eventId={props.eventId} />
      <p>Suba el archivo con los asistentes del evento</p>
      <AssistantsFromExcel eventId={props.eventId} />
    </SimpleForm>
  );
}

export default EventForm;
