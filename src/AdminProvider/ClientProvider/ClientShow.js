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
          <TextField source="field" />
          <RichTextField source="description" />
          {/**ReferenceArrayField */}
          {/* <ReferenceField>
            <ArrayField source={props.docId} />
          </ReferenceField> */}
          
        </SimpleShowLayout>
      </Show>
    </div>
  );
}

export default ClientShow;
