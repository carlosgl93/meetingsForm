import React from "react";
import {
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";
import TimeInput from "../TimeInput";
import TransformSave from "../TransformSave";

function BreakCreateForm(props) {
  let { finalBreakLength } = props
  return (
    <SimpleForm
      toolbar={
        <TransformSave
          transform={(data) => {
            if (data.minHours === "minutos") {
              finalBreakLength = data.schedule * 60;
            } else {
              finalBreakLength = data.schedule * 3600;
            }
            return { ...data, duration: finalBreakLength };
          }}
        />
      }
    >
      <TextInput source="name" label="Nombre del break" />
      <TimeInput />
      <NumberInput
        source="schedule"
        label="Duracion del break en min o horas"
      />
      <SelectInput
        label="Minutos o horas?"
        source="minHours"
        choices={[
          { id: "minutos", name: "minutos" },
          { id: "horas", name: "horas" },
        ]}
      />
      <ReferenceInput
        source="eventId"
        reference="events"
        label="¿A que evento pertence este break?"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  );
}

export default BreakCreateForm;
