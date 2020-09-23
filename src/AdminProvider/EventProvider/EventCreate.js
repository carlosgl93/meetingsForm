import React from "react";
import ReadExcel from "../../Components/ReadExcel"
import {
  Create,
  SimpleForm,
  TextInput,
  FileField,
  FileInput,
  DateInput,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  Toolbar,
  SaveButton
} from "react-admin";
import { Button } from "antd";
import RichTextInput from "ra-input-rich-text";
import { Link } from "react-router-dom";
import { firestoreAutoId } from "../../Components/IdGen"

const PostSave =(props) => (
  <Toolbar {...props}>
        <SaveButton
            label="Guardar"
            transform={props.transform}
            submitOnEnter={false}
        />
    </Toolbar>
)

// generate eventId aqui, pasarselo como prop al read excel 
function EventCreate(props) {
  const eventId = firestoreAutoId()
  return (
    <div>
      <h2>Ingresa un nuevo evento</h2>
      <Create {...props}>
        <SimpleForm  toolbar={<PostSave transform={data => ({ ...data, id: eventId })} eventId={eventId}/>}>
          <TextInput source="name" label="Nombre del Evento" />
          {/**Boton para llegar al OrganizerCreate */}
          <ReferenceInput
            label="Organizador del evento"
            source="organizerId"
            reference="users"
          >
            <SelectInput source="id" />
          </ReferenceInput>
          <Button>
            <Link to="/users/create">Crear Organizador</Link>
          </Button>
          <TextInput source="address" label="Lugar del Evento" />
          <DateInput source="date" label="Fecha del Evento" />
          <RichTextInput />
          {/**Funcion para leer y sacar empresas y participantes */}
          <FileInput
            source="empresasFile"
            label="Ingresar empresas participantes mediante archivo excel/csv"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          >
            <FileField source="src" title="title" />
          </FileInput>
          <ReadExcel eventId={eventId}/>
        </SimpleForm>
      </Create>
    </div>
  );
}

export default EventCreate;
