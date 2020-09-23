import React, {useState} from "react";
import { Select } from "antd";

function BasicSelect(props) {

  // const [state, setState] = setState({
  //   availableBreaks: [props.options],
  //   selectedBreaks: []
  // }) 

  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
    // setState({
    //   selectedBreaks: [value]
    // })
  }
  console.log("props of basicSelect", props)
  // let newOptions = props.options.map((option) => {
  //   return  {
  //     label: option.name,
  //     value: option.id
  //   }
  // })

  return (
    <div>
      <Select
        defaultValue="Participantes"
        style={{ width: 120 }}
        onChange={handleChange}
        //options={newOptions}
          
      >
        {console.log(props.options)}
          {/**Map que renderiza las opciones de los breaks */}
              {/* {props.options.map((break) =>
                <Option value={break.id}></Option>
              )} */}
        
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </div>
  );
}

export default BasicSelect;
