import React from "react";
import { Filter, TextInput } from "react-admin";
function EventFilter(props) {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="title" alwaysOn />
    </Filter>
  );
}

export default EventFilter;
