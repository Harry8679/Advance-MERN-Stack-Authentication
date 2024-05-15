import React, { useState } from 'react';
import styles from './auth.module.scss';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import { GrPowerReset } from "react-icons/gr";
// import PasswordInput from '../../components/PasswordInput';
import PasswordInput from '../../components/passwordInput/PasswordInput';

const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
}

const ResetPassword = () => {
  const [formData, setFormData] = useState(initialState);

  const { password, password2 } = formData;

  const handleInputChange = () => {};

  const loginUser = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className="--flex-center">
                <GrPowerReset size={35} color='#999' />
            </div>
            <h2>Reset Password</h2>
            <br />
            <form onSubmit={loginUser}>
                <PasswordInput type="password" placeholder='New password' name='password' value={password} onChange={handleInputChange} />
                <PasswordInput type="password" placeholder='Confirm your new password' name='password2' value={password2} onChange={handleInputChange} />

                <button type="submit" className='--btn --btn-primary --btn-block'>Reset Password</button>
                <span className={styles.links}>
                    <p><Link to='/'>- Home</Link></p>
                    <p><Link to='/login'>- Login</Link></p>
                </span>
            </form>
        </div>
      </Card>
    </div>
  )
}

export default ResetPassword;
