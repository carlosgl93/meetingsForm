import React from "react";
import { Filter, TextInput } from "react-admin";
function AttendantsFilter(props) {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="name" alwaysOn />
    </Filter>
  );
}

export default AttendantsFilter;
