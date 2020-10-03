import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";
import TimeInput from "../../Components/TimeInput"
import TransformSave from "../../Components/TransformSave";


function BreakCreate(props) {
  let finalBreakLength = "";
  return (
    <div>
      <h2>Ingresa un nuevo break</h2>
      <Create {...props}>
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
          
          <TimeInput/>
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
      </Create>
    </div>
  );
}

export default BreakCreate;
