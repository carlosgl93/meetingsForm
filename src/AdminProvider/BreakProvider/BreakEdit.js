import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  FileField,
  FileInput,
  DateInput,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  Toolbar,
  SaveButton,
  DateTimeInput,
  SelectArrayInput
} from "react-admin";

import RichTextInput from "ra-input-rich-text";
function BreakEdit(props) {
  return (
    <div>
      <h2>Edita el break</h2>
      <Create {...props}>
        <SimpleForm>
          <TextInput source="name" label="Nombre del break" />
          <DateTimeInput source="horario" label="Horario del break" />
          <DateTimeInput source="horario" label="Duración del break" />
          <ReferenceInput label="Evento al cual pertenece este break" source="eventId" reference="events">
              <SelectArrayInput>

              </SelectArrayInput>
          </ReferenceInput>
        </SimpleForm>
      </Create>
    </div>
  );
}

export default BreakEdit;
