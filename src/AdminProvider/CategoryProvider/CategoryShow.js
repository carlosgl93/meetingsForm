import React from "react";
import {
  Show,
  SimpleShowLayout,
  
  TextField
 
} from "react-admin";

function CategoryShow(props) {
  return (
    <div>
      <Show {...props}>
        <SimpleShowLayout>
          <TextField source="name" />
          <TextField source="allowedMeetings" />
          <TextField source="allowedContactsPerMeeting" />
        </SimpleShowLayout>
      </Show>
    </div>
  );
}

export default CategoryShow;
