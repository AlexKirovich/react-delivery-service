import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState.jsx";
import Form from "../Form/Form.jsx";

const AddParcel = () => {
  
  const DEFAULT_TYPE = "Gadgets";

  const [parcel, setParcel] = useState({
    orgn: "",
    dest: "",
    type: DEFAULT_TYPE,
    date: "",
    info: "",
  });

  const { addParcel } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    const newParcel = {
      ...parcel,
      id: nanoid(),
    };
    addParcel(newParcel);
    navigate("/");
  };

  const onChange = (e) => {
    setParcel({ ...parcel, [e.target.name]: e.target.value });
  };

  return (
    <Form
      onSubmit={onSubmit}
      onChange={onChange}
      orgn={parcel.orgn}
      dest={parcel.dest}
      date={parcel.date}
      type={parcel.type}
      info={parcel.info}
      btnType={"Submit"}
    />
  );
};

export default AddParcel;
