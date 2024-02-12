import React, { useState } from 'react';
import './Profile.scss';
import Card from '../../components/card/Card';
import me from '../../assets/img/8888.jpg';

const initialState = {
    name: '',
    email: '',
    phone: '',
    bio: '',
    photo: '',
    role: '',
    isVerified: false,
}

const Profile = () => {
  const [profile, setProfile] = useState(initialState);
  const { name, email, phone, bio, photo } = profile;
  const handleImageChange = () => {};
  const handleInputChange = () => {};
  return (
    <>
      <section>
        <div className="container">
            <h2>Profile</h2>
            <div className="--flex-start profile">
                <Card cardClass='card'>
                    <>
                        <div>
                            <div className="profile-photo">
                                <div><img src={me} alt="profile" /></div>
                                <h3>Role: Subscriber</h3>
                            </div>
                        </div>
                        <form>
                            <p>
                                <label>Change Photo :</label>
                                <input type='file' accept='image/*' name='image' onChange={handleImageChange} />
                            </p>
                            <p>
                                <label>Name :</label>
                                <input type='text' name='name' onChange={handleInputChange} value={name} />
                            </p>
                            <p>
                                <label>Email :</label>
                                <input type='email' name='email' onChange={handleInputChange} value={email} disabled />
                            </p>
                            <p>
                                <label>Phone :</label>
                                <input type='text' name='phone' onChange={handleInputChange} value={phone} />
                            </p>
                            <p>
                                <label>Bio</label>
                                <textarea name="bio" id="" cols="30" rows="10" value={bio} onChange={handleInputChange}></textarea>
                            </p>

                            <button className="--btn --btn-primary --btn-block">Update Profile</button>
                        </form>
                    </>
                </Card>
            </div>
        </div>
      </section>
    </>
  )
}

export default Profile;
