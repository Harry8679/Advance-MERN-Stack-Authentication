import React, { useState } from 'react';
import './ChangePassword.scss';
import Card from '../../components/card/Card';
import PageMenu from '../../components/pageMenu/PageMenu';
import PasswordInput from '../../components/PasswordInput';

const initialState = {
    oldPassword: '',
    password: '',
    password2: '',
}

const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState);
  const { oldPassword, password, password2 } = formData;

  const handleInputChange = () => {};
  return (
    <>
      <section>
        <div className="container">
            <PageMenu />
            <h2 className='--flex-center'>Change Password</h2>
            <div className="--flex-center change-password">
                <Card cardClass='card'>
                    <>
                        <form>
                            <p>
                                <label>Current Password</label>
                                <PasswordInput type="password" placeholder='Enter the current password' name='oldPassword' value={oldPassword} onChange={handleInputChange} />
                            </p>
                            <p>
                                <label>New Password</label>
                                <PasswordInput type="password" placeholder='Enter the new password' name='password' value={password} onChange={handleInputChange} />
                            </p>
                            <p>
                                <label>Confirm Password</label>
                                <PasswordInput type="password" placeholder='Confirm your password' name='password2' value={password2} onChange={handleInputChange} />
                            </p>

                            <button className="--btn --btn-danger --btn-block">Change Password</button>
                        </form>
                    </>
                </Card>
            </div>
        </div>
      </section>
    </>
  )
}

export default ChangePassword;
