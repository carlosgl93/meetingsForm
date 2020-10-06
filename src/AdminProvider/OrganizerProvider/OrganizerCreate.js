import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";
import { useParams } from "react-router-dom";

function ClientCreate(props) {
  let params = useParams();
  console.log("params", params)

  const event_id = ""

  console.log("props: ", props)

  return (
    <div>
      <Create {...props}>
        <SimpleForm
        // defaultValue={event_id}
        // redirect={redirect}
        >
          <h2>Ingresa el nuevo organizador</h2>
          <TextInput source="name" label="Nombre del organizador" />
          <TextInput source="lastName" label="Apellido del organizador" />
          <TextInput source="contactEmail" label="Email de contacto" />
          <TextInput source="company" label="Compañia del organizador" />
        </SimpleForm>
      </Create>
    </div>
  );
}

export default ClientCreate;
