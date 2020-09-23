import React from 'react'
import { Spin, Space } from "antd"
import "./Loading.css"

function Loading() {
    return (
        <Space size="large" className="loading">
            <Spin size="large"/>
        </Space>
    )
}

export default Loading
