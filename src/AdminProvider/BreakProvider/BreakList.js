import React from "react";
import BreakFilter from "./BreakFilter";
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

function BreakList(props) {
  return (
    <List {...props} filters={<BreakFilter />}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="schedule" />
        <ReferenceField source="eventId" reference="events">
          <TextField source="name" />
        </ReferenceField>
        <ShowButton/>
        <EditButton label="Editar" />
        <DeleteButton label="Eliminar" redirect={false} />
      </Datagrid>
    </List>
  );
}

export default BreakList;
