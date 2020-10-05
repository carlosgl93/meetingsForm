import React from "react";
import {
  Create,
} from "react-admin";
import { useStorage } from "reactfire"
import { generateId } from "../../utils"
import EventForm from './EventForm'

// generate eventId aqui, pasarselo como prop al read excel 
function EventCreate(props) {
  const eventId = generateId()
  const storage = useStorage()

  props = {...props, eventId, storage, title: "Crear Evento"}

  return (
    <Create {...props}>
      <EventForm {...props} />
    </Create>
  );
}

export default EventCreate;
