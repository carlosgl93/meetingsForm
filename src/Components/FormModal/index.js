import React from "react"
import { Modal } from "antd"

const FormModal = props => (
  <Modal
    title={props.title}
    visible={props.visible}
    onOk={props.handleOk}
    onCancel={props.handleCancel}
  >
    {props.children}
  </Modal>
)

export default FormModal