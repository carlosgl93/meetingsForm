import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput
} from "react-admin";

function CategoryEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" label="Nombre de la categoria" />
        <NumberInput source="allowedMeetings" label="Breaks permitidos" />
        <NumberInput
          source="allowedContactsPerMeeting"
          label="Contactos permitidos por break"
        />
      </SimpleForm>
    </Edit>
  );
}

export default CategoryEdit;
