import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

function CategoryCreate(props) {
  return (
    <div>
      <Create {...props}>
        <SimpleForm>
          <TextInput source="name" label="Nombre de la categoria" />
          <NumberInput source="allowedMeetings" label="Breaks permitidos" />
          <NumberInput source="allowedContactsPerMeeting" label="Contactos permitidos por break" />      
        </SimpleForm>
      </Create>
    </div>
  );
}

export default CategoryCreate;
