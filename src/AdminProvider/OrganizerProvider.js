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
  NumberInput,
  NumberField
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const OrganizerFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const OrganizerList = (props) => (
  <List {...props} filters={<OrganizerFilter />}>
    <Datagrid>
      <TextField source="Nombre" />
      <TextField source="Empresa" />
      <TextField source="Telefono" />
      <ShowButton label="Ver Organizador" />
      <EditButton label="Editar" />
      <DeleteButton label="Eliminar" redirect={false} />
    </Datagrid>
  </List>
);

export const OrganizerShow = (props) => (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="Nombre" />
        <TextField source="Empresa"/>
        <TextField source="Telefono"/>
      </SimpleShowLayout>
    </Show>
  );

  export const OrganizerCreate = (props) => (
    <Create {...props} >
      <SimpleForm>
        <TextInput source="Nombre" label="Nombre del Organizador" />
        <TextField source="Empresa" />
        <NumberInput source="Telefono" />
      </SimpleForm>
    </Create>
  );

  export const OrganizerEdit = (props) => (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="id" options={{ disabled: true }} />
        <ReferenceInput source="createdate" options={{ disabled: true }} />
        <ReferenceInput source="lastupdate" options={{ disabled: true }} />
        
        <FileInput source="file" label="File" accept="application/pdf">
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Edit>
  );
  
