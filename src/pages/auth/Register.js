import React, { useState } from 'react';
import styles from './auth.module.scss';
import Card from '../../components/card/Card';
import { LuUserPlus } from "react-icons/lu";
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/PasswordInput';

const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
}

const Register = () => {
  const [formData, setFormData] = useState(initialState);

  const { name, email, password, password2} = formData;

  const handleInputChange = () => {};

  const loginUser = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className="--flex-center">
                <LuUserPlus size={35} color='#999' />
            </div>
            <h2>Register</h2>
            <br />
            <form onSubmit={loginUser}>
                <input type="text" placeholder='Enter your name' required name='name' value={name} onChange={handleInputChange} />
                <input type="email" placeholder='Enter your email' required name='email' value={email} onChange={handleInputChange} />
                <PasswordInput type="password" placeholder='Enter your password' name='password' value={password} onChange={handleInputChange} />
                <PasswordInput type="password" placeholder='Confirm your password' name='password2' value={password2} onChange={handleInputChange} />

                <button type="submit" className='--btn --btn-primary --btn-block'>Register</button>
            </form>
            <span className={styles.register}>
                <Link to='/'>Home</Link>
                <p>&nbsp; Already have an account ? &nbsp;</p>
                <Link to='/login'>Login</Link>
            </span>
        </div>
      </Card>
    </div>
  )
}

export default Register;
