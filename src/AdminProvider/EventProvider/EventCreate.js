import React, { useState } from "react";
import EmpresasFromExcel from "../../Components/EmpresasFromExcel";
import AssistantsFromExcel from "../../Components/AssistantsFromExcel";
import { Modal, Button } from "antd";
import OrganizerCreate from "../OrganizerProvider/OrganizerCreate";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  Toolbar,
  SaveButton,
  ImageInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import { Link } from "react-router-dom";
import { generateId } from "../../Components/utils";
import { useFirestoreDocData, useFirestore } from "reactfire"; 

const PostSave = (props) => (
  <Toolbar {...props}>
    <SaveButton
      label="Guardar"
      transform={props.transform}
      submitOnEnter={false}
    />
  </Toolbar>
);

// generate eventId aqui, pasarselo como prop al read excel
function EventCreate(props) {

  const [state, setState] = useState({
    visible: false,

  });
  const eventId = generateId();

  const showModal = () => {
    setState({
      name: "",
      lastName: "",
      contactEmail: "",
      company: "",
      visible: true,
    });
  };

  const handleOk = (e) => {
    console.log(e);
    setState({
      visible: false,
    });
  };

  const handleCancel = (e) => {
    console.log(e);
    setState({
      visible: false,
    });
  };

  let organizerRef = useFirestore().collection("users")

  const organizerCreate = (e) => {
    e.preventDefault()
    // firebase logic to create organizer
    const data = {
      name: state.name,
      lastName: state.lastName,
      contactEmail: state.contactEmail,
      company: state.company
    }
    const res = organizerRef.doc(eventId).set(data)
    handleOk()
  }

  return (
    <div>
      <h2>Ingresa un nuevo evento</h2>
      <Create {...props}>
        <SimpleForm
          toolbar={
            <PostSave
              transform={(data) => ({ ...data, id: eventId })}
              eventId={eventId}
            />
          }
        >
          <TextInput source="name" label="Nombre del Evento" />
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
          <button onClick={showModal()}></button>
          <TextInput source="address" label="Lugar del Evento" />
          <DateInput source="date" label="Fecha del Evento" />
          <ImageInput label="Banner del Evento" source="eventImg"></ImageInput>
          <RichTextInput label="Descripcion del evento" source="description" />
          {/**Funcion para leer y sacar empresas y participantes */}
          <p>Suba el archivo con las empresas asistentes al evento</p>
          <EmpresasFromExcel eventId={eventId} />
          <p>Suba el archivo con los asistentes del evento</p>
          <AssistantsFromExcel eventId={eventId} />
        </SimpleForm>
      </Create>
      <Modal
        title="Crea un nuevo organizador"
        visible={state.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <SimpleForm>
          <TextInput value={state.name} onChange={event => setState({
            state,
            name: event.target.value
          })} label="Nombre del organizador"/>
          <TextInput 
          value={state.lastName} 
          onChange={event => setState({
            state,
            lastName: event.target.value
          })}
          label="Apellido del organizador"/>
          <TextInput
          value={state.contactEmail}
          onChange={event => setState({
            state,
            contactEmail: event.target.value
          })}
          label="Email de contacto"/>
          <TextInput 
          value={state.company} 
          label="Compañia del organizador"
          onChange={event => setState({
            state,
            company: event.target.value
          })}
          />
          <button onClick={OrganizerCreate()}></button>
        </SimpleForm>
      </Modal>
    </div>
  );
}

export default EventCreate;
