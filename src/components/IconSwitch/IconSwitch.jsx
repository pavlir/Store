import React from 'react'
import './IconSwitch.css'

export const IconSwitch = (props) => {
  const { icon, onSwitch } = props;
  return (
    <div className="icon-switch" onClick={onSwitch}>
      <i className="material-icons">{icon}</i>
    </div>
  )
}