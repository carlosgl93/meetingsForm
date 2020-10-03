import React from "react";
import {
    Edit,
    SimpleForm,
    DateTimeInput,
    TextInput,
    ReferenceInput,
    ReferenceArrayInput,
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
        <ReferenceArrayInput label="Breaks del evento" source="id" reference="breaks">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
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
