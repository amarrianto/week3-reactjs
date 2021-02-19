import React, { Component } from 'react'
import {listCategory} from './api/api-category';
import {TableCategory, AddEditForm} from './CategoryComponent';


export default class Category extends Component {
    // 1. declare regions[] state 
    state = {
        category: [],
        isModalShow :false
    }

    // call showListCategory to fill category[]on first time render
    componentDidMount(){
        this.showListCategory();
    }

    showListCategory = ()=>{
        listCategory().then(data=>{
            this.setState({
                category : data
            })
        })
    }

    onShowModel = (value)=>{
        this.setState({
            isModalShow: value
        })
    }

    render(){
        const {category, isModalShow} = this.state;

        return(
            <>
                <h1>Judul</h1>
                <TableCategory category = {category}></TableCategory>
            </>
        )
    }
}
