import React from 'react'
import './Student.css'

const Student = (props) => {
    return (
        <div className="card" style={{ backgroundImage: `url(./assets/images/${props.foto})` }}>
            <div className="detailSiswa">
            <h3>Nim : <span>{props.nim}</span></h3>
            <h3>Nama : <span>{props.nama}</span></h3>
            <h3>IPK : <span>{props.ipk}</span></h3>
            <h3>Kota : <span>{props.kota}</span></h3>

            </div>
        </div>
    )
}

export default Student;