import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// let pathName = window.location.pathname.slice(1);
import { FaOpencart } from "react-icons/fa";
function NavBarComponent() {
    let routers = [
        // {
        //     path:'/',
        //     label:'Home',
        //     icon:''
        // }        
        ,'Products', 'About', 'Contact'];
    return (
        <div className="container-float mx-auto flex items-center justify-between h-[80px] px-6 bg-slate-700 shadow-md ">
            <h1 className="text-2xl font-bold text-white">Project With Router</h1>
            {/* <NavLink to='/'>Home</NavLink> */}
            <ul className="flex space-x-6">
                {routers.map((el, index) => (
                    <li key={index}>
                        <NavLink to={`/${el.toLocaleLowerCase()}`}>{el}</NavLink>
                    </li>
                ))}
            </ul>

            <FaOpencart size={'50px'} color={'red'}/>
        </div>

    );
}

export default NavBarComponent;
