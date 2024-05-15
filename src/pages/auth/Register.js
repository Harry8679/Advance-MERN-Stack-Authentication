import React, { useState, useEffect } from 'react';
import styles from './auth.module.scss';
import Card from '../../components/card/Card';
import { LuUserPlus } from "react-icons/lu";
import { Link } from 'react-router-dom';
// import PasswordInput from '../../components/PasswordInput';
import PasswordInput from '../../components/passwordInput/PasswordInput';
// import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { FaCircleCheck } from "react-icons/fa6";


const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
}

const Register = () => {
  const [formData, setFormData] = useState(initialState);

  const { name, email, password, password2} = formData;

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <ImCross color='red' size={15} />;
  const checkIcon = <FaCircleCheck color='green' size={15} />;

  const switchIcon = (condition) => {
    if (condition) {
        return checkIcon;
    } else {
        return timesIcon;
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Check Lowercase and Uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        setUCase(true);
    } else {
        setUCase(false);
    }

    // Check for numbers
    if (password.match(/([0-9])/)) {
        setNum(true)
    } else {
        setNum(false)
    }

    // Check for the special characters
    if (password.match(/([!,@,#,$,%,^,&,*,_,~])/)) {
        setSChar(true);
    } else {
        setSChar(false);
    }

    // Check for PASSWORD LENGTH
    if (password.length > 5) {
        setPassLength(true);
    } else {
        setPassLength(false);
    }
  }, [password]);

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

                {/* Password Strength */}
                <Card cardClass={styles.group}>
                    <ul className="form-list">
                        <li>
                            <span className={styles.indicator}>
                                {/* {uCase ? checkIcon : timesIcon} &nbsp; Lowercase & uppercase */}
                                {switchIcon(uCase)} &nbsp; Lowercase & Uppercase
                            </span>
                        </li>
                        <li>
                            <span className={styles.indicator}>
                                {switchIcon(num)} &nbsp; Number (0-9)
                            </span>
                        </li>
                        <li>
                            <span className={styles.indicator}>
                                {switchIcon(sChar)} &nbsp; Special Characters (!@#$%^&*)
                            </span>
                        </li>
                        <li>
                            <span className={styles.indicator}>
                                {switchIcon(passLength)} &nbsp; At least 6 characters
                            </span>
                        </li>
                    </ul>
                </Card>

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
