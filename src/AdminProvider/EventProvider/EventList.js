import React from "react";
import EventFilter from "./EventFilter";
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  DeleteButton,
  EditButton,
  ArrayField,
  ReferenceField,
} from "react-admin";

function EventList(props) {
  return (
    <List {...props} filters={<EventFilter />}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="date" />
        <TextField source="address" />
        <ReferenceField source="organizerId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <EditButton label="Editar" />
        <DeleteButton label="Eliminar" redirect={false} />
      </Datagrid>
    </List>
  );
}

export default EventList;
