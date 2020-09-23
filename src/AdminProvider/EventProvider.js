import * as React from "react";
import { Modal, Button } from "antd";
import MeetingCreator from "./MeetingCreator";
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
  NumberInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

// MODAL //
{
  /**
const [state, setState] = React.useState();

const showModal = () => {
    setState({
      visible: true,
    });
  };

const  handleOk = e => {
    console.log(e);
    setState({
      visible: false,
    });
  };

const handleCancel = e => {
    console.log(e);
    setState({
      visible: false,
    });
  };

function MeetingCreator() {
    
    return(
        <Modal
          title="Basic Modal"
          visible={state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
    )
} */
}

// MODAL //

const EventFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const EventList = (props) => (
  <List {...props} filters={<EventFilter />}>
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

export const EventShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <ReferenceField source="organizerId" reference="organizer">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="Organizador" />
      <TextField source="Nombre" />
      <TextField source="Fecha" />
      <TextField source="Lugar" />
      <RichTextField source="Descripcion" />
      <FileField source="file.src" title="file.title" />
      <TextField source="participante" />
      <TextField label="Agregar Meetings" />
      <Button type="primary">Add Meeting</Button>
      {/** <TextInput source="eventMeetings" label="Meeting 1"/>*/}
    </SimpleShowLayout>
  </Show>
);

export const EventCreate = (props) => {
  const [state, setState] = React.useState({
    visible: false,
  });
  const showModal = (e) => {
      console.log(e)
    setState({
      visible: true,
    });
  };

  const handleClose = (e) => {
    console.log(e)
    setState({visible:false});
  };
  return (
    <div>
      <Create {...props}>
        <SimpleForm>
          <TextInput source="Nombre" label="Nombre del Evento" />
          <TextInput source="Organizador" label="Organizador del Evento" />
          <NumberInput source="telefono" label="Telefono del organizador" />
          <TextInput source="Lugar" label="Lugar del Evento" />
          <DateInput source="Fecha" label="Fecha de Inicio del Evento" />
          <label>Hora de Inicio del Evento</label>
          <input type="time" />
          <DateInput source="Fecha" label="Fecha de Termino del Evento" />
          <label>Hora de Termino del Evento</label>
          <input type="time" />
          <button type="button" onClick={showModal}>Agregar Meeting</button>
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
      <MeetingCreator
        open={state.visible}
        onClose={handleClose}
      />
    </div>
  );
};

export const EventEdit = (props) => (
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
