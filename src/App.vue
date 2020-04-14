<template>
  <div id="walikan">
    <main role="main">
      <div class="container">
        <router-view />
      </div>
      <section class="header">
        <div class="text-center">
          <a class="title" href="/">
          わりかん
          </a>
        </div>  
      </section>
      <section class="buttons d-flex justify-content-center">
        <div class="bts m-auto">
          <div class="exit">
            <a href="/logout">
              <div class="exit-btn">A</div>
              <p>Exit</p>
            </a>
          </div>
          <div class="manual">
            <a href="/manual">
              <div class="manual-btn">B</div>
              <p>Manual</p>
            </a>
          </div>
        </div>
            

        
        <div class="add-button">
          <router-link to='/walikan/create'>
            <div class="adding-x-bar align-self-center">
              <div class="x-round"></div>
            </div>
            <div class="adding-y-bar">
              <div class="y1"></div>
              <div class="y2"></div>
            </div>
            <div class="shadow-x-bar align-self-center">
            </div>
            <div class="shadow-y-bar">
              <div class="y3"></div>
              <div class="y4"></div>
            </div>
          </router-link>
        </div>
      </section>
    </main>
      <footer>
        <p>© 2020 - BWBB</p>
      </footer>
  </div>
</template>

<script>
import 'bootstrap' //引入bt的js
import 'bootstrap/dist/css/bootstrap.min.css'

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}
export default {
  components: {

  },
  data() {
    return {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false
    } 
  },
  created() {
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser
      }
      this.isAuthenticated = dummyUser.isAuthenticated
    }
  }
   
}

</script>

<style>
body {
  font-family: 'Nikkyou Sans','Russo One', cwTeXYen;
  background-color: rgb(59, 125, 128);
}

.container {
  /* height: 75vh; */
  background-color:black;
  /* background-color: transparent; */
  border: 20px grey solid;
  border-bottom: 50px grey solid;
  border-radius: 5% 5% 25% 5%;
}

main {
  margin-top: 2%;
}

h1 {
  text-shadow:
    0 0 5px rgb(187, 189, 60),
    0 0 10px rgb(187, 189, 60),
    0 0 20px rgb(187, 189, 60),
    0 0 40px rgb(187, 189, 60);
  animation: shine 2s 2s linear infinite;
}

@keyframes shine {
  0% { 
    opacity:1; 
  }
  70% { 
    opacity:0; 
  }
  100% {
  color:#232323;
  }
}

@keyframes shine2 {
  0% { 
    opacity:1; 
  }
  70% { 
    opacity:0; 
  }
  100% {
  color:rgb(182, 181, 181);
  }
}



/***********************  main  ************************/

.header { 
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  bottom: 62px;
}

.title {
  font-size: 50px;
}


.buttons {
  position: relative;
  top: -70px;
}

footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 200;
}

footer p {
  text-align: center;
  color: rgb(74, 146, 150);
  text-shadow: -1px -1px #333, 1px 1px rgb(150, 148, 148);
  margin-bottom: 0px;
}


/* add-button */
.add-button {
  height: 150px;
  width: 150px;
  padding: 0 0;
  position: absolute;
  bottom: -88px;
  right: 10%;
}


.adding-x-bar {
  position: absolute;
  top: 65%;
  background-color:  rgba(94, 22, 22, 0.87);
  width: 150px; 
  height: 56px;
  border-radius: 10px;
  z-index: 100;
}

.adding-y-bar {
  background-color:  rgba(94, 22, 22, 0.87);
  position: absolute;
  left: 32%;
  top: 51px;
  width: 56px; 
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
}

.x-round {
  background-color: rgb(65, 27, 27);
  z-index: 200;
  width: 50px;
  height: 80%;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 4%;
  box-shadow:
  rgb(60, 20, 20)
  8px 5px 0px
  5px
  inset;
  border-style: 5px rgb(61, 20, 20) double;
}

.y1, .y2 {
  background-color:  rgba(94, 22, 22, 0.87);
  width: 100%; 
  height: 47px; 
  box-shadow:4px 4px 3px rgba(20%,20%,40%,0.5); 
  border-radius: 10px 10px 0 0;
}

.y2 {
  border-radius: 0 0 10px 10px;
}

.shadow-x-bar {
  position: absolute;
  top: 65%;
  background-color: rgba(94, 22, 22, 0.87);
  width: 150px; 
  height: 56px;
  border-radius: 10px;
  box-shadow:4px 4px 3px rgba(20%,20%,40%,0.5);
  z-index: -99;
}

