import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

function OrganizerShow(props) {
  return (
    <div>
      <Show {...props}>
        <SimpleShowLayout>
          <TextField source="name" />
          <TextField source="lastName" />
          <TextField source="company" />
          <TextField source="contactEmail" />
        </SimpleShowLayout>
      </Show>
    </div>
  );
}

export default OrganizerShow;
