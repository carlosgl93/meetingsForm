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
        <TextField source="name" />
        <TextField source="lastName" />
        <ReferenceField source="categoryId" reference="categories">
          <TextField source="name"/>
        </ReferenceField>
        <TextField source="empresa" />
        <TextField source="contactEmail" />
        
        <EditButton label="Editar" />
        <DeleteButton label="Eliminar" redirect={false} />
      </Datagrid>
    </List>
  );
}

export default AttendantList;
