import React from "react";
import Card from "../Components/Card";
import { useParams } from "react-router-dom";
import BasicSelect from "../Components/BasicSelect";
import SelectSearchInput from "../Components/SelectSearchInput";
import { SuspenseWithPerf, useFirebaseApp, useFirestore, useFirestoreCollection, useFirestoreCollectionData, useFirestoreDocData } from "reactfire";

import useArrayQuery from "../hooks/useArrayQuery"

function Meetings(props) {
  const { eventId, participantId } = useParams();
  const firestore = useFirestore()

  const eventRef = firestore.doc(`events/${eventId}`)
  const event = useFirestoreDocData(eventRef)
  const breaks = useArrayQuery(firestore, "breaks", event.breakIds)
  const participantRef = firestore.doc(`attendants/${participantId}`)
  const attendant = useFirestoreDocData(participantRef)
  const categoryRef = firestore.doc(`categories/${attendant.categoryId}`)
  const category = useFirestoreDocData(categoryRef)

  return (
    <SuspenseWithPerf fallback={<p>Loading...</p>} traceId="load-meeting-status">
      <div>
        <header className="">
          <img src="" />
        </header>

      </div>
    </SuspenseWithPerf>
  );
}

export default Meetings;
