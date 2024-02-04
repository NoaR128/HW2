import React from 'react'
import CCForm from './CCForm'

export default function Q2() {
    return (
        <div style={{border:"2px solid black", borderRadius:20 ,width:"100%" ,margin: 20, padding:20}}>
            <h3>Q2</h3>
            <CCForm name="First Name"/>
            <CCForm name="Last Name" />
            <CCForm name="Grade" />

        </div>
    )
}