.shadow-y-bar {
  position: absolute;
  left: 32%;
  top: 51px;
  width: 56px; 
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
}

.y3, .y4 {
  background-color: transparent;
  width: 100%; 
  height: 47px; 
  box-shadow:4px 5px 5px 3px rgba(24, 24, 43, 0.5); 
  border-radius: 10px 10px 0 0;
  z-index: -100;
}

.y4 {
  border-radius: 0 0 10px 10px;
}


/* x,y btn */
.bts {
  display: flex;
  position: absolute;
  /* top: -70%; */
  left: 11%;
}

.exit-btn, .manual-btn {
  background-color: rgb(51, 49, 49);
  color: black;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  text-align: center;
  font-size: 50px;
  border-top: 1px rgb(182, 181, 181) double;
  border-bottom: 5px rgb(39, 39, 39) solid;
  box-shadow: 3px 3px 3px rgb(39, 39, 39);
  transform: rotate(-40deg);
}

.manual-btn:hover {
  background-color: rgb(77, 45, 45);
}

.exit-btn:hover {
  background-color: rgb(77, 45, 45);
}


.exit, .manual {
  position: relative;
  transform: rotate(40deg);
}

.manual {
  top: 50px;
  left: 35px; 
}

.exit p, .manual p {
  text-align: center;
  color: black;
}


@media (max-width: 768px) {
  .bts {
    /* left: 3%; */
  }

  .add-button {
    bottom: -100px;
    right: 7%;
  }
}


@media (max-width: 576px) {

  .bts {
    left: 3%;
  }

  .add-button {
    bottom: -105px;
    right: 5%;
  }

}

@media (max-width: 425px) {

  .exit-btn, .manual-btn {
    width: 70px;
    height: 70px;
    font-size: 43px;
    border-top: 1px rgb(182, 181, 181) double;
    border-bottom: 3px rgb(39, 39, 39) solid;
    box-shadow: 3px 3px 5px rgb(39, 39, 39);
  }

  .bts {
    left: 3%;
  }
  .manual {
    top: 50px;
    left: 5px;
  }
  .add-button {
    bottom: -105px;
    right: 5%;
  }
}

@media (max-width: 350px) {
  .exit-btn, .manual-btn {
    width: 58px;
    height: 58px;
    border-radius: 50px;
    text-align: center;
    font-size: 37px;
  }
}




/***********************  Sign-in/ Sign up  ************************/


.form-signin, .form-signup {
  width: 75%;
}

.form-control {
  border: none;
  border-radius: 0;
  color: white;
}

.form-label-group, form{
  margin: 0 auto;
  margin-bottom: 4%;
}

.form-label-group {
  color: rgb(216, 212, 207);
}

.btn {
  opacity: 0.8;
}

.cat-img {
  width: 300px;
  -webkit-filter: brightness(80%) blur(1px);
  filter: brightness(80%) blur(1px);
  transform: rotate(-45deg);
  padding-left: 10px;
  padding-top: 10px;
}

.btn-big-group {
  width: 40%;
}

.line-login {
      background-color: #00C300;
}


@media (max-width: 992px) {
  
  .cat-img {
    display: none;
  }

  .form-label-group {
    width: 55%;
  }


  .btn-big-group {
    width: 50%;
  }

}


@media (max-width: 768px) {

  .form-signin, .form-signup {
    width: 100%;
  }

  .cat {
    display: none;
  }

  .btn-big-group {
    width: 50%;
  }
  
}

@media (max-width: 450px) {

  

  .form-label-group {
    width: 100%;
  }

  .btn-big-group {
    width: 75%;
  }
}



/***********************   walikan   ************************/

/* left-col */
.game {
  background-color: rgb(165, 165, 154);
  margin-right: 0;
  height: 70vh;
  overflow: scroll;
  border-radius: 10px 0 0 0;
}

.game-border {
  display: flex;
}

.cate-list, .time-list {
  background-color: transparent;
  border: none;
}

.cate-menu, .time-menu {
  background-color: grey;
}

li {
  list-style: none;
}

.account-title {
  color: rgb(218, 206, 106);
  text-shadow:2px 1px #333;
}

.a-item2:nth-child(even) .a-text {
  background-color: rgb(143, 143, 134);
}

.a-item1, .a-item2 {
  margin-right: 5px;
}

.a-item1 {
  margin-bottom: 5px;
}

