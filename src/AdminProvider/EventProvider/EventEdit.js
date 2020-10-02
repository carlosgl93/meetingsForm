import React from "react";
import {
    Edit,
    SimpleForm,
    DateTimeInput,
    TextInput,
    TextField,
    ArrayInput,
    ReferenceInput,
    SelectInput,
    SelectArrayInput
} from "react-admin"

function EventEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput source="date" />
        <TextInput source="name" />
        <TextInput source="address" />
        <TextInput source="description" />
        <ReferenceInput label="Breaks del evento" source="name" reference="breaks">
              <SelectArrayInput optionText="name" />
          </ReferenceInput>
        <ReferenceInput source="organizerId" reference="users">
          <SelectInput
            source="name"
          />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
}

export default EventEdit;
