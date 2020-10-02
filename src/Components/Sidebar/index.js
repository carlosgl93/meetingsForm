import React from 'react'
import {Link, useHistory} from "react-router-dom"
import {useUser, AuthCheck, useAuth } from "reactfire"
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, HomeOutlined } from '@ant-design/icons';
import UnregisteredSidebar from '../UnregisteredSidebar';
import firebase from "firebase"
const { Sider } = Layout;

function Sidebar() {
    const user = useUser();
    const auth = useAuth();
    const history = useHistory();
    const signOut = () => {
        firebase.auth().signOut()
    }

    return (
        <AuthCheck fallback={<UnregisteredSidebar/>}>
            <Sider
                breakpoint="md"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined/>}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link to="/profile">Perfil</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                        <Link to="/eventos">Eventos disponibles</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UploadOutlined />}>
                        <Link to="/admin">Administrar eventos</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UserOutlined />}>
                        <Link to="/login" onClick={signOut}>Log out</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        </AuthCheck>

    )
}

export default Sidebar
