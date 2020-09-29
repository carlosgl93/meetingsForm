import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ArrayField,
  SingleFieldList,
} from "react-admin";

function ClientShow(props) {
  return (
    <div>
      <Show {...props}>
        <SimpleShowLayout>
          <TextField source="name" />
          <TextField source="contactEmail" />
          <TextField source="categoryId" />
        </SimpleShowLayout>
      </Show>
    </div>
  );
}

export default ClientShow;
