import React from "react";
import {
  Show,
  SimpleShowLayout,
  ReferenceField,
  TextField,
  RichTextField,
  FileField,
  ArrayField,
  DateField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  ReferenceManyField
} from "react-admin";

function BreakShow(props) {
  return (
    <div>
      <Show {...props}>
        <SimpleShowLayout>
        <TextField source="name" label="Nombre del break"/>
        <DateField source="time" showTime={true}/>
        <DateField source="duration" showTime={true}/>
        <ReferenceField source="eventId" reference="events">
          <TextField source="name" />
        </ReferenceField>
        {/* <ReferenceManyField label="Eventos que tienen este break" source="eventId" reference="events">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
        </ReferenceManyField> */}
        {/* <ReferenceArrayField label="Eventos que tienen este break" reference="events" source="eventId">
                <SingleFieldList>
                    <TextField source="name" />
                </SingleFieldList>
        </ReferenceArrayField> */}
        </SimpleShowLayout>
      </Show>
    </div>
  );
}

export default BreakShow;
