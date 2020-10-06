import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ArrayInput,
  ReferenceInput,
  SelectInput
} from "react-admin";

function ClientCreate(props) {
  return (
    <div>
      <Create {...props}>
        <SimpleForm>
          <TextInput source="name" label="Nombre del participante" />
          <TextInput source="lastName" label="Apellido del participante" />
          <TextInput source="empresa" label="Empresa del participante" />
          <TextInput source="contactEmail" label="Email del participante" />
        </SimpleForm>
      </Create>
    </div>
  );
}

export default ClientCreate;
