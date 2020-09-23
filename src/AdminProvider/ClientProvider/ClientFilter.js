import React from "react";
import { Filter, TextInput } from "react-admin";
function ClientFilter(props) {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="name" alwaysOn />
    </Filter>
  );
}

export default ClientFilter;
