import React, {useContext} from "react";
import { Link } from "react-router-dom";
import './ParcelsList.scss'
import { GlobalContext } from "../../context/GlobalState";

const ParcelsList = () => {

    const { parcels, removeParcel } = useContext(GlobalContext);

  return (
    <div className="list">
      {parcels.map((parcel) => {
        return (
          <div className="parcel">
            <div className="parcel-info">
              <h4>Origin: {parcel.orgn}</h4>
              <h4>Destination: {parcel.dest}</h4>
              <p>Type: {parcel.type}</p>
              <p>Dispatch Date: {parcel.date}</p>
              <p>Additional Info: {parcel.info}</p>
            </div>
            <div className="parcel-btns">
              <Link to={`/edit/:${parcel.id}`} className="parcel-edit">
                Edit
              </Link>
              <button onClick={() => removeParcel(parcel.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ParcelsList;
