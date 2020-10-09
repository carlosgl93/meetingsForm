import React, { useState } from "react";
import {useFirestore} from "reactfire"
import {
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { Button } from "antd";

function OrganizerCreateForm(props) {

  const {organizerData, setOrganizerData, organizerCreate, eventId} = props

  return (
    <SimpleForm>
      {/* first input for name  */}
      <TextInput
        value={organizerData.name}
        onChange={(event) =>
          setOrganizerData({
            ...organizerData,
            name: event.target.value,
          })
        }
        label="Nombre del organizador"
      />
      <TextInput
        onChange={(event) =>
          setOrganizerData({
            ...organizerData,
            lastName: event.target.value,
          })
        }
        label="Apellido del organizador"
      />
      <TextInput
        onChange={(event) =>
          setOrganizerData({
            ...organizerData,
            contactEmail: event.target.value,
          })
        }
        label="Email de contacto"
      />
      <TextInput
        label="Compañia del organizador"
        onChange={(event) =>
          setOrganizerData({
            ...organizerData,
            company: event.target.value,
          })
        }
      />
      <Button
      onClick={organizerCreate}
      >
        Crear organizador
      </Button>
    </SimpleForm>
  );
}

export default OrganizerCreateForm;
