<template>
    <header>
        <div class="logo">
            <img src="https://themelooks.net/demo/dashmin/html/assets/img/logo.png" />
        </div>
        <div class="main-header">
            <div class="container-fluid">
                <div class="user-avatar">
                    <img  src="https://themelooks.net/demo/dashmin/html/assets/img/avatar/user.png">
                </div>

                <div class="user-info">
                    <h4 class="user-name">Abrilay Khatun</h4>
                    <p class="user-email">abrilakh@gmail.com</p>
                </div>
                <div class="main-header-right">
                    <div class="language">
                        <a href="#">
                            <img src="https://themelooks.net/demo/dashmin/html/assets/img/svg/globe-icon.svg" />
                        </a>
                    </div>
                    <div class="language">
                        <a href="#">
                            <img src="https://themelooks.net/demo/dashmin/html/assets/img/svg/print-icon.svg" />
                        </a>
                    </div>
                    <div class="date-time">
                        <h3 class="time">{{ currentTime }}
                        </h3><span class="date">{{ currentDate }}</span>
                    </div>
                    <div>
                        <button class="btn">Pending Tasks</button>

                    </div>
                    <div class="searchBtn">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21.502" height="21.498"
                                viewBox="0 0 21.502 21.498" class="svg replaced-svg">
                                <g id="search-icon" transform="translate(1 1)">
                                    <path id="icon"
                                        d="M16.221,16.215A9.5,9.5,0,1,1,19,9.5a9.471,9.471,0,0,1-2.783,6.719L19.5,19.5Z"
                                        fill="none" stroke="#8280fd" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div class="searchBtn">
                        <a href="#">
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
                        </a>

                    </div>
                    <div class="searchBtn">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.001" height="24.001"
                                viewBox="0 0 24.001 24.001" class="svg replaced-svg">
                                <path id="notification-icon"
                                    d="M7.881,18.353h5.958c0,2.014-1.334,3.647-2.979,3.647S7.881,20.367,7.881,18.353Zm0,0Zm3.039-.13H0S5.369,14.71,5.453,5.487l0-.038A5.623,5.623,0,0,1,10.921.007V0L11,0l.078,0V.007A5.624,5.624,0,0,1,16.549,5.45l0,.038C16.63,14.71,22,18.223,22,18.223Z"
                                    transform="translate(1.002 1.002)" fill="#e9e7ff" stroke="#8280fd"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
  
<script>

export default {
    name: 'Navbar',
    data() {
        return {
            currentTime: '',
            open: false
        };
    },
    methods: {
        updateTime() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');

            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const dayOfWeek = days[now.getDay()];
            const dayOfMonth = now.getDate();
            const month = months[now.getMonth()];
            const year = now.getFullYear();

            this.currentDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
            this.currentTime = `${hours}:${minutes}`;
        }
    },
    mounted() {
        this.updateTime();

        this.timer = setInterval(() => {
            this.updateTime();
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
};
</script>
  
<style lang="scss">
header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
    width: 100%;
}

.logo {
    display: block;
    flex-basis: 260px;
}

.main-header {
    padding: 0 15px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.container-fluid {
    display: flex;
    align-items: center;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex-wrap: wrap;
}

.user-avatar {
    margin-right: 20px;
}

.user-info {}

.user-email {
    font-size: 14px;
    color: #aeaeae;
}

.main-header-right {
    width: 86%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
}

.language {
    display: flex;
    align-items: center;
    width: 50px;
    height: 50px;
}

.date-time {
    text-align: right;
    margin-top: -10px;
    margin-right: 20px;
}

.time {
    font-size: 22px;
    margin-bottom: 2px;
    font-weight: bold;
}

.date {
    font-size: 14px;
    line-height: 1;
    color: #727272;
}

.btn {
    padding: 17px 24px;
    font-weight: 700;
    line-height: 1;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    color: #fff;
    border: none;
    text-transform: capitalize;
    outline: 0 !important;
    -webkit-box-shadow: 0 5px 10px rgba(4, 0, 252, .2);
    box-shadow: 0 5px 10px rgba(4, 0, 252, .2);
    border-radius: 50px;
    background-color: #6045e2;
}

.searchBtn {
    padding: 5px 15px;
}
</style>
  