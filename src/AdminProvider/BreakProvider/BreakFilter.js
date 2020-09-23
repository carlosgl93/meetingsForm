import React from "react";
import { Filter, TextInput } from "react-admin";

function BreakFilter(props) {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="title" alwaysOn />
    </Filter>
  );
}

export default BreakFilter;
