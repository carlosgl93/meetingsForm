import React from "react";
import { useStorage } from "reactfire"
import {
  Edit
} from "react-admin"
import EventForm from "./EventForm"

function EventEdit(props) {
  const storage = useStorage()
  props = {
    ...props,
    storage,
    title: "Editar Evento"
  }

  return (
    <div>
      <Edit {...props}>
        <EventForm {...props} />
      </Edit>
    </div>
  );
}

export default EventEdit;
