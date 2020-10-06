import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ImageInput,
  ImageField,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  useEditController,
} from "react-admin"
import { Typography, Button } from "antd"
import { Link } from "react-router-dom";
import RichTextInput from "ra-input-rich-text";
import EmpresasFromExcel from "../../Components/EmpresasFromExcel"
import AssistantsFromExcel from "../../Components/AssistantsFromExcel"
import PostSave from "./PostSave"
import transformEventData from "./transformData"

const { Title } = Typography


function EventEdit(props) {
  const {
    basePath, // deduced from the location, useful for action buttons
    defaultTitle, // the translated title based on the resource, e.g. 'Post #123'
    loaded, // boolean that is false until the record is available
    loading, // boolean that is true on mount, and false once the record was fetched
    record, // record fetched via dataProvider.getOne() based on the id from the location
    redirect, // the default redirection route. Defaults to 'list'
    resource, // the resource name, deduced from the location. e.g. 'posts'
    save, // the update callback, to be passed to the underlying form as submit handler
    saving, // boolean that becomes true when the dataProvider is called to update the record
    version, // integer used by the refresh feature
  } = useEditController(props);

  const renderImagePreview = () => {
    if (record)
    return <img src={record["bannerUrl"]} alt={`${record.name} banner`} style={{ maxWidth: '100%' }} />
  }

  return (
    <Edit {...props}>
      <SimpleForm  toolbar={<PostSave transform={data => transformEventData(props.storage, { ...data })} eventId={props.eventId}/>}>
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
        {renderImagePreview('banner')}
        <RichTextInput label="Descripcion del evento" source="description" />
        {/**Funcion para leer y sacar empresas y participantes */}
        <p>Suba el archivo con las empresas asistentes al evento</p>
        <EmpresasFromExcel eventId={props.eventId}/>
        <p>Suba el archivo con los asistentes del evento</p>
        <AssistantsFromExcel eventId={props.eventId}/>
      </SimpleForm>
    </Edit>
  );
}

export default EventEdit;
