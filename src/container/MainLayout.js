import React from 'react'
import '../style/MainLayout.css';
import Home from './Home';
import AppNavbar from '../components/layout/AppNavbar'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'
import Counter from '../components/layout/Counter';
import sidemenus from './Routing'
import List from './pages/list/List';
import Todo from './pages/todo/Todo';
import Error404 from './pages/Error404';
import { Switch, Route } from 'react-router-dom';
import Movie from './movies/MovieList'
import RatingList from './RatingList'
import StudentList from './student/StudentList';
import RatingStudent from './student/RatingStudent'
import MovieDescription from './movies/MovieDescription'
import Category from '../crud/Category'
import SimpleForm from '../Form/SimpleForm'

const MainLayout = ()=>{
    return(
        <div className="container">
            <AppNavbar/>
            <Sidebar menus={sidemenus}/>
            <Footer/>
            <div className="main-content">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/counter" component={Counter}/>
                    <Route path="/list" component={List}/>
                    <Route path="/movies/:id" component={MovieDescription}/>
                    <Route path="/movies" component={Movie}/>
                    <Route path="/rating" component={RatingList}/>
                    <Route path="/student" component={StudentList}/>
                    <Route path="/ratingstudent" component={RatingStudent}/>
                    <Route path="/category" component={Category}/>
                    <Route path="/simple" component={SimpleForm}/>

                    {/* <Route path="/order" component={Order} exact/> */}
                    {/* <Route component={Error404}/> */}
                </Switch>
            </div>
        </div>
    )
}

export default MainLayout;