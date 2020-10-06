import React from "react";
import { useParams } from "react-router-dom";
import { SuspenseWithPerf, useFirestore, useFirestoreDocData } from "reactfire";
import {
  Col,
  Divider,
  Layout,
  List,
  Typography,
  Row,
} from "antd"

import Card from "../../Components/Card";
import BasicSelect from "../../Components/BasicSelect";
import SelectSearchInput from "../../Components/SelectSearchInput";
import useArrayQuery from "../../hooks/useArrayQuery"
import moment from "moment"

const { Footer, Content } = Layout 
const { Title } = Typography

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
  console.log("BREAKS:", breaks)

  const renderBreaks = () => {
    return breaks.map((b, index) => {
      return (
        <Row key={index}>
          <Col>
            <Title level={4}>{b.name}</Title>
          </Col>
        </Row>
      )

    })
  }

  return (
    <SuspenseWithPerf fallback={<p>Loading...</p>} traceId="load-meeting-status">
      <Layout>
        <Row justify="center" gutter={[10, { xs: 8, md: 16, lg: 32}]}>
          <Col xs={24}>
            <img src={`${event.bannerUrl}`} alt={`${event.name} banner`} style={{maxWidth: "100%"}} />
          </Col>
        </Row>
        <Row gutter={[10, { xs: 8, md: 16, lg: 20}]}>
          <Col xs={13} md={15} lg={17} xl={19} offset={1}>
            <Title level={2}>{`${event.name}`}</Title>
          </Col>
          <Col xs={10} md={8} lg={6} xl={4}>
            <Title level={3}>{`${moment(event.date).format("DD / MM / YYYY")}`}</Title>
          </Col>
        </Row>
        <Row>
          <Col xs={23} offset={1}>
            <Title level={3}>Bienvenido {`${attendant.name} ${attendant.lastName}`}</Title>
            <Title level={4}>Tu categoría en este evento es {category.name}:</Title>
            <List
              itemLayout="horizontal"
              dataSource={[
                {
                  condition: `Máximo de encuentros: ${category.allowedMeetings}`,
                  description: `Puedes contactar y reunirte con empresas en un máximo de ${category.allowedMeetings} encuentros.`
                },
                {
                  condition: `Contactos por reunión: ${category.allowedContactsPerMeeting}`,
                  description: `Puedes seleccionar para contactar a un máximo de ${category.allowedContactsPerMeeting} empresas.`
                }
              ]}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.condition}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
            <Divider />
            <Title level={3}>Selecciona tus encuentros:</Title>
            {renderBreaks()}
          </Col>
        </Row>
        <Content>

        </Content>
        <Footer>

        </Footer>
      </Layout>
    </SuspenseWithPerf>
  );
}

export default Meetings;
