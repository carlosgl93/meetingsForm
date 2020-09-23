import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
  DateTimeInput,
  NumberField,
  DateInput,
  NumberInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const EventMeetingsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const EventMeetingsList = (props) => (
  <List {...props} filters={<EventMeetingsFilter />}>
    <Datagrid>
      <TextField source="Nombre" />
      <TextField source="Fecha" />
      <TextField source="Lugar" />
      <TextField source="Organizador" />
      <NumberField source="Participantes" />
      <ShowButton label="Ver Evento" />
      <EditButton label="Editar" />
      <DeleteButton label="Eliminar" redirect={false} />
    </Datagrid>
  </List>
);

export const EventMeetingsShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <ReferenceField source="orgId" reference="organizadore">
        <TextField source="Organizador" />
      </ReferenceField>
      <TextField source="Nombre" />
      <TextField source="Fecha" />
      <TextField source="Lugar" />
      <RichTextField source="Descripcion" />
      <FileField source="file.src" title="file.title" />
      <TextField source="participante" />
      <TextField label="Agregar Meetings"/>
      <TextInput source="eventMeetings" label="Meeting 1" />
    </SimpleShowLayout>
  </Show>
);

export const EventMeetingsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextField source=""/>
      <TextInput source="Nombre" label="Nombre del Evento" />
      <TextInput source="Organizador" label="Organizador del Evento"/>
      <NumberInput source="telefono" label="Telefono del organizador"/>
      <DateTimeInput source="Fecha" label="Fecha del Evento" />
      <TextInput source="Lugar" label="Lugar del Evento" />
      <RichTextInput source="Descripcion" />
      <FileInput
        source="empresasFile"
        label="Ingresar empresas participantes mediante archivo excel/csv"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      >
        <FileField source="src" title="title" />
      </FileInput>
      <FileInput
        source="participantesFile"
        label="Ingresar participantes por empresa mediante archivo excel/csv"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      >
        <FileField source="src" title="title" />
      </FileInput>
      <TextInput source="participante" />
    </SimpleForm>
  </Create>
);

export const EventMeetingsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="createdby" />
            <DateTimeInput source="Fecha" />
            <TextInput source="participante" />
            <TextInput source="Nombre" />
            <TextInput source="Lugar" />
            <TextInput source="updatedby" />
            <DateInput source="createdate" label="fecha de creacion" />
            <TextInput source="Descripcion" />
        </SimpleForm>
    </Edit>
);
