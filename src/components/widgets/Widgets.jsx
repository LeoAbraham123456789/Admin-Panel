import React from 'react'
import './widgets.scss'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

export const Widgets = () => {
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">21312</span>
            <span className="link">See all users</span>
        </div>
        <div className="right">
            <div className="percentage">
                <KeyboardArrowUpIcon/>
                20 %
            </div>
            <PersonOutlinedIcon className='icon'/>
        </div>
    </div>
  )
}