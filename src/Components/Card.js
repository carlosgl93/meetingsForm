import React from "react"
import { Space, Card } from 'antd';

function SpaceVertical(props) {
  return (
    <Space direction="vertical">
      <Card
        title={props.title}
        style={{ width: 500 }}
        cover={props.cover}>
      </Card>
    </Space>
  );
}

export default SpaceVertical