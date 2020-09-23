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
          <TextField source="lastName" />
          <TextField source="contactEmail" />
          <TextField source="empresa" />
          <TextField source="categoryId" />
          <SingleFieldList>
            <TextField source="representative" />
          </SingleFieldList>
        </SimpleShowLayout>
      </Show>
    </div>
  );
}

export default ClientShow;