.account-title:nth-child(5) {
  text-align: center;
}

.dot {
  opacity: 0;
}

.item-in:hover .dot {
  opacity: 1;
}

.item-out {
  text-align: center;
}

.edit:hover{
  position: relative;
  top: 1px;
  left: 1px;
  color: red;
}

.delete:hover {
  position: relative;
  top: 1px;
  left: 1px;
  color: red;
}

.delete, .edit {
  color: #232323;
  background-color: transparent;
  border: none;
}


.modal-content {
  width: 500px;
  background-color: rgb(109, 105, 105);
}

@media (max-width: 576px) {
  .account-title:nth-child(5) {
    display: none;
  }
}



/* right-col */

.game-info {
  height: 65vh;
}

.nav-top {
  padding-left: 3px;
  margin-top: 2px;
  display: flex;
  justify-content: space-around;
}


.menu {
  background-color: transparent;
}

.rc {
  border: 10px rgb(105, 100, 100) double;
  border-radius: 10px;
  background-color: rgb(165, 165, 154);
  padding-left: 1%;
  
}

.rc:nth-child(1) {
  border: 7px rgb(105, 100, 100) solid;
  
}

.rc:nth-child(2) {
  height: 20%; 
  width: 100%;
  display: inline-block;
}

.rc:nth-child(3) {
  position:relative; 
  height: 30%;
  display: inline-block;
  width: 100%;
}

.rc:nth-child(4) {
  /* position: relative;  */
  display: flex;
  flex-direction: row;
  width: 80%; 
  height: 20%; 
  margin-left: 8%;
  
}

.user {
  color: black;
  width: 100%;
  border: 5px rgb(105, 100, 100) double;
  padding-left: 1%;
}


.total {    
  /* float: right; */
  font-size: 72px;
  position: relative;
  /* top: -5%; */
}

.total span {
  font-size: 36px;
}


.nav-link {
  /* font-size: 3px;  */
  padding: 0 2px;
}


.unpaid {
  width: 50%;
  border-right: 3px solid rgb(99, 99, 99);
  
}

.pay {
  text-align: right; 
  /* position: relative; */
  /* top: -18%; */
}

.pay span {
  font-size: 18px;
}

.pay span a {
  font-size: 32px;
}

@media (min-width: 768px) {

  .menu, .menu-control, .menu-nav, .menu-checkbox {
    display: none;
  }
}


@media (max-width: 992px) {

  .rc:nth-child(4) {
    width: 88%;
  }

  .total {
    font-size: 48px;
    position: relative;
    top: 22%;

  }

  .total span {
    font-size: 32px;
  }

  .pay {
    top: -12%;
  }

  .pay span {
    font-size: 14px;
  }
  
  .pay span a {
    font-size: 24px;
  }
 
}

@media (max-width: 767px) {
  .rc:nth-child(2), .rc:nth-child(3), .rc:nth-child(4) {
    display: none;
  }
  .game {
    border-radius: 0 0 17% 0;
  }

  .game-info {
    height: 5%;
  }

}


@media (max-width: 768px) {

  .rc:nth-child(1) {
    border: 0px;
  }

  .menu-control {
    border: 5px rgb(105, 100, 100) double;
  }

  .menu {
    display: inline-block;
    color: black;
    border: none;
  }

  .menu-checkbox {
    width: 50px;
    height: 30px;
    position: absolute;
    right: 20px;
    bottom: 5px;
    opacity: 0;
  }
  
  .menu-checkbox:checked ~ nav .menu-nav {
    display: block;
  }

  .menu-nav {
    display: none;
    position: absolute;
    width: 300px;
    height: 320px;
    right: -2px;
    background-color: rgb(109, 106, 106);
    padding-left: 0;
    border-radius: 10px;
    box-shadow: 2px 6px 6px 1px rgb(49, 48, 48);
    z-index: 101;
  }

  .menu-nav li {
    text-align: center;
    list-style-type: none;
    font-size: 24px;
  }

  .tap-title {
    border: 1px gray solid;
    width: 80%;
    margin: 0 auto;
    margin-top: 13px;
    border-radius: 20px;
    padding: 5px;
    box-shadow: inset 2px 2px 5px black;
    position: relative;
    bottom: 75px;
    border-left: 5px gray solid;
    border-right: 5px gray solid;
  }

  .tap-title a {
    color: rgb(247, 247, 31);
    text-shadow: 3px 1px #333, 1px 1px white;
  }

  .tap-body {
    background-color: rgb(35, 133, 245);
    width: 82%;
    height: 61%;
    border: 1px gray solid;
    position: relative;
    bottom: 70px;
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: inset 1px 2px 3px black;
  }

  .tap-body li {
    color: tomato;
    text-shadow: -1px -1px white, 1px 1px #333;
  }

  .insert-logo {
    position: absolute;
    bottom: -7%;
    right: 39%;
    border: 1px rgb(114, 113, 113) solid;
    width: 0px;
    height: 0px;
    border-color: grey transparent transparent transparent;
    border-width: 26px;
    z-index: 200;
  }
  
  .left-bar {
    position: relative;
    top: 1%;
  }

  .right-bar {
    position: relative;
    left: 90%;
    top: -13%;
  }

  .bars {
    margin-bottom: 2px;
    width: 10%;
    height: 7px;
    background-color: dimgray;
    position: relative;
    top: 27px;
    border-radius: 3px 14% 50% 3px;
    box-shadow: inset 2px 2px 5px black;
  }

  .bars2 {
    margin-bottom: 2px;
    width: 10%;
    height: 7px;
    background-color: dimgray;
    position: relative;
    top: 27px;
    border-radius: 24% 3px 3px 23px;
    box-shadow: inset -2px 2px 5px black;
  }
  

}

