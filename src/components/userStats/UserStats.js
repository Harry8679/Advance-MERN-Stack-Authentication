import React from 'react';
import './UserStats.scss';
import InfoBox from '../infoBox/InfoBox';
import { FaUsers, FaUserXmark, FaUserCheck, FaUserMinus } from "react-icons/fa6";



const icon1 = <FaUsers size={40} color='#fff' />
const icon2 = <FaUserCheck size={40} color='#fff' />
const icon3 = <FaUserMinus size={40} color='#fff' />
const icon4 = <FaUserXmark size={40} color='#fff' />

const UserStats = () => {
  return (
    <div className='user-summary'>
      <h3 className="--mt">User Stats</h3>
      <div className="info-summary">
        <InfoBox icon={icon1} title='Total Users' count={3} bgColor='card1' />
        <InfoBox icon={icon2} title='Verified Users' count={2} bgColor='card2' />
        <InfoBox icon={icon3} title='Unverified Users' count={4} bgColor='card3' />
        <InfoBox icon={icon4} title='Suspended Users' count={1} bgColor='card4' />
      </div>
    </div>
  )
}

export default UserStats;
