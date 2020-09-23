import React from "react";
import OrganizerFilter from "./OrganizerFilter";
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  DeleteButton,
  EditButton,

} from "react-admin";

function OrganizerList(props) {
  return (
    <List {...props} filters={<OrganizerFilter />}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="lastName" />
        <TextField source="company" />
        <TextField source="contactEmail" />
        <EditButton label="Editar" />
        <DeleteButton label="Eliminar" redirect={false} />
      </Datagrid>
    </List>
  );
}

export default OrganizerList;
