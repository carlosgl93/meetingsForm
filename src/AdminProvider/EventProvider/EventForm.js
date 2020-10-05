import React from "react"
import {
  SimpleForm,
  TextInput,
  DateInput,
  ImageInput,
  ImageField,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin"
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import RichTextInput from "ra-input-rich-text";
import EmpresasFromExcel from "../../Components/EmpresasFromExcel"
import AssistantsFromExcel from "../../Components/AssistantsFromExcel"
import PostSave from "./PostSave"
import transformEventData from "./transformEventData"

const { Title } = Typography

function EventForm(props) {
  const { eventId } = props
  return (
    <SimpleForm  toolbar={<PostSave transform={data => transformEventData(props.storage, { ...data, id: eventId })} eventId={eventId}/>}>
      <Title level={2}>{props.title}</Title>
      <TextInput source="name" label="Nombre del Evento" />
      <DateInput source="date" label="Fecha del Evento" />
      <TextInput source="address" label="Lugar del Evento" />
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
      <ReferenceArrayInput label="Breaks del evento" source="breaksId" reference="breaks">
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
      <EmpresasFromExcel eventId={eventId}/>
      <p>Suba el archivo con los asistentes del evento</p>
      <AssistantsFromExcel eventId={eventId}/>
    </SimpleForm>

  )
}

export default EventForm