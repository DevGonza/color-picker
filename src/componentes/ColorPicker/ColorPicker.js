import React, { useState } from 'react'
import './ColorPicker.css'

export const ColorPicker = () => {
  const [colorSelect, setColorSelect] = useState ('radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)');


  return (
    <div className='container ' style={{background:colorSelect}}>
      <div className="formColor">
        <p>Color Picker</p>
        <div className='separador'>
          <label htmlFor="exampleColorInput" className="form-label"></label>
          <input type="color" className="form-control form-control-color" id="exampleColorInput" value={colorSelect} onChange={(e)=>setColorSelect(e.target.value)} title="Choose your color" />
          <input className="form-input-text" type="text" placeholder="Color seleccionado"  value={colorSelect === 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)' ? '' :  colorSelect} onChange={(e) => setColorSelect(e.target.value)} aria-label="default input example" />
        </div>
      </div>
    </div>
  )
}


export default ColorPicker