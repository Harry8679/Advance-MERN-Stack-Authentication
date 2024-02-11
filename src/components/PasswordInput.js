import React, { useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import './PasswordInput.scss';



const PasswordInput = ({ placeholder, value, onChange, name, onPaste }) => {
  const [showPassword, setShowPassword] = useState(false);

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  }
  return (
    <div className='password'>
      <input type={showPassword ? 'text': 'password'} placeholder={placeholder} required name={name} value={value} onChange={onChange} onPaste={onPaste} />
      <div className="icon" onClick={tooglePassword}>
        {showPassword ? (<FaEyeSlash size={20} />) : (<IoEyeSharp size={20} />)}
      </div>
    </div>
  )
}

export default PasswordInput
