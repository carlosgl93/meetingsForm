import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ArrayInput,
  ReferenceInput,
  SelectArrayInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

function ClientCreate(props) {
  return (
    <div>
      <Create {...props}>
        <SimpleForm>
          <h2>Ingresa el nuevo organizador</h2>
          <TextInput source="name" label="Nombre del organizador" />
          <TextInput source="lastName" label="Apellido del organizador" />
          <TextInput source="contactEmail" label="Email de contacto" />
          <TextInput source="company" label="Compañia del organizador" />
        </SimpleForm>
      </Create>
    </div>
  );
}

export default ClientCreate;
