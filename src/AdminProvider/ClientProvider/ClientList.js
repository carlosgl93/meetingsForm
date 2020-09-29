import React from "react";
import ClientFilter from "./ClientFilter";
import {useFirestore} from "reactfire"
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  DeleteButton,
  EditButton,
  ArrayField,
  RichTextField,
  ReferenceField
} from "react-admin";

function ClientList(props) {
  console.log(props)
  //const categoryRef = useFirestore().collection()
  return (
    <List {...props} filters={<ClientFilter />}>
      <Datagrid>
        <TextField source="name" />
        <ReferenceField source="categoryId" reference="categories">
          <TextField source="name"/>
        </ReferenceField>
        
        <TextField source="contactEmail" />
        <EditButton label="Editar" />
        <DeleteButton label="Eliminar" redirect={false} />
      </Datagrid>
    </List>
  );
}

export default ClientList;
