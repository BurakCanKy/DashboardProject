import React, { Component, useState, useEffect } from 'react';

function SidebarSite() {
    const [subMenu, setSubMenu] = useState('sub-menu')
    const [ecommerceMenu, setEcommerceMenu] = useState('sub-menu')
    const [toDoListMenu, setToDoListMenu] = useState('sub-menu')

    const changeSubMenu = () => {
        subMenu == "sub-menu" ? setSubMenu("sub-menu open") : setSubMenu('sub-menu')
    };

    const changeEcommerceMenu = () => {
        ecommerceMenu == "sub-menu" ? setEcommerceMenu('sub-menu open') : setEcommerceMenu('sub-menu')
    };

    const changeToDoListMenu = () => {
        toDoListMenu == "sub-menu" ? setToDoListMenu('sub-menu open') : setToDoListMenu('sub-menu')
    };
    return <nav className='sidebar'>
        <div className='sidebar-body'>
            <ul className='nav'>
                <li className='nav-category'>Main</li>
                <li className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
                        <path fill-rule="evenodd"
                            d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"
                            clip-rule="evenodd" />
                        <path fill-rule="evenodd"
                            d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z"
                            clip-rule="evenodd" />
                    </svg>Dashboard</li>
                <li className='has-sub-item'>
                    
                    <a href="#" onClick={changeEcommerceMenu}>

                        <span class="link-title flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
                        <path
                            d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>Ecommerce</span>
                    </a>
                    <ul class={ecommerceMenu}>
                        <li><a href="#">Dashboard 1</a></li>
                        <li><a href="#">dashboard 2</a></li>
                        <li><a href="#">orders</a></li>
                        <li><a href="#">Products Catalog</a></li>
                        <li><a href="#">Product Details</a></li>
                        <li><a href="#">cart list</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <span class="link-title flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 mr-2">
                            <path fill-rule="evenodd"
                                d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                                clip-rule="evenodd" />
                        </svg>Social Media Analytics</span>
                    </a>
                </li>
                <li class="nav-category">apps</li>
                <li class="has-sub-item" >
                    <a href="#" onClick={changeSubMenu}>
                        <i class="icofont-mail-box"></i>
                        <span class="link-title flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 mr-2">
                            <path fill-rule="evenodd"
                                d="M6.912 3a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H6.912Zm13.823 9.75-2.213-7.191A1.5 1.5 0 0 0 17.088 4.5H6.912a1.5 1.5 0 0 0-1.434 1.059L3.265 12.75H6.11a3 3 0 0 1 2.684 1.658l.256.513a1.5 1.5 0 0 0 1.342.829h3.218a1.5 1.5 0 0 0 1.342-.83l.256-.512a3 3 0 0 1 2.684-1.658h2.844Z"
                                clip-rule="evenodd" />
                        </svg>Email</span>
                    </a>
                    <ul class={subMenu}>
                        <li>
                            <a href="#">Inbox</a>
                        </li>
                        <li>
                            <a href="#">Read</a>
                        </li>
                        <li>
                            <a href="#">Compose</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="../../apps/chat.html">
                        <i class="icofont-wechat"></i>
                        <span class="link-title flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 mr-2">
                            <path
                                d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                            <path
                                d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                        </svg>Chat</span>
                    </a>
                </li>
                <li class="has-sub-item">
                    <a href="#" onClick={changeToDoListMenu}>
                        <i class="icofont-listing-box"></i>
                        <span class="link-title flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 mr-2">
                            <path
                                d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
                        </svg>To Do List</span></a>
                    <ul class={toDoListMenu}>
                        <li><a href="../todolist/todolist.html">Tasks</a></li>
                        <li><a href="../todolist/add-new.html">add new</a></li>
                        <li><a href="../todolist/task-details.html">details</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i class="icofont-calendar"></i>
                        <span class="link-title flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 mr-2">
                            <path fill-rule="evenodd"
                                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                                clip-rule="evenodd" />
                        </svg>Calendar</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>

}

export default SidebarSite;
