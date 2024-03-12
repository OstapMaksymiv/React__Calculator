import { useContext } from 'react'
import React from 'react'
import {ValueContext} from "./App.js"
function Input({val}) {
  const { value, setValue } = useContext(ValueContext);
  return (
    <div className="display">
            <input value={value}/>
    </div>
  )
}

export default Input