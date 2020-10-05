import React from 'react'
import { Admin, Resource, } from "react-admin"
import { dataProvider } from "../AdminProvider/firebase-Admincfg";
import EventCreate from "../AdminProvider/EventProvider/EventCreate"
import EventEdit from "../AdminProvider/EventProvider/EventEdit"
import EventList from "../AdminProvider/EventProvider/EventList"
import ClientList from "../AdminProvider/ClientProvider/ClientList"
import ClientEdit from "../AdminProvider/ClientProvider/ClientEdit"
import ClientCreate from "../AdminProvider/ClientProvider/ClientCreate"
import OrganizerList from "../AdminProvider/OrganizerProvider/OrganizerList"
import OrganizerEdit from "../AdminProvider/OrganizerProvider/OrganizerEdit"
import AttendantsList from "../AdminProvider/AttendantProvider/AttendantsList"
import AttendantEdit from "../AdminProvider/AttendantProvider/AttendantEdit"
import AttendantCreate from "../AdminProvider/AttendantProvider/AttendantCreate"
import CategoriesList from "../AdminProvider/CategoryProvider/CategoriesList"
import CategoryEdit from "../AdminProvider/CategoryProvider/CategoryEdit"
import CategoryCreate from "../AdminProvider/CategoryProvider/CategoryCreate"
import BreakCreate from "../AdminProvider/BreakProvider/BreakCreate"
import BreakList from "../AdminProvider/BreakProvider/BreakList"
import BreakEdit from "../AdminProvider/BreakProvider/BreakEdit"

function AdminApp() {
    
    return (
        <Admin dataProvider={dataProvider}>
        <Resource 
            name="events" 
            options={{label: "Eventos"}}
            list={EventList}
            create={EventCreate}
            edit={EventEdit}
            />
        <Resource
            name="companiesFromExcel"
            options={{label: "Compañias"}}
            list={ClientList}
            create={ClientCreate}
            edit={ClientEdit}
        />
        <Resource
            name="users"
            options={{label: "Organizadores"}}
            list={OrganizerList}
            edit={OrganizerEdit}
        />
        <Resource
            name="participantsFromExcel"
            options={{label: "Participantes"}}
            list={AttendantsList}
            create={AttendantCreate}
            edit={AttendantEdit}
        />
        <Resource
            name="categories"
            options={{label: "Categorias"}}
            list={CategoriesList}
            create={CategoryCreate}
            edit={CategoryEdit}
        />
        <Resource 
            name="breaks" 
            options={{label: "Breaks"}}
            list={BreakList}
            create={BreakCreate}
            edit={BreakEdit}
            />
    </Admin>
    )
}

export default AdminApp
