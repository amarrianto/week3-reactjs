import React, { Component } from "react";
import Student from "./Student";
import { studentData } from "./StudentData";
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
	  console.log(value);
    if (value !== null){
        this.setState({
            select : value,
            isSelected: true
        })
    }
  };

  handleLike = (studentNim) => {
    this.setState({
        students: [
            ...this.state.students.map((value) => {
                if (value.nim === studentNim) {
                    value.vote = value.vote + 1;
                    return value;
                } else {
                    return value;
                }
            })]
    });
};

  render() {
    const { students, search, select, isSelected } = this.state;
    return (
      <>
        {/* <div>
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
          </select>
        </div> */}
        <span></span><h1>Rating Popular Student</h1><hr/>        
        <div className="student">
          {
          !isSelected ?(
          students
            .filter(f => f.nama.toLowerCase().includes(search.toLowerCase()))
            .sort((a,b) => b.vote - a.vote)
            .map(value => {
              let skills = getSkillDesc(value.skill);
              return (
                <Student
                  nim={value.nim}
                  nama={value.nama}
                  ipk={value.ipk}
                  kota={value.kota}
                  onLike={this.handleLike}
                  vote={value.vote}
                  foto={value.foto}
                  skill={skills.join(',')}
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
                return (
                <Student
                    nim={value.nim}
                    nama={value.nama}
                    ipk={value.ipk}
                    kota={value.kota}
                    foto={value.foto}
                    vote={value.vote}
                    skill={skills.join(',')}
                  />)
              }))
            }
        </div>
      </>
    );
  }
}
