import React from "react";
import CategoriesFilter from "./CategoriesFilter";
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  DeleteButton,
  EditButton,
  
} from "react-admin";

function CategoryList(props) {
  return (
    <List {...props} filters={<CategoriesFilter />}>
      <Datagrid>
        <TextField source="name" />
        <EditButton label="Editar" />
        <DeleteButton label="Eliminar" redirect={false} />
      </Datagrid>
    </List>
  );
}

export default CategoryList;
