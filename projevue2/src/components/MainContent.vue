<template>
  <div class="main-content">

    <div class="contact-header">
      <a href="#">
        <div class="add-new-contact" @click="() => openPopup()">+</div>
      </a>

      <div class="input-group">
        <input class="contact-input" placeholder="Search Here">
        <button type="submit" class="contact-button bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="21.502" height="21.498" viewBox="0 0 21.502 21.498"
            class="svg replaced-svg">
            <g id="search-icon" transform="translate(1 1)">
              <path id="icon" d="M16.221,16.215A9.5,9.5,0,1,1,19,9.5a9.471,9.471,0,0,1-2.783,6.719L19.5,19.5Z" fill="none"
                stroke="#8280fd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              </path>
            </g>
          </svg>
        </button>
      </div>

      <div class="contact-header-right">
        <div class="griad">
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"
              class="svg replaced-svg">
              <g id="grid-icon" transform="translate(-1713 -155)">
                <g id="Rectangle_844" data-name="Rectangle 844" transform="translate(1713 155)" fill="#f5f5f5"
                  stroke="#aeaeae" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <rect width="8" height="8" stroke="none"></rect>
                  <rect x="1" y="1" width="6" height="6" fill="none"></rect>
                </g>
                <g id="Rectangle_847" data-name="Rectangle 847" transform="translate(1713 166)" fill="#f5f5f5"
                  stroke="#aeaeae" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <rect width="8" height="8" stroke="none"></rect>
                  <rect x="1" y="1" width="6" height="6" fill="none"></rect>
                </g>
                <g id="Rectangle_845" data-name="Rectangle 845" transform="translate(1724 155)" fill="#f5f5f5"
                  stroke="#aeaeae" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <rect width="8" height="8" stroke="none"></rect>
                  <rect x="1" y="1" width="6" height="6" fill="none"></rect>
                </g>
                <g id="Rectangle_846" data-name="Rectangle 846" transform="translate(1724 166)" fill="#f5f5f5"
                  stroke="#aeaeae" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <rect width="8" height="8" stroke="none"></rect>
                  <rect x="1" y="1" width="6" height="6" fill="none"></rect>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div class="griad">
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
              class="svg replaced-svg">
              <path id="star"
                d="M-22394.154-18561.168l2.52-5.312,2.463,5.188,5.643.85-4,4.137.994,5.826-5.1-2.8-4.863,2.7.9-5.719-3.928-4.137Z"
                transform="translate(22400.529 18567.48)" fill="#fff4e6" stroke="#ffb959" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2"></path>
            </svg></a>
        </div>
        <div class="griad">
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22"
              class="svg replaced-svg">
              <g id="delete" transform="translate(1 1)">
                <rect id="Rectangle_338" data-name="Rectangle 338" width="18" height="4" rx="2" transform="translate(0 3)"
                  fill="#ffe2e6" stroke="#fe5280" stroke-linecap="round" stroke-width="2"></rect>
                <path id="Rectangle_339" data-name="Rectangle 339"
                  d="M3,0H5A3,3,0,0,1,8,3V3A0,0,0,0,1,8,3H0A0,0,0,0,1,0,3V3A3,3,0,0,1,3,0Z" transform="translate(5)"
                  fill="#ffe2e6" stroke="#fe5280" stroke-width="2"></path>
                <path id="Rectangle_340" data-name="Rectangle 340"
                  d="M0,0H14a0,0,0,0,1,0,0V10a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z" transform="translate(2 7)"
                  fill="#ffe2e6" stroke="#fe5280" stroke-width="2"></path>
                <line id="Line_28" data-name="Line 28" y2="5" transform="translate(7 11.719)" fill="none" stroke="#fe5280"
                  stroke-linecap="round" stroke-width="1"></line>
                <line id="Line_29" data-name="Line 29" y2="5" transform="translate(11 11.719)" fill="none"
                  stroke="#fe5280" stroke-linecap="round" stroke-width="1"></line>
              </g>
            </svg></a>
        </div>
        <div class="griad">

          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 6.412 10.828"
              class="svg replaced-svg">
              <path id="left-angle" d="M-22247.133-18561.5l-4,4,4,4" transform="translate(22252.131 18562.914)"
                fill="none" stroke="#8280fd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              </path>
            </svg></a>
          <a href="#" class="current"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
              viewBox="0 0 6.414 10.828" class="svg replaced-svg">
              <path id="right-angle" d="M-22245.137-18561.5l4,4-4,4" transform="translate(22246.551 18562.914)"
                fill="none" stroke="#8280fd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              </path>
            </svg></a>

        </div>
      </div>
    </div>

    <Card :class="showTable">
      <div class="relative flex flex-col w-full h-full bg-white tablee ">
        <div class="relative mx-4 mt-4 overflow-hidden  bg-white  ">
        </div>
        <div class="">
          <table class="w-full min-w-max">
            <thead>
              <tr>
                <div class="flex items-center">
                  <label class="p-5 mt-1"><input type="checkbox" @change="checkAllUser()"></label>
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                      class="svg replaced-svg">
                      <path id="star"
                        d="M-22394.154-18561.168l2.52-5.312,2.463,5.188,5.643.85-4,4.137.994,5.826-5.1-2.8-4.863,2.7.9-5.719-3.928-4.137Z"
                        transform="translate(22400.529 18567.48)" fill="#fff4e6" stroke="#ffb959" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2"></path>
                    </svg></a>
                </div>
                <th v-for="head in tableHead" :key="head" class="p-4 transition-colors cursor-pointer border-y ">
                  <p class="flex items-center justify-between gap-2 text-sm font-normal ">
                    {{ head }}
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in users" :key="index" class=" hover:bg-blue-gray-50">
                <div class="flex items-center">
                  <label class="p-5 mt-1" v-if="row.checked === true">
                    <input type="checkbox" @change="checkUser(row.id)" @value="row.checked" checked>
                  </label>
                  <label class="p-5 mt-1" v-else>
                    <input type="checkbox" @change="checkUser(row.id)" @value="row.checked">
                  </label>
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                      class="svg replaced-svg">
                      <path id="star"
                        d="M-22394.154-18561.168l2.52-5.312,2.463,5.188,5.643.85-4,4.137.994,5.826-5.1-2.8-4.863,2.7.9-5.719-3.928-4.137Z"
                        transform="translate(22400.529 18567.48)" fill="#fff4e6" stroke="#ffb959" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2"></path>
                    </svg></a>
                  <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                    alt="John Michael"
                    class="m-5 relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                </div>

                <td v-for="(item, key) in row" :key="key" class="p-4 border-b border-blue-gray-50 ">
                  <div class="flex items-center gap-3 ">
                    <div class="flex flex-col ">
                      <p v-if="key === 'name'"
                        class=" block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                        {{ item }}
                      </p>
                      <p v-else-if="key === 'id'">
                      </p>
                      <p v-else-if="key === 'checked'">
                      </p>

                      <p v-else class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {{ item }}
                      </p>
                    </div>
                  </div>
                </td>

                <td class="p-4 border-b border-blue-gray-50">
                  <button @click="deleteUser(index + 1)"
                    class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span
                      class=" w-6 h-6 flex items-center justify-center rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-red-100 text-red-700">
                      X
                    </span>
                  </button>
                  <button @click="() => openEditPopup(row)"
                    class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span
                      class=" w-6 h-6 flex items-center justify-center rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-blue-100 text-blue-700">
                      🖊️
                    </span>
                  </button>
                </td>
              </tr>


            </tbody>
          </table>
        </div>
      </div>
    </Card>

    <div v-if="popupVisible" id="popup-container">
      <div class="popup-background"></div>
      <div class="popup">
        <a href="#"><span class="closeButton" @click="() => closePopup()">&times;</span></a>
        <div class="p-10">
          <h2 class="text-2xl mb-4">Account Settings</h2>
          <div class="mb-4">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input type="text" id="name" class="w-full p-2.5 border rounded" placeholder="Enter name"
              v-model="newUser.name">
          </div>
          <div class="mb-4">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input type="email" id="email" class="w-full p-2.5 border rounded" placeholder="Enter email"
              v-model="newUser.email">
          </div>
          <div class="mb-4">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone</label>
            <input type="tel" id="phone" class="w-full p-2.5 border rounded" placeholder="Enter phone"
              v-model="newUser.phone">
          </div>
          <div class="mb-4">
            <label for="age" class="block mb-2 text-sm font-medium text-gray-900">Age</label>
            <input type="number" id="age" class="w-full p-2.5 border rounded" placeholder="Enter age"
              v-model="newUser.age">
          </div>
          <div class="mb-4">
            <label for="post" class="block mb-2 text-sm font-medium text-gray-900">Post</label>
            <input type="text" id="post" class="w-full p-2.5 border rounded" placeholder="Enter post"
              v-model="newUser.post">
          </div>
          <div class="mb-4">
            <label for="joiningDate" class="block mb-2 text-sm font-medium text-gray-900">Joining Date</label>
            <input type="date" id="joiningDate" class="w-full p-2.5 border rounded" v-model="newUser.joiningDate">
          </div>
          <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="addUserr()">Add</button>
        </div>
      </div>
    </div>

    <div v-if="editPopupVisible" id="popup-container">
      <div class="fixed inset-0 bg-gray-500 opacity-75"></div>
      <div class="popup">
        <span class="close mr-9 mt-5" @click="() => closeEditPopup()">&times;</span>
        <div class="p-10">
          <h2 class="text-2xl mb-4">Account Settings</h2>
          <div class="mb-4">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input type="text" id="name" class="w-full p-2.5 border rounded" placeholder="Enter name"
              v-model="editedUser.name">
          </div>
          <div class="mb-4">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input type="email" id="email" class="w-full p-2.5 border rounded" placeholder="Enter email"
              v-model="editedUser.email">
          </div>
          <div class="mb-4">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone</label>
            <input type="tel" id="phone" class="w-full p-2.5 border rounded" placeholder="Enter phone"
              v-model="editedUser.phone">
          </div>
          <div class="mb-4">
            <label for="age" class="block mb-2 text-sm font-medium text-gray-900">Age</label>
            <input type="number" id="age" class="w-full p-2.5 border rounded" placeholder="Enter age"
              v-model="editedUser.age">
          </div>
          <div class="mb-4">
            <label for="post" class="block mb-2 text-sm font-medium text-gray-900">Post</label>
            <input type="text" id="post" class="w-full p-2.5 border rounded" placeholder="Enter post"
              v-model="editedUser.post">
          </div>
          <div class="mb-4">
            <label for="joiningDate" class="block mb-2 text-sm font-medium text-gray-900">Joining Date</label>
            <input type="date" id="joiningDate" class="w-full p-2.5 border rounded" v-model="editedUser.joiningDate">
          </div>


          <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="editUser(editedUser)">Update User</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>

