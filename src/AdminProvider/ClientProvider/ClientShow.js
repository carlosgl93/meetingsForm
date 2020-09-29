import React from "react";
import {
  Show,
  SimpleShowLayout,
  ReferenceField,
  TextField,
  RichTextField,
  ArrayField,
} from "react-admin";

function ClientShow(props) {
  console.log(props)
  return (
    
    <div>
      <Show {...props}>
        <SimpleShowLayout>
          <TextField source="name" />
          <TextField source="categoryId" />
          <TextField source="contactEmail" />
          
        </SimpleShowLayout>
      </Show>
    </div>
  );
}

export default ClientShow;
