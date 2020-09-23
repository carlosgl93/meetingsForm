import React from "react";
import ClientFilter from "./ClientFilter";
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  DeleteButton,
  EditButton,
  ArrayField,
  RichTextField,
} from "react-admin";

function ClientList(props) {
  return (
    <List {...props} filters={<ClientFilter />}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="lastName" />        
        
        <EditButton label="Editar" />
        <DeleteButton label="Eliminar" redirect={false} />
      </Datagrid>
    </List>
  );
}

export default ClientList;
