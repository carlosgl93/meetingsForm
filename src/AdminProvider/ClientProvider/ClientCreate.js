import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ArrayInput,
  SelectInput,
  ReferenceInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

function ClientCreate(props) {
  return (
    <div>
      
      <Create {...props}>
      
        <SimpleForm>
        <h2>Ingrese una empresa nueva</h2>
          <TextInput source="name" label="Nombre de la empresa" />
          <ReferenceInput source="categoryId" reference="categories">
              <SelectInput  source="name" choices=""/>
          </ReferenceInput>
          <TextInput source="contactEmail" label="Email de la empresa" />
        </SimpleForm>
      </Create>
    </div>
  );
}

export default ClientCreate;
