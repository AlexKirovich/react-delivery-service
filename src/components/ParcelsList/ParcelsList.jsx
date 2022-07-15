import React from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import './ParcelsList.scss'

const ParcelsList = () => {
  const list = [
    {
      orgn: "Kharkiv",
      dest: "Kiev",
      type: "Gadget",
      date: "03/11/2020",
      info: "Chilled chicken",
      id: nanoid(),
    },
    {
      orgn: "Sumy",
      dest: "Mariupol",
      type: "Other",
      date: "03/12/2021",
      info: "Niceeeeeeee",
      id: nanoid(),
    },
  ];
  return (
    <div className="list">
      {list.map((parcel) => {
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
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ParcelsList;
