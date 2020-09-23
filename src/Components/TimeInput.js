import React from 'react'
import {Field} from "react-final-form"

function TimeInput() {
    return (
        <div>
            <Field name="breakSchedule" component="input" type="time" placeholder="01:00 PM"/>
        </div>
    )
}

export default TimeInput
