import React from "react";
import { Filter, TextInput } from "react-admin";
function CategoriesFilter(props) {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="name" alwaysOn />
    </Filter>
  );
}

export default CategoriesFilter;
