import React, { Component } from "react";
import { studentData } from "./StudentData";
import Student from "./Student";
import { getSkillDesc } from '../api/apiClient'
import "./Student.css";

export default class StudentList extends Component {
  state = {
    students: [],
    search: "",
    select: "",
    isSelected: false
  };

  componentDidMount() {
    this.setState({
      students: studentData
    });
  }

  onHandleChange = (e) => {
    this.setState({
      search: e.target.value,
      isSelected: false
    });
    console.log(this.state.search);

  };

  onHandleSelect = (e) => {
    const value = e.target.selectedIndex !== 0 ? e.target.options[e.target.selectedIndex].value : null;
	
    if (value !== null){
        this.setState({
            select : value,
            isSelected: true
        })
    }
  };

  render() {
    const { students, search, select, isSelected } = this.state;
    return (
      <>
        <div>
          <input
            placeholder="Search Student..."
            value={search}
            onChange={this.onHandleChange}
          />
          <select value={select} onChange={this.onHandleSelect}>
            <option value="">Filter By</option>
            <option value="nama">Nama</option>
            <option value="ipk">IPK</option>
            <option value="kota">Kota</option>
            <option value="kota">Kota</option>
          </select>
        </div>
        <div className="student">
          {
          !isSelected ?(
          students
            .filter(f => f.nama.toLowerCase().includes(search.toLowerCase()))
            .map(value => {
              let skills = getSkillDesc(value.skill);
              return (
                <Student
                  nim={value.nim}
                  nama={value.nama}
                  ipk={value.ipk}
                  kota={value.kota}
                  foto={value.foto}
                  skills={skills.join(',')}
                />)
            }))
            :
              (students
              .sort((a,b)=>{
                if (select === 'nama') {
                    return (''+a.nama).localeCompare(b.nama);
                }
                if (select === 'ipk') {
                    return b.ipk - a.ipk;
                }
                if (select === 'kota') {
                    return (''+a.kota).localeCompare(b.kota);
                }
              })
              .map(value => {
                let skills = getSkillDesc(value.skill);
                return (<Student
                    nim={value.nim}
                    nama={value.nama}
                    ipk={value.ipk}
                    kota={value.kota}
                    foto={value.foto}
                    skills={skills.join(',')}
                  />)
              }))
            }
        </div>
      </>
    );
  }
}
