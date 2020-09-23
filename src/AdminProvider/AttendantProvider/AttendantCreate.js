import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ArrayInput,
  ReferenceInput,
  SelectInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

function ClientCreate(props) {
  return (
    <div>
      <Create {...props}>
        <SimpleForm>
          <TextInput source="name" label="Nombre del participante" />
          <TextInput source="lastName" label="Apellido del participante" />
          <TextInput source="empresa" label="Empresa del participante" />
          <TextInput source="contactEmail" label="Email del participante" />
          <ReferenceInput source="categoryId" reference="categories">
              <SelectInput  source="categoryId" choices=""/>
          </ReferenceInput>
          
        </SimpleForm>
      </Create>
    </div>
  );
}

export default ClientCreate;
