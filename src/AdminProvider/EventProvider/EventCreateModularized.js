import React, { useState, useEffect } from "react";
import { Create } from "react-admin";
import { useFirestore, useStorage } from "reactfire";

import FormModal from "../../Components/FormModal";
import EventForm from "../../Components/EventForm";
import OrganizerCreateForm from "../../Components/OrganizerCreateForm";
import { generateId } from "../../utils";
import BreakCreate from "../BreakProvider/BreakCreate";

// generate eventId aqui, pasarselo como prop al read excel
function EventCreate(props) {

  // creating org and break states to be used in the modals

  const [organizerData, setOrganizerData] = useState({
    name: "",
    lastName: "",
    contactEmail: "",
    company: "",
  });

  const [breakData, setBreakData] = useState({
    name: "",
    lastName: "",
    contactEmail: "",
    company: "",
  });

  // modal state to control its visibility

  const [modalVisible, setModalVisible] = useState(false);

  const eventId = generateId();
  const storage = useStorage();

  // storing the new event with the randomgen Id

  const eventsRef = useFirestore().collection("events")
  
  const storeEventId = (eventId) => {
    console.log("voy a crear un evento con este id", eventId)
    eventsRef.doc(eventId).set({eventId: eventId})
  }

  const showModal = () => {
    setModalVisible(true);
  };

  // const handleOk = (event) => {
  //   console.log(event);
  //   organizerCreate();
  //   setModalVisible(false);
  // };

  const handleCancel = (event) => {
    console.log(event);
    setModalVisible(false);
  };

  // declaring refs for easier future data handle

  let organizerRef = useFirestore().collection("users");
  let breakRef = useFirestore().collection("breaks");

  const organizerCreate = (event) => {
    event.preventDefault();
    // firebase logic to create organizer
    let res = null;
    organizerRef.add(organizerData).then((response) => {
      console.log("RESPONSE from organizer create:", response);
      res = response;
    });
    setModalVisible(false);
  };

  const breakCreate = (event) => {
    event.preventDefault();
    let response = null;
    breakRef.add(breakData).then((response => {
      console.log("Response from break create:", response)
    }))
    setModalVisible(false);
  }

  useEffect(
    storeEventId(eventId)
  )

  return (
    <div>
      <Create {...props}>
        <EventForm showModal={showModal} eventId={eventId} storage={storage} />
      </Create>

      <FormModal
        title="Crea un nuevo organizador"
        visible={modalVisible}
        handleOk={organizerCreate}
        handleCancel={handleCancel}
        action={setOrganizerData}
      >
        <OrganizerCreateForm />
      </FormModal>

      <FormModal>
        <BreakCreate
        title="Crea un nuevo break"
        visible={modalVisible}
        handleOk={breakCreate}
        handleCancel={handleCancel}
        action={setBreakData}
        />
      </FormModal>
    </div>
  );
}

export default EventCreate;
