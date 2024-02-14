import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Typography, IconButton } from "@material-tailwind/react";
import {
    CardHeader,
    CardBody,
    Avatar,
} from "@material-tailwind/react";

function MainContact() {
    const TABLE_HEAD = ["Name", "Email", "Phone", "Age", "Post", "Joining Date", "Salary", "Actions"];

    const [showCard, setShowCard] = useState('m-6 w-80 h-50 hidden')
    const [showTable, setShowTable] = useState('h-full w-full')
    const [products, setProducts] = useState([]);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        phone: '',
        age: 0,
        post: '',
        joiningDate: '',
        salary: '',
    });


    const changeShowCard = () => {

        if (showCard == "m-6 w-80 h-50") {
            setShowCard('m-6 w-80 h-50 hidden')
            setShowTable('h-full w-full')
        }
        else {
            setShowCard('m-6 w-80 h-50')
            setShowTable('h-full w-full hidden')
        }
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/users');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    function Table() {

        const checkItem = async (userId) => {
            try {
                (await axios.put(`http://localhost:4000/users/${userId}`).then(response => {
                    console.log(response)
                }));
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        };
        const checkAllItem = async () => {
            try {
                (await axios.put(`http://localhost:4000/allusers/`).then(response => {
                    console.log(response)
                }));
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        };

        const handleDelete = async (userId) => {
            try {
                await axios.delete(`http://localhost:4000/users/${userId}`);
                setProducts(products.filter((user) => user.id !== userId));
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        };

        return <Card className={showTable}>
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        <Typography
                            className="font-bold "
                            style={{ marginLeft: '38%', marginTop: '15%' }}
                        >
                            <input type='checkbox' onChange={() => checkAllItem()} />
                        </Typography>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b p-4"
                            >

                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products.map(({ name, email, phone, age, post, joiningDate, Salary, id, checked }, index) => {
                        const isLast = index === products.length - 1;
                        const classes = isLast ? "p-5 " : 'p-4 border-b border-blue-gray-50';

                        return (

                            <tr key={name}>
                                <td className={classes}>
                                    {checked ? <Typography
                                        className="font-bold ml-5"
                                    >
                                        <input type='checkbox' onChange={() => checkItem(id)} checked />
                                    </Typography> : <Typography
                                        className="font-bold ml-5"
                                    >
                                        <input type='checkbox' onChange={() => checkItem(id)} />
                                    </Typography>}

                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-bold "
                                    >
                                        {name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >

                                        {email}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {phone}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {age}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {post}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {joiningDate}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {Salary}
                                    </Typography>
                                </td>
                                <td className={`${classes} flex`}>
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        color="red"
                                        className="font-medium ml-5"
                                    >
                                        <IconButton className='delete-user ml-5' onClick={() => handleDelete(id)}>
                                            X
                                        </IconButton>
                                    </Typography>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>;
    }

    function UserListCard() {
        return <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
            {products.map(({ name, job, date }, index) => {

                return (
                    <Card shadow={false} className={showCard}>
                        <CardHeader
                            style={{ backgroundColor: '#ecf3fd', borderRadius: '0px' }}
                            floated={false}
                            shadow={false}
                            className="mx-0 my-0 p-5 flex items-center gap-4 pb-8"
                        >
                            <Avatar
                                size="lg"
                                variant="circular"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                alt="tania andrew"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography variant="h5" color="blue-gray">
                                        {name}
                                    </Typography>
                                    <div className="5 flex items-center gap-0">
                                    </div>
                                </div>
                                <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                            </div>
                        </CardHeader>
                        <CardBody className="p-5">
                            <Typography className='mb-2'>
                                yourname@email.com
                            </Typography>
                            <Typography className='mb-2'>
                                +02 654 446 4698
                            </Typography>
                            <Typography>
                                712 Clarkson Ave Brooklyn, NY 11203, USA
                            </Typography>
                        </CardBody>
                    </Card>
                );
            })}

        </div>;
    }

    function SearchBar() {
        return <div class="items-center hidden  lg:flex">
            <div class="relative flex w-full gap-2 md:w-max">
                <div class="relative h-12 w-full min-w-[288px]">
                    <input type="search" placeholder="Search Here"
                        style={{ borderRadius: '2rem', width: '600px', height: '50px', border: 'none' }}
                        class="peer h-full w-full rounded-[7px] bg-gray-200 px-3 py-2.5 pl-9 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                </div>

            </div>
            <button
                class="w-11 h-11 bg-gray-100 text-center align-middle shadow-md  pl-3"
                type="button"
                style={{ borderRadius: '2rem', fontSize: '2rem', marginLeft: '-45px', zIndex: '1' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21.502" height="21.498" viewBox="0 0 21.502 21.498" class="svg replaced-svg">
                    <g id="search-icon" transform="translate(1 1)">
                        <path id="icon" d="M16.221,16.215A9.5,9.5,0,1,1,19,9.5a9.471,9.471,0,0,1-2.783,6.719L19.5,19.5Z" fill="none" stroke="#8280fd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </g>
                </svg>
            </button>
        </div>
            ;
    }

    function ContactHeaderRight() {

        return <div className='contact-header-right'>
            <div class="contact-header-right ">
                <div class="grid" style={{ marginInline: '10px' }}><a href="#" onClick={changeShowCard}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" class="svg replaced-svg">
                        <g id="grid-icon" transform="translate(-1713 -155)">
                            <g id="Rectangle_844" data-name="Rectangle 844" transform="translate(1713 155)" fill="#f5f5f5" stroke="#aeaeae" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <rect width="8" height="8" stroke="none"></rect>
                                <rect x="1" y="1" width="6" height="6" fill="none"></rect>
                            </g>
                            <g id="Rectangle_847" data-name="Rectangle 847" transform="translate(1713 166)" fill="#f5f5f5" stroke="#aeaeae" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <rect width="8" height="8" stroke="none"></rect>
                                <rect x="1" y="1" width="6" height="6" fill="none"></rect>
                            </g>
                            <g id="Rectangle_845" data-name="Rectangle 845" transform="translate(1724 155)" fill="#f5f5f5" stroke="#aeaeae" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <rect width="8" height="8" stroke="none"></rect>
                                <rect x="1" y="1" width="6" height="6" fill="none"></rect>
                            </g>
                            <g id="Rectangle_846" data-name="Rectangle 846" transform="translate(1724 166)" fill="#f5f5f5" stroke="#aeaeae" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <rect width="8" height="8" stroke="none"></rect>
                                <rect x="1" y="1" width="6" height="6" fill="none"></rect>
                            </g>
                        </g>
                    </svg></a></div>

                <div class="star" style={{ marginInline: '10px' }}><a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="svg replaced-svg">
                        <path id="star" d="M-22394.154-18561.168l2.52-5.312,2.463,5.188,5.643.85-4,4.137.994,5.826-5.1-2.8-4.863,2.7.9-5.719-3.928-4.137Z" transform="translate(22400.529 18567.48)" fill="#fff4e6" stroke="#ffb959" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg></a></div><div class="delete_mail" style={{ marginInline: '10px' }}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" class="svg replaced-svg">
                        <g id="delete" transform="translate(1 1)">
                            <rect id="Rectangle_338" data-name="Rectangle 338" width="18" height="4" rx="2" transform="translate(0 3)" fill="#ffe2e6" stroke="#fe5280" stroke-linecap="round" stroke-width="2"></rect>
                            <path id="Rectangle_339" data-name="Rectangle 339" d="M3,0H5A3,3,0,0,1,8,3V3A0,0,0,0,1,8,3H0A0,0,0,0,1,0,3V3A3,3,0,0,1,3,0Z" transform="translate(5)" fill="#ffe2e6" stroke="#fe5280" stroke-width="2"></path>
                            <path id="Rectangle_340" data-name="Rectangle 340" d="M0,0H14a0,0,0,0,1,0,0V10a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z" transform="translate(2 7)" fill="#ffe2e6" stroke="#fe5280" stroke-width="2"></path>
                            <line id="Line_28" data-name="Line 28" y2="5" transform="translate(7 11.719)" fill="none" stroke="#fe5280" stroke-linecap="round" stroke-width="1"></line>
                            <line id="Line_29" data-name="Line 29" y2="5" transform="translate(11 11.719)" fill="none" stroke="#fe5280" stroke-linecap="round" stroke-width="1"></line>
                        </g>
                    </svg></a></div><div style={{ marginInline: '10px', display: 'flex' }}><a style={{ padding: '10px' }} href="#"><svg width="12" height="12" viewBox="0 0 6.412 10.828" class="svg replaced-svg">
                        <path id="left-angle" d="M-22247.133-18561.5l-4,4,4,4" transform="translate(22252.131 18562.914)" fill="none" stroke="#8280fd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg></a><a href="#" style={{ padding: '10px' }} ><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 6.414 10.828" class="svg replaced-svg">
                        <path id="right-angle" d="M-22245.137-18561.5l4,4-4,4" transform="translate(22246.551 18562.914)" fill="none" stroke="#8280fd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg></a></div></div>
        </div>;


    }
    function AddNewContact() {
        const [name, setName] = useState();
        const [email, setEmail] = useState();
        const [phone, setPhone] = useState();
        const [age, setAge] = useState();
        const [post, setPost] = useState();
        const [joiningDate, setDate] = useState();
        const [Salary, setSalary] = useState();
        const [showPopup, setShowPopup] = useState(false);

        const togglePopup = () => {
            setShowPopup(!showPopup)
            console.log(showPopup)
        };

        const addUserr = async () => {
            try {
                const userData = {
                    name: name,
                    email: email,
                    phone: phone,
                    age: age,
                    post: post,
                    joiningDate: joiningDate,
                    Salary: Salary
                };
                const response = await axios.post('http://localhost:4000/users', userData);
                setProducts([...products, response.data]);
                setNewUser({
                    name: '',
                    email: '',
                    phone: '',
                    age: 0,
                    post: '',
                    joiningDate: '',
                    salary: '',
                });
                togglePopup()
            } catch (error) {
                console.error('Error adding user:', error);
            }
        };

        return <div>

            <div className='contact-header-left'>
                <IconButton className='add-new-contact ml-5' onClick={() => togglePopup()}>
                    +
                </IconButton>
                {showPopup ?
                    <div class="fixed inset-0 overflow-y-auto" style={{ zIndex: '3' }}>
                        <div class="flex items-center justify-center min-h-screen ">
                            <div class="fixed inset-0 bg-gray-500 opacity-75"></div>
                            <div class="bg-white rounded-lg shadow-xl p-8 z-50" style={{ width: '1000px' }}>
                                <h2 class="text-2xl mb-4">Modal Başlık</h2>
                                <div class="mb-4">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                    <input type="text" id="name" class="w-full p-2.5 border rounded"
                                        placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} />
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                    <input type="email" id="email" class="w-full p-2.5 border rounded"
                                        placeholder="Enter email" value={email}
                                        onChange={(event) => setEmail(event.target.value)} />
                                </div>
                                <div class="mb-4">
                                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                                    <input type="tel" id="phone" class="w-full p-2.5 border rounded"
                                        placeholder="Enter phone" value={phone}
                                        onChange={(event) => setPhone(event.target.value)} />
                                </div>
                                <div class="mb-4">
                                    <label for="age" class="block mb-2 text-sm font-medium text-gray-900">Age</label>
                                    <input type="number" id="age" class="w-full p-2.5 border rounded"
                                        placeholder="Enter age" value={age}
                                        onChange={(event) => setAge(event.target.value)} />
                                </div>
                                <div class="mb-4">
                                    <label for="post" class="block mb-2 text-sm font-medium text-gray-900">Post</label>
                                    <input type="text" id="post" class="w-full p-2.5 border rounded"
                                        placeholder="Enter post" value={post}
                                        onChange={(event) => setPost(event.target.value)} />
                                </div>
                                <div class="mb-4">
                                    <label for="joiningDate" class="block mb-2 text-sm font-medium text-gray-900">Joining Date</label>
                                    <input type="date" id="joiningDate"
                                        class="w-full p-2.5 border rounded" value={joiningDate}
                                        onChange={(event) => setDate(event.target.value)} />
                                </div>
                                <div class="mb-4">
                                    <label for="post" class="block mb-2 text-sm font-medium text-gray-900">Salary</label>
                                    <input type="text" id="post" class="w-full p-2.5 border rounded"
                                        placeholder="Enter salary" value={Salary}
                                        onChange={(event) => setSalary(event.target.value)} />
                                </div>


                                <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addUserr()}
                                >Add</button>
                            </div>
                        </div>
                    </div>
                    : <div></div>}
                <SearchBar></SearchBar>

            </div >
        </div >
    }

    return <div className='container-fluid'>


        <div >
            <div className='contact-header'>
                <AddNewContact></AddNewContact>
                <ContactHeaderRight></ContactHeaderRight>
            </div>
            <div className='table'>
                <UserListCard></UserListCard>
                <Table></Table>
            </div>
        </div>
    </div>;
}

export default MainContact;