import React from "react";
import EmpresasFromExcel from "../../Components/EmpresasFromExcel"
import AssistantsFromExcel from "../../Components/AssistantsFromExcel"
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
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { Button } from "antd";
import RichTextInput from "ra-input-rich-text";
import { Link } from "react-router-dom";
import { generateId } from "../../Components/utils"

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
  const eventId = generateId()
  return (
    <div>
      <h2>Ingresa un nuevo evento</h2>
      <Create {...props}>
        <SimpleForm  toolbar={<PostSave transform={data => ({ ...data, id: eventId })} eventId={eventId}/>}>
          <TextInput source="name" label="Nombre del Evento" />
          <ReferenceInput
            label="Organizador del evento"
            source="organizerId"
            reference="users"
          >
            <SelectInput source="name" optionText={record => `${record.name} ${record.lastName}`} />
          </ReferenceInput>
          <Button>
            <Link to="/users/create">Crear Organizador</Link>
          </Button>
          <ReferenceArrayInput label="Breaks del evento" source="id" reference="breaks">
            <SelectArrayInput optionText="name" />
          </ReferenceArrayInput>
          <Button>
            <Link to="/breaks/create">Crear Break</Link>
          </Button>
          <TextInput source="address" label="Lugar del Evento" />
          <DateInput source="date" label="Fecha del Evento" />
          <ImageInput labelSingle="Haga click aquí para seleccionar una imagen" source="eventImg"></ImageInput>
          <RichTextInput label="Descripcion del evento" source="description" />
          {/**Funcion para leer y sacar empresas y participantes */}
          <p>Suba el archivo con las empresas asistentes al evento</p>
          <EmpresasFromExcel eventId={eventId}/>
          <p>Suba el archivo con los asistentes del evento</p>
          <AssistantsFromExcel eventId={eventId}/>
        </SimpleForm>
      </Create>
    </div>
  );
}

export default EventCreate;
