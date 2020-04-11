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
          <a href='/walikan/create'>
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
          </a>
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
  bottom: -80px;
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
</style>