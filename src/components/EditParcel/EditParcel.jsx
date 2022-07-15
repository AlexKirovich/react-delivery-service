import React from "react";
import { Link } from "react-router-dom";

export const EditParcel = () => {

  return (
    <div className="add-parcel-form-block">
      <form action="" className="add-parcel-form">
        <div className="add-parcel-input">
          <label htmlFor="">Origin:</label>
          <input required type="text" placeholder="Enter the City" />
        </div>
        <div className="add-parcel-input">
          <label htmlFor="">Destination:</label>
          <input required type="text" placeholder="Enter the City" />
        </div>
        <select required>
          <option value="gadgets">Gadgets</option>
          <option value="drings">Drinks</option>
          <option value="clothes">Clothes</option>
          <option value="medicines">Medicines</option>
          <option value="other">Other</option>
        </select>
        <div className="add-parcel-input">
          <label htmlFor="">Date of Dispatch:</label>
          <input required type="date" />
        </div>
        <textarea placeholder="Details" cols="30" rows="5" />
        <div className="add-parcel-form-btns">
          <button type="submit">Edit</button>
          <Link className="link" to="/">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditParcel;
