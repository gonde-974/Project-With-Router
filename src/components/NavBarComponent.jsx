import React from 'react';
let pathName = window.location.pathname.slice(1);

function NavBarComponent() {
    let routers = ['Products', 'About', 'Contact'];
    return (
        <div className="container-float mx-auto flex items-center justify-between h-[80px] px-6 bg-slate-700 shadow-md ">
            <h1 className="text-2xl font-bold text-white">Project Without Router</h1>
            <ul className="flex space-x-6">
                {routers.map((el, index) => (
                    <li key={index}>
                        <a
                            href={`/${el.toLowerCase()}`}
                            className="text-lg text-white hover:text-blue-400 transition duration-300 ease-in-out"
                           

                        >
                            {el}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavBarComponent;
