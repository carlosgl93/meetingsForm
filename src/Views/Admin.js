import React from 'react'
import { Admin, Resource, EditGuesser, ListGuesser } from "react-admin"
import { dataProvider, authProvider, firebaseRealtime} from "../AdminProvider/firebase-Admincfg";
import EventCreate from "../AdminProvider/EventProvider/EventCreate"
import EventEdit from "../AdminProvider/EventProvider/EventEdit"
import EventList from "../AdminProvider/EventProvider/EventList"
import EventShow from "../AdminProvider/EventProvider/EventShow"
import ClientList from "../AdminProvider/ClientProvider/ClientList"
import ClientShow from "../AdminProvider/ClientProvider/ClientShow"
import ClientEdit from "../AdminProvider/ClientProvider/ClientEdit"
import ClientCreate from "../AdminProvider/ClientProvider/ClientCreate"
import OrganizerList from "../AdminProvider/OrganizerProvider/OrganizerList"
import OrganizerShow from "../AdminProvider/OrganizerProvider/OrganizerShow"
import OrganizerEdit from "../AdminProvider/OrganizerProvider/OrganizerEdit"
import OrganizerCreate from "../AdminProvider/OrganizerProvider/OrganizerCreate"
import AttendantsList from "../AdminProvider/AttendantProvider/AttendantsList"
import AttendantShow from "../AdminProvider/AttendantProvider/AttendantShow"
import AttendantEdit from "../AdminProvider/AttendantProvider/AttendantEdit"
import AttendantCreate from "../AdminProvider/AttendantProvider/AttendantCreate"
import CategoriesList from "../AdminProvider/CategoryProvider/CategoriesList"
import CategoryShow from "../AdminProvider/CategoryProvider/CategoryShow"
import CategoryEdit from "../AdminProvider/CategoryProvider/CategoryEdit"
import CategoryCreate from "../AdminProvider/CategoryProvider/CategoryCreate"
import BreakCreate from "../AdminProvider/BreakProvider/BreakCreate"
import BreakList from "../AdminProvider/BreakProvider/BreakList"
import BreakShow from "../AdminProvider/BreakProvider/BreakShow"
import BreakEdit from "../AdminProvider/BreakProvider/BreakEdit"

function AdminApp() {
    
    return (
        <Admin dataProvider={dataProvider}>
        <Resource 
            name="events" 
            options={{label: "Eventos"}}
            list={EventList}
            show={EventShow}
            create={EventCreate}
            edit={EventEdit}
            />
        <Resource
            name="companiesFromExcel"
            options={{label: "Compañias"}}
            list={ClientList}
            Show={ClientShow}
            create={ClientCreate}
            edit={ClientEdit}
        />
        <Resource
            name="users"
            options={{label: "Organizadores"}}
            list={OrganizerList}
            Show={OrganizerShow}
            create={OrganizerCreate}
            edit={OrganizerEdit}
        />
        <Resource
            name="participantsFromExcel"
            options={{label: "Participantes"}}
            list={AttendantsList}
            Show={AttendantShow}
            create={AttendantCreate}
            edit={AttendantEdit}
        />
        <Resource
            name="categories"
            options={{label: "Categorias"}}
            list={CategoriesList}
            Show={CategoryShow}
            create={CategoryCreate}
            edit={CategoryEdit}
        />
        <Resource 
            name="breaks" 
            options={{label: "Breaks"}}
            list={BreakList}
            show={BreakShow}
            create={BreakCreate}
            edit={BreakEdit}
            />
    </Admin>
    )
}

export default AdminApp
