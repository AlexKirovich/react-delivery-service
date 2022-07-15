import React from 'react'
import { Link } from 'react-router-dom';
import './Heading.scss'

export const Heading = () => {
  return (
    <nav className="nav">
        <h3>Submit Your Request</h3>
        <Link className="link" to="/add">
          Add Parcel
        </Link>
      </nav>
  )
}

export default Heading;
