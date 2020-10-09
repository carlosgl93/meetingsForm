import React from "react";
import {
    Edit,
    SimpleForm,
    RichTextInput,
    TextInput,
    TextField,
    ArrayInput
} from "react-admin"

function ClientEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="lastName" />
        <TextInput source="contactEmail" />
        <TextInput source="company" />
      </SimpleForm>
    </Edit>
  );
}

export default ClientEdit;
