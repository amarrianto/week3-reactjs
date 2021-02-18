import React from "react";
import "./Student.css";
import { Icon } from "react-icons-kit";
import { thumbsOUp } from "react-icons-kit/fa/";

const Student = (props) => {
  const handleLike = (studentNim) => {
    props.onLike(studentNim);
  };

  return (
    
    <div
      className="card"
      style={{ backgroundImage: `url(./assets/images/${props.foto})` }}
    >
      <div className="detailSiswa">
        <span style={{ color: "#ffffff", opacity: 0.5 }}>
          <button onClick={() => handleLike(props.nim)}>
            <Icon size={18} icon={thumbsOUp} />
          </button>
        </span>
        Nim : {props.nim}<br/>
        Nama : {props.nama}<br/>
        IPK : {props.ipk}<br/>
        Vote : {props.vote}<br/>
        Skill : {props.skill}
      </div>
    </div>
  );
};

export default Student;
