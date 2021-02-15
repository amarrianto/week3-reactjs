import React from 'react'
import '../style/MainLayout.css';
import AppNavbar from '../components/layout/AppNavbar'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'
import sidemenus from './Routing'
import Home from './Home';
import Counter from '../components/Counter';
import List from './pages/list/List';
import Todo from './pages/todo/Todo';
import Error404 from './pages/Error404';
import { Switch, Route } from 'react-router-dom';

const MainLayout = ()=>{
    return(
        <div className="container">
            <AppNavbar/>
            <Sidebar menus={sidemenus}/>
            <Footer/>
            <div className="main-content">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/counter" component={Counter} exact/>
                    <Route path="/list" component={List} exact/>
                    <Route path="/todo" component={Todo} exact/>
                    {/* <Route path="/order" component={Order} exact/> */}
                    {/* <Route component={Error404}/> */}
                </Switch>
            </div>
        </div>
    )
}

export default MainLayout;