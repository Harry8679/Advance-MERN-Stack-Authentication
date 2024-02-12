import React, { useState } from 'react';
import styles from './auth.module.scss';
import Card from '../../components/card/Card';
// import { RiLoginCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/PasswordInput';
import { MdOutlineMailLock } from "react-icons/md";



const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = () => {};

  const loginUser = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className="--flex-center">
                <MdOutlineMailLock size={35} color='#999' />
            </div>
            <h2>Forgot Password</h2>
            <br />
            <form onSubmit={loginUser}>
                <input type="email" placeholder='Enter your email' required name='email' value={email} onChange={handleInputChange} />

                <button type="submit" className='--btn --btn-primary --btn-block'>Get Reset Email</button>
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

export default ForgotPassword;
