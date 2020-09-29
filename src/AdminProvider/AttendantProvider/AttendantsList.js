import React from "react";
import AttendantsFilter from "./AttendantsFilter";
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  DeleteButton,
  EditButton,
  ReferenceField
} from "react-admin";

function AttendantList(props) {
  return (
    <List {...props} filters={<AttendantsFilter />}>
      <Datagrid>
        <TextField label="Nombre" source="name" />
        <TextField label="Apellido" source="lastName" />
        <TextField label="Empresa" source="empresa" />
        <TextField label="Email" source="contactEmail" />
        <EditButton label="Editar" />
        <DeleteButton label="Eliminar" redirect={false} />
      </Datagrid>
    </List>
  );
}

export default AttendantList;
