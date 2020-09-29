import React from "react";
import {
  Edit,
  SimpleForm,
  RichTextInput,
  TextInput,
  TextField,
  ArrayInput,
  ReferenceInput,
  SelectInput,
  ReferenceField
} from "react-admin";

function ClientEdit(props) {
  console.log(props)
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" label="Nombre del participante" />
        <TextInput source="lastName" label="Apellido del participante" />
        <TextInput source="empresa" label="Empresa del participante" />
        <TextInput source="contactEmail" label="Email del participante" />
        
        
        
      </SimpleForm>
    </Edit>
  );
}

export default ClientEdit;
