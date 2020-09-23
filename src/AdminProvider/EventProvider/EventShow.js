import React from "react";
import {
  Show,
  SimpleShowLayout,
  ReferenceField,
  TextField,
  RichTextField,
  FileField,
  ArrayField
} from "react-admin";

function EventShow(props) {
  return (
    <div>
      <Show {...props}>
        <SimpleShowLayout>
        <ReferenceField source="organizerId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField source="organizerId" reference="users">
          <TextField source="contactEmail" />
        </ReferenceField>
          <TextField source="name" />
          <TextField source="date" />
          <TextField source="address" />
          <RichTextField source="description" />
          <FileField source="file.src" title="file.title" />
          {/**ReferenceArrayField */}
          <ReferenceField source="participantsIds" reference="attendants">
            <ArrayField source="id" />
          </ReferenceField>
        </SimpleShowLayout>
      </Show>
    </div>
  );
}

export default EventShow;
