import React from 'react'
import './Student.css'

const Student = (props) => {

    const handleLike = (studentNim) => {
        props.onLike(studentNim);
    };

    return (
        <div className="card" style={{ backgroundImage: `url(./assets/images/${props.foto})` }}>
            <div className="detailSiswa">
            Nim : {props.nim}<br/>
            Nama : {props.nama}<br/>
            IPK : {props.ipk}<br/>
            Kota : {props.kota}<br/>
            Vote : {props.vote}<br/>

            </div>
            <center>
            <button onClick={()=>handleLike(props.nim)}>
                Vote me
            </button>
            </center>
        </div>
    )
}

export default Student;