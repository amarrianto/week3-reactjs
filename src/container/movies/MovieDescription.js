import React from 'react'
import {useParams} from 'react-router'
import {movieData} from './MovieData'


const MovieDescription =()=> {
    let {id} = useParams()
    console.log(id)
    let MovieDesc = movieData.find(x => x.id == id)
    console.log(MovieDesc.title)
    return (
        <div>
            <h2>{MovieDesc.title}</h2>
            <img src={'../assets/images/'+MovieDesc.poster_path}/>
        </div>
    )
}

export default MovieDescription

