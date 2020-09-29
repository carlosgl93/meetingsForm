import React, { useState, useEffect, Suspense } from "react";
import Card from "../Components/Card";
import { useParams } from "react-router-dom";
import BasicSelect from "../Components/BasicSelect";
import SelectSearchInput from "../Components/SelectSearchInput";
import { useFirestoreDocData, useFirestore } from "reactfire";

function Meetings(props) {
  let params = useParams();
  console.log(params);

  

  const [state, setState] = useState({
    breaks: [],
    participants: [],
    browsingParticipant: "colaborador",
  });


  const ifBreaksParticipantsExist = () => {
    if (state.breaks.length && state.participants.length) {
      return renderBasedOnParticipantCategory();
    }
  };

  let eventRef = useFirestore().collection("events").doc(params.eventId);
  let eventInfo = useFirestoreDocData(eventRef);
  console.log("eventInfo", eventInfo);
  let breaksRef = useFirestore().collection("breaks");
  let participantsRef = useFirestore().collection("participantsFromExcel");

  useEffect(() => {
    breaksRef
      .where("eventId", "==", params.eventId)
      .get()
      .then((querySnapshot) => {
        let breakData = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        participantsRef
          .doc(params.participantId)
          .get()
          .then((doc) => {
            let browsingParticipant = doc.data();
            participantsRef
              .where("eventId", "==", params.eventId)
              .get()
              .then((querySnapshot) => {
                let participantData = querySnapshot.docs.map((doc) => {
                  return doc.data();
                });
                setState({
                  promiseFulfilled: true,
                  breaks: breakData,
                  participants: participantData,
                  browsingParticipant,
                });
              });
          });
      });
      console.log("running ifBreaksParticipantsExist ")
      ifBreaksParticipantsExist();
    console.log("state", state);

  }, []);

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

  

  console.log("last state", state);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {ifBreaksParticipantsExist()}
    </Suspense>
  );
}

export default Meetings;
