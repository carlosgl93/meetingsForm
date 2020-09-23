import React, {useState} from 'react';
import { Modal, Button } from 'antd';


export default function SimpleModal(props) {
  
  return (
    <div>
      <Modal
          visible={props.visible}
          title="Title"
          onOk={props.onOk}
          onCancel={props.onCancel}
          footer={[
            <Button key="back" onClick={props.onCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" onClick={props.onOk}>
              Submit
            </Button>,
          ]}
        >
          <h2>Agregar reunion</h2>
          <input /> 
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
    </div>
  );
}
