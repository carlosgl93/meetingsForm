import React, { useState, useEffect, Suspense } from "react";
import Card from "../Components/Card";
import { useParams } from "react-router-dom";
import BasicSelect from "../Components/BasicSelect";
import SelectSearchInput from "../Components/SelectSearchInput";
import { SuspenseWithPerf, useFirestore, useFirestoreCollection, useFirestoreCollectionData, useFirestoreDocData } from "reactfire";

function Meetings(props) {
  const { eventId, participantId } = useParams();

  const getSnapshot = async (ref, query) => {
    const snapshot = await ref.where(query.field, query.operator, query.value).get()
    console.log("SNAPSHOT:", snapshot)
    await snapshot.forEach(doc => console.log("DOC:", doc))
    return snapshot
  }

  const eventRef = useFirestore().collection('events').doc(eventId)
  const event = useFirestoreDocData(eventRef)
  console.log("EVENT:", event)
  let breaksRef = useFirestore().collection("breaks");
  let participantsRef = useFirestore().collection("participantsFromExcel");

  const breaksSnapshot = getSnapshot(breaksRef, {field: "eventId", operator: "==", value: eventId}).then(snap => snap)
  console.log("BREAKS:", breaksSnapshot)

  const [state, setState] = useState({
    breaks: [],
    participants: [],
    browsingParticipant: "colaborador",
  });

  const renderBasedOnParticipantCategory = () => {
    if (state.browsingParticipant.categoria === "colaborador") {
      if (state.breaks.length) {
        return (
          <>
            <div>
              {/**Select input para escoger los breaks asociados al eventId que llega por el url
               * pasarle las opciones desde la url por props
               */}
              <Card
                title="Seleccione el break en el cual desea tener reuniones"
                cover={<BasicSelect options={state.breaks} />}
              ></Card>
            </div>
            <div>
              {/**SelectSearchInput para escoger con que empresa reunirse, hay que pasarle los participants del break previamente seleccionado */}
              <Card
                title="Seleccione con quien desea tener reuniones"
                cover={<SelectSearchInput participants="" />}
              ></Card>
            </div>
          </>
        );
      } else if (state.browsingParticipant.categoria === "gold") {
        return (
          <>
            <div>
              {/**Select input para escoger los breaks asociados al eventId que llega por el url
               * pasarle las opciones desde la url por props
               */}
              <Card
                title="Seleccione el primer break en el cual desea tener reunion"
                cover={<BasicSelect options={state.breaks} />}
              ></Card>
            </div>
            <div>
              {/**SelectSearchInput para escoger con que empresa reunirse, hay que pasarle los participants del break previamente seleccionado */}
              <Card
                title="Seleccione con quien desea tener reuniones en su primer break"
                cover={<SelectSearchInput participants="" />}
              ></Card>
            </div>
            <div>
              {/**Select input para escoger los breaks asociados al eventId que llega por el url
               * pasarle las opciones desde la url por props
               */}
              <Card
                title="Seleccione el segundo break en el cual desea tener reunion"
                cover={<BasicSelect options={state.breaks} />}
              ></Card>
            </div>
            <div>
              {/**SelectSearchInput para escoger con que empresa reunirse, hay que pasarle los participants del break previamente seleccionado */}
              <Card
                title="Seleccione con quien desea tener reuniones en su segundo break"
                cover={<SelectSearchInput participants="" />}
              ></Card>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div>
              {/**Select input para escoger los breaks asociados al eventId que llega por el url
               * pasarle las opciones desde la url por props
               */}
              <Card
                title="Seleccione el primer break en el cual desea tener reunion"
                cover={<BasicSelect options={state.breaks} />}
              ></Card>
            </div>
            <div>
              {/**SelectSearchInput para escoger con que empresa reunirse, hay que pasarle los participants del break previamente seleccionado */}
              <Card
                title="Seleccione con quien desea tener reuniones en su primer break"
                cover={<SelectSearchInput participants="" />}
              ></Card>
            </div>
            <div>
              {/**Select input para escoger los breaks asociados al eventId que llega por el url
               * pasarle las opciones desde la url por props
               */}
              <Card
                title="Seleccione el segundo break en el cual desea tener reunion"
                cover={<BasicSelect options={state.breaks} />}
              ></Card>
            </div>
            <div>
              {/**SelectSearchInput para escoger con que empresa reunirse, hay que pasarle los participants del break previamente seleccionado */}
              <Card
                title="Seleccione con quien desea tener reuniones en su segundo break"
                cover={<SelectSearchInput participants="" />}
              ></Card>
            </div>
            <div>
              {/**Select input para escoger los breaks asociados al eventId que llega por el url
               * pasarle las opciones desde la url por props
               */}
              <Card
                title="Seleccione el tercer break en el cual desea tener reunion"
                cover={<BasicSelect options={state.breaks} />}
              ></Card>
            </div>
            <div>
              {/**SelectSearchInput para escoger con que empresa reunirse, hay que pasarle los participants del break previamente seleccionado */}
              <Card
                title="Seleccione con quien desea tener reuniones en su tercer break"
                cover={<SelectSearchInput participants="" />}
              ></Card>
            </div>
          </>
        );
      }
    } else {
      return <h1>404 not found</h1>;
    }
  };

  return (
    <SuspenseWithPerf fallback={<p>Loading...</p>} traceId="load-meeting-status">
      {(renderBasedOnParticipantCategory())}
    </SuspenseWithPerf>
  );
}

export default Meetings;