import axios from 'axios';
import Popup from './PopUp.vue';
import { ref } from 'vue';

export default {
  name: 'MainContent',
  data() {
    return {
      popupVisible: false,
      editPopupVisible: false,
      users: [],
      newUser: {
        name: '',
        email: '',
        phone: '',
        age: '',
        post: '',
        joiningDate: '',
        salary: '',
      },
      editedUser: {
        id: '',
        name: '',
        email: '',
        phone: '',
        age: '',
        post: '',
        joiningDate: '',
        salary: '',
      },
      selectItem: 'p-4 border-b border-blue-gray-50',
      tableHead: ["", "Name", "Email", "Phone", "Age", "Post", "Joining Date", "Salary", "", "Actions", ""],
    };
  },
  methods: {
    openPopup() {
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    },

    openEditPopup(user) {
      this.editPopupVisible = true;
      this.editedUser = { ...user };
    },
    closeEditPopup() {
      this.editPopupVisible = false;
    },
    checkUser(userId) {
      axios.put(`http://localhost:4000/users/${userId}`).then(response => {

        console.log(response.data)
      });
    },
    checkAllUser() {
      axios.put(`http://localhost:4000/allusers`).then(response => {

        console.log(response)
      });
    },

    deleteUser(userId) {
      axios.delete(`http://localhost:4000/users/${userId}`);

      const index = this.users.findIndex(user => user.id === userId);
      this.users.splice(index, 1);
    },
    editUser() {
      axios.put(`http://localhost:4000/users/${this.editedUser.id}`, this.editedUser);
      const index = this.users.findIndex((user) => user.id === this.editedUser.id);
      this.users[index] = { ...this.editedUser };
    },
    addUserr() {
      console.log(this.newUser)
      const response = axios.post('http://localhost:4000/users', this.newUser);
      this.users.push(this.newUser)
      setNewUser({
        name: '',
        email: '',
        phone: '',
        age: 0,
        post: '',
        joiningDate: '',
        salary: '',
      });

    }
  },
  created() {
    axios.get('http://localhost:4000/users')
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
      timedTrigger: false
    });

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }

    setTimeout(() => {
      popupTriggers.value.timedTrigger = true;
    }, 3000);

    return {
      Popup,
      popupTriggers,
      TogglePopup
    }
  }
}
</script>
  
