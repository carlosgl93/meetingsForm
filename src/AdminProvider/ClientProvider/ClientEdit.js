import React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    TextField,
    ArrayInput,
    ReferenceInput,
    SelectInput
} from "react-admin"
import RichTextInput from "ra-input-rich-text";

function ClientEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        {/* ReferenceArrayInput */}
        {/* <ArrayInput source="eventIds"/> */}
        <TextInput source="name" />
        <TextInput source="lastName" />
        <ReferenceInput
            label="Eventos creados por este cliente"
            source="eventId"
            reference="events"
          >
            <SelectInput source="id" />
          </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
}

export default ClientEdit;
