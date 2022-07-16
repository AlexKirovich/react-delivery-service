import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import Form from "../Form/Form.jsx";

export const EditParcel = () => {
  const [selectedParcel, setSelectedParcel] = useState({
    id: "",
    orgn: "",
    dest: "",
    type: "",
    date: "",
    info: "",
  });

  const { parcels, editParcel } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const parcelId = id;
    const selectedParcel = parcels.find(
      (parcel) => ":" + parcel.id === parcelId
    );
    setSelectedParcel(selectedParcel);
  }, [id, parcels]);

  const onSubmit = () => {
    console.log(selectedParcel);
    editParcel(selectedParcel);
    navigate("/");
  };

  const onChange = (e) => {
    setSelectedParcel({ ...selectedParcel, [e.target.name]: e.target.value });
  };

  return (
    <Form
      onSubmit={onSubmit}
      onChange={onChange}
      orgn={selectedParcel.orgn}
      dest={selectedParcel.dest}
      date={selectedParcel.date}
      type={selectedParcel.type}
      info={selectedParcel.info}
      btnType={"Edit"}
    />
  );
};

export default EditParcel;
