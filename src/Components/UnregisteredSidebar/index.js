import React from 'react'
import {Link} from "react-router-dom"
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, HomeOutlined } from '@ant-design/icons';


const { Sider } = Layout;

function UnRegisteredSidebar() {
    return (
        <div>   
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
                        <Link to="/signUp">Registrate</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>
                        <Link to="/login">Log in</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>
    )
}

export default UnRegisteredSidebar
