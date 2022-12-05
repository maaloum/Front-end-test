// import React, { useState } from 'react'

export default function Block({style,text}) {

  return (
    <div>
      {style==="heading"?
      <h1>{text}</h1>:
      <p>{text}</p>}
    </div>
  )
}