@media (max-width: 420px) {

  .tap-body li {
    font-size: 17px;
  }
}

/***********************  create & edit ************************/

.create {
  background-color:rgb(165, 165, 154);
  border-radius: 0 0 21% 0;
  padding-top: 5%;
  height: 70vh;
  overflow: scroll;
}

.form-create {
  width: 50%;
}

.form-add-group {
  margin: 0 auto;
  margin-bottom: 20px;
}

li .group-item {
  margin: 0 auto;
}

.group-nav {
  display: flex;
  padding: 0;
} 

.create-input {
  background-color: rgb(165, 165, 165);
  color: #00C300;
  text-shadow: -1px -1px #333, 1px 1px rgb(150, 148, 148);
}

select {
  background-color: rgb(165, 165, 165);
  height: 30px;
  border: 2px rgb(212, 199, 126) ridge;
  border-radius: 0;
}

.form-add-group input {
  border: 2px rgb(212, 199, 126) ridge;
}



@media (max-width: 992px) {

  .form-create {
    width: 70%;
  }
}

@media (max-width: 576px) {
  .form-add-group {
    margin: 0 auto;
    margin-bottom: 5px;
    padding-bottom: 3px;
    /* border-bottom: 1px gray solid; */
  }

  .form-create {
    width: 75%;
  }

  .create {
    background-color:rgb(165, 165, 154);
    border-radius: 0 0 21% 0;
    padding-top: 10%;
    height: 75vh;
    overflow: scroll;
  }
}

/***********************  edit page  ************************/



/***********************  add group  ************************/

.add-group-form {
  width: 40vw;
  margin-bottom: 0;
}

.add-group-page {
  background-color: rgb(165, 165, 154);
  border-radius: 0 0 18% 0;
}

.form-group-add {
  margin-bottom: 20px;
  color: rgb(52, 58, 52);
  text-align: center;
}

.form-group-add:nth-child(1) {
  padding-top: 10%;
}


.form-group-add input {
  /* border: none; */
  /* border-bottom: 1px rgb(23, 20, 24) solid; */
  background-color: transparent;
  width: 50%;
}


.lineone {
  margin-bottom: 10px;
}

.g-btn {
  margin-top: 20px;
  /* float: right; */
}

@media (max-width: 420px) {
  .form-group-add input {
    /* width: 78%; */
    /* float: right; */
  }
}


/***********************  admin  ************************/

#admin {
  background-color: rgb(165, 165, 154);
  width: 80%;
  height: 65vh;
  margin: 0 auto;
  overflow: scroll;
  border-radius: 0 0 8% 0;
}

/***********************  manual  ************************/

.manual-page {
  width: 100%;
  height: 75vh;
  text-align: center;
  color: rgb(196, 194, 194);
  overflow: scroll;
  padding-bottom: 10%;
}

.manual-page p {
  color: rgb(139, 138, 138);
  font-size: 24px;
}

@media (max-width: 576px) {

  .manual-page p {
    font-size: medium;
  }
}

.alert {
  text-align: center;
  margin-bottom: 0;
  color: red;
}

.clear:checked ~ .owe {
  text-decoration: line-through;
}
</style>