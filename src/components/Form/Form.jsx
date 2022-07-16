import React from 'react'
import { Link } from 'react-router-dom';
import './Form.scss';

const Form = (props) => {
  return (
    <div className="add-parcel-form-block">
      <form onSubmit={props.onSubmit} className="add-parcel-form">
        <div className="add-parcel-input">
          <label>Origin:</label>
          <input
            name="orgn"
            value={props.orgn}
            onChange={props.onChange}
            required
            type="text"
            placeholder="Enter the City"
          />
        </div>
        <div className="add-parcel-input">
          <label>Destination:</label>
          <input
            required
            name="dest"
            value={props.dest}
            onChange={props.onChange}
            type="text"
            placeholder="Enter the City"
          />
        </div>
        <select
          name="type"
          value={props.type}
          onChange={props.onChange}
          required
        >
          <option value="Gadgets">Gadgets</option>
          <option value="Drinks">Drinks</option>
          <option value="Clothes">Clothes</option>
          <option value="Medicines">Medicines</option>
          <option selected value="Other">Other</option>
        </select>
        <div className="add-parcel-input">
          <label>Date of Dispatch:</label>
          <input
            value={props.date}
            name="date"
            onChange={props.onChange}
            required
            type="date"
          />
        </div>
        <textarea
          value={props.info}
          name="info"
          onChange={props.onChange}
          placeholder="Details"
          cols="30"
          rows="5"
        />
        <div className="add-parcel-form-btns">
          <button type="submit">{props.btnType}</button>
          <Link className="link" to="/">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Form;