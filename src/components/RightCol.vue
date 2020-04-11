<template>
  
    <div class="game-info">
      <div class="rc pl-0 mt-4 nav-top text-center">
        <span class="hi">
          Hi, {{ currentUser.name }} !
        </span>
        
        <router-link
          to="/admin"
          v-if="currentUser.isAdmin" 
          class="admin">
          Admin
        </router-link>

        <router-link 
          v-else 
          to="/users/id" 
          class="profile"
        >
          Profile
        </router-link>
        
        <div class="menu-control">
          <button class="menu">
            <label for="checkbox" class="mb-0">Menu</label>
          </button>
          <input type="checkbox" class="menu-checkbox">
          <nav class="menu-wrapper">
            <ul class="menu-nav">
              <div class="left-bar">
                <div class="bars"></div>
                <div class="bars"></div>
                <div class="bars"></div>
                <div class="bars"></div>
                <div class="bars"></div>
              </div>
              <div class="right-bar">
                <div class="bars2"></div>
                <div class="bars2"></div>
                <div class="bars2"></div>
                <div class="bars2"></div>
                <div class="bars2"></div>
              </div>
              
              <li>
                <div class="tap-title">
                  <router-link class="" to="?groupsId=">this.name</router-link>
                </div>
              </li>
              <div class="tap-body">
                <li class="mt-5">Total: 元</li>
                <li>未付: 元</li>
                <li>他人未付: 元</li>
              </div>
              <div class="insert-logo"></div>
            </ul>
          </nav>
        </div>
      </div>

      <div class="rc pl-3">
        <div class="d-flex">
          Groups
          <router-link to="/addgroup" class="ml-1 mr-3">+</router-link>
          <ul class="nav">
            <!-- <li class="nav-item">
              <router-link class="nav-link" 
              to="?groupsId=">all</router-link>
            </li> -->
            <li 
              class="nav-item"
              v-for="group in myGroup"
              :key="group.id"
            >
              <router-link
                to="?groupsId="
                class="nav-link" 
              >
                {{ group.name }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <router-link 
          to="/walikan/member" 
          style="color: black;"
        >
          memeber name
        </router-link>
        
      </div>

      <div class="rc mt-3">
        Total
        <div class="total text-right">
          {{ total }}
          <span>元</span>
        </div>
      </div>

      <div class="rc mt-3">
        <div class="unpaid">
          未付
          <div class="pay">
            <span>
              <router-link to="/unpaid">{{ meUnpaid }}</router-link>
              元
            </span>
            
          </div>
        </div>
        <div class="unpaid">
          他人未付
          <div class="pay">
            <span>
              <router-link to="/unpaid">{{ unpaid }}</router-link>
              元
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: 'admin',
    email: 'root@test.com',
    isAdmin: true
  },
  isAuthenticated: true
}
export default {
  name: 'LeftCol',
  props: {
    initTotal: {
      type: Number,
      default: -1
    },
    initUnpaid: {
      type: Number,
      default: -1
    },
    initMeUnpiad: {
      type: Number,
      default: -1
    },
    initMyGroup: {
      type: Array,
      required: true
    },
    initAllMembers: {
      type: Array,
      required: true
    },
  },
  data () {
    return {
      total: this.initTotal,
      unpaid: this.initUnpaid,
      meUnpaid: this.initMeUnpiad,
      myGroup: this.initMyGroup,
      allMembers: this.initMyGroup,
      currentUser: {
        id: -1,
        name: '',
        email: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },
  create () {
    this.fatchUser()
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