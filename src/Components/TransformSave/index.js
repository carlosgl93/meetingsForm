import React from 'react'
import {Toolbar, SaveButton} from "react-admin"

const TransformSave = (props) => (
    <Toolbar {...props}>
          <SaveButton
              label="Guardar"
              transform={props.transform}
              submitOnEnter={false}
          />
      </Toolbar>
  )

export default TransformSave
