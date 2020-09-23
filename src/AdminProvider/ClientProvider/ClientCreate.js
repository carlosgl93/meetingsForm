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
        <h2>Registra tu productora</h2>
          <TextInput source="name" label="Nombre de la productora" />
          <RichTextInput label="Descripcion del Cliente" source="description" />
          
          {/**ReferenceArrayInput */}
        </SimpleForm>
      </Create>
    </div>
  );
}

export default ClientCreate;