<style lang="scss">
.main-content {
  width: 100%;
  background-color: #f0f0f0;
  padding: 2%;
}

.contact-header {
  display: flex;
  align-items: center;
  background-color: white;
  margin-bottom: 30px;
  padding: 15px 20px;
}

.input-group {
  display: flex;
  position: relative;
  width: 100%;
}

.add-new-contact {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  padding-top: 1px;
  font-weight: lighter;
  margin-right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #6045e2;
  box-shadow: 0 5px 10px rgba(96, 69, 226, .5);
}

.add-new-contact:hover {
  background-color: #7961f3;
}

.contact-input {
  height: 50px;
  background-color: #f5f5f5;
  padding: 5px 15px;
  width: 50%;
  height: 50px;
  border: none;
  padding-left: 25px;
  padding-right: 150px;
  font-size: 16px;
  border-radius: 50px 0px 0px 50px;

}

.contact-button {
  padding: 5px 15px;
  background-color: #020202;
  border-radius: 50px;
  margin-left: -25px;
  border: none;
}

.contact-button:hover {
  background-color: #d4ccff;
}

.contact-header-right {
  display: flex;
  align-items: center;
  margin-inline: 20px;
}

.griad {
  display: flex;
  margin-inline: 10px;
}

.content-container {
  float: right;
}

.text-lg {
  font-size: 1.125rem;
}

.popup-container {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.popup {
  position: absolute;
  width: 700px;
  height: 700px;
  z-index: 3;
  background-color: white;
  top: 400px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.popup-background {
  background-color: black;
  opacity: 75%;
  inset: 0px;
  position: fixed;
}

.closeButton {
  float: right;
  font-size: 1.4rem;
  font-weight: 700;
  margin-right: 5%;
  margin-top: 2%;
}
</style>
  