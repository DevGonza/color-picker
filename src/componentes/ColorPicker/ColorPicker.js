import React, { useState } from 'react'
import './ColorPicker.css'

export const ColorPicker = () => {
  const [colorSelect, setColorSelect] = useState ('');


  return (
    <div className='container ' style={{backgroundColor:colorSelect}}>
      <div className="formColor">
        <p>Color Picker</p>
        <div className='separador'>
          <label htmlFor="exampleColorInput" className="form-label"></label>
          <input type="color" className="form-control form-control-color" id="exampleColorInput" value={colorSelect} onChange={(e)=>setColorSelect(e.target.value)} title="Choose your color" />
          <input className="form-input-text" type="text" placeholder="Color seleccionado"  value={colorSelect} onChange={(e) => setColorSelect(e.target.value)} aria-label="default input example" disabled />
        </div>
      </div>
    </div>
  )
}


export default ColorPicker
