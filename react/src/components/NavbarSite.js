import React, { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  IconButton,
  Avatar,
  Typography,
} from "@material-tailwind/react";

function NavbarSite() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const days = ['Sunday', 'Monday', 'Tue', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setCurrentTime(new Date());
  }
  return <header className='header flex'>
    <div className='logo'>
      <img src='https://themelooks.net/demo/dashmin/html/assets/img/logo.png' />
    </div>
    <div className='main-header'>
      <div className='user-avatar'>
        <Menu>
          <MenuHandler>
            <a href='#'><img src='https://themelooks.net/demo/dashmin/html/assets/img/avatar/user.png'></img></a>
          </MenuHandler>
          <MenuList>
            <MenuItem>My Profile</MenuItem>
            <MenuItem>Tasks</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Log Out</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className='user-info'>
        <h4 className='user-name'>Abrilay Khatun</h4>
        <p className='user-email'>abrilakh@gmail.com</p>
      </div>
    </div>
    <div className='flex relative items-center justify-end' style={{ width: '70%' }}>
      <Menu>
        <MenuHandler>
          <a href='#'><img className='w-50 mx-2' src='https://themelooks.net/demo/dashmin/html/assets/img/svg/globe-icon.svg'></img></a>
        </MenuHandler>
        <MenuList>
          <MenuItem>USA</MenuItem>
          <MenuItem>China</MenuItem>
          <MenuItem>Russia</MenuItem>
          <MenuItem>Spain</MenuItem>
          <MenuItem>Brazil</MenuItem>
          <MenuItem>Algeria</MenuItem>
        </MenuList>
      </Menu>

      <img className='w-50 mx-2' src='https://themelooks.net/demo/dashmin/html/assets/img/svg/print-icon.svg'></img>
      <div style={{ marginInline: '40px', }}>
        <h3 className='text-right text-2xl font-bold'>{currentTime.getHours()} : {currentTime.getMinutes()}</h3>
        <span className='text-sm'>{days[currentTime.getDay()]}, {currentTime.getDate()} {months[currentTime.getMonth()]} {currentTime.getFullYear()}</span>
      </div>
      <a href="#">
        <Button style={{ borderRadius: '50px', backgroundColor: '#6045e2', padding: '17px', fontWeight: '700' }}>Pending Tasks</Button>
      </a>

      <a href='#'>
        <div className='text-2xl font-bold mx-3' style={{ color: '#6045e2' }}>

          <Menu>
            <MenuHandler>
              <svg xmlns="http://www.w3.org/2000/svg" width="21.502" height="21.498"
                viewBox="0 0 21.502 21.498" class="svg replaced-svg">
                <g id="search-icon" transform="translate(1 1)">
                  <path id="icon"
                    d="M16.221,16.215A9.5,9.5,0,1,1,19,9.5a9.471,9.471,0,0,1-2.783,6.719L19.5,19.5Z"
                    fill="none" stroke="#8280fd" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"></path>
                </g>
              </svg>
            </MenuHandler>
            <MenuList>
              <div class="relative flex w-full gap-2 md:w-max">
                <div class="relative h-10 w-full  min-w-[288px]">
                  <input type="search" placeholder="Search"
                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-300 bg-transparent px-3 py-2.5 pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                  <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                </div>
                <div class="!absolute left-3 top-[13px]">
                  <svg width="13" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                      fill="#CFD8DC"></path>
                    <path
                      d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                      stroke="#CFD8DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </div>

            </MenuList>
          </Menu>
        </div>
      </a>
      <a href='#'>
        <div className='text-2xl font-bold mx-3' style={{ color: '#6045e2' }}>

          <Menu>
            <MenuHandler>
              <IconButton variant="text">
                <svg xmlns="http://www.w3.org/2000/svg" width="24.059" height="23.005"
                  viewBox="0 0 24.059 23.005" class="svg replaced-svg">
                  <g id="message-icon" transform="translate(1.06 1)">
                    <path id="Union_3" data-name="Union 3"
                      d="M.622,20.21a4.745,4.745,0,0,0,2.505-3.177A10.286,10.286,0,0,1,.74,10.439,10.537,10.537,0,0,1,11.37,0,10.537,10.537,0,0,1,22,10.439,10.537,10.537,0,0,1,11.37,20.88a10.736,10.736,0,0,1-4.985-1.217A11.074,11.074,0,0,1,1.272,21C.033,21-.518,20.678.622,20.21Z"
                      transform="translate(0 0.002)" fill="#e9e7ff" stroke="#8280fd"
                      stroke-linejoin="round" stroke-width="2"></path>
                    <circle id="Ellipse_9" data-name="Ellipse 9" cx="1.5" cy="1.5" r="1.5"
                      transform="translate(4.763 8.941)" fill="#8280fd"></circle>
                    <circle id="Ellipse_12" data-name="Ellipse 12" cx="1.5" cy="1.5" r="1.5"
                      transform="translate(9.834 8.941)" fill="#8280fd"></circle>
                    <circle id="Ellipse_11" data-name="Ellipse 11" cx="1.5" cy="1.5" r="1.5"
                      transform="translate(14.906 8.941)" fill="#8280fd"></circle>
                  </g>
                </svg>
              </IconButton>
            </MenuHandler>
            <MenuList className="flex flex-col gap-2">
              <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                <Avatar
                  variant="circular"
                  alt="tania andrew"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <div className="flex flex-col gap-1">
                  <Typography variant="small" color="gray" className="flex font-semibold">
                    Sender Name
                  </Typography>

                  <Typography variant="small" color="gray" className="font-normal ">
                    Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                <Avatar
                  variant="circular"
                  alt="tania andrew"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <div className="flex flex-col gap-1">
                  <Typography variant="small" color="gray" className="flex font-semibold">
                    Sender Name
                  </Typography>

                  <Typography variant="small" color="gray" className="font-normal ">
                    Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                <Avatar
                  variant="circular"
                  alt="tania andrew"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <div className="flex flex-col gap-1">
                  <Typography variant="small" color="gray" className="flex font-semibold">
                    Sender Name
                  </Typography>

                  <Typography variant="small" color="gray" className="font-normal ">
                    Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </a>
      <a href='#'>
        <div className='text-2xl font-bold mx-3' style={{ color: '#6045e2' }}>
          <a href="#">
            <Menu>
              <MenuHandler>
                <IconButton variant="text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24.001" height="24.001"
                    viewBox="0 0 24.001 24.001" class="svg replaced-svg">
                    <path id="notification-icon"
                      d="M7.881,18.353h5.958c0,2.014-1.334,3.647-2.979,3.647S7.881,20.367,7.881,18.353Zm0,0Zm3.039-.13H0S5.369,14.71,5.453,5.487l0-.038A5.623,5.623,0,0,1,10.921.007V0L11,0l.078,0V.007A5.624,5.624,0,0,1,16.549,5.45l0,.038C16.63,14.71,22,18.223,22,18.223Z"
                      transform="translate(1.002 1.002)" fill="#e9e7ff" stroke="#8280fd"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  </svg>
                </IconButton>
              </MenuHandler>
              <MenuList className="flex flex-col gap-2">
                <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                  <div className="flex flex-col gap-1">
                    <Typography className="flex items-center gap-1 text-xs font-medium text-blue-gray-500">
                      13 minutes ago
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      Donec dapibus mauris id odio ornare tempus amet.
                    </Typography>
                  </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">

                  <div className="flex flex-col gap-1">
                    <Typography className="flex items-center gap-1 text-xs font-medium text-blue-gray-500">
                      13 minutes ago
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      Donec dapibus mauris id odio ornare tempus amet.
                    </Typography>
                  </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                  <div className="flex flex-col gap-1">
                    <Typography className="flex items-center gap-1 text-xs font-medium text-blue-gray-500">
                      13 minutes ago
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      Donec dapibus mauris id odio ornare tempus amet.
                    </Typography>
                  </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                  <div className="flex flex-col gap-1">
                    <Typography className="flex items-center gap-1 text-xs font-medium text-blue-gray-500">
                      13 minutes ago
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      Donec dapibus mauris id odio ornare tempus amet.
                    </Typography>
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>
          </a>
        </div>
      </a>
    </div>

  </header>;
}

export default NavbarSite;