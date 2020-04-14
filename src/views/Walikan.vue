<template>
  <div>
    <div class="row">
      <div class="left-col col-12 order-1 col-sm-12 order-sm-1 col-md-7 order-md-0">
        <div class="game">
          <LeftColNav 
            :categories="categories"
          />
          <div class="account-list">
            <ul class="row a-item1" style="padding: 0;">
              <li class="col-2 account-title">Date</li>
              <li class="col-3 account-title">Item</li>
              <li class="col-2 account-title">$$</li>
              <li class="col-3 account-title">17付</li>
              <li class="col-2 account-title">#</li>
            </ul>
            <LeftCol
              v-for="perwalikan in walikan"
              :key="perwalikan.id"
              :init-walikan="perwalikan"
              :init-categories="categories"
            />
          </div>
        </div>
      </div>
      <div class="right-col col-12 order-0 col-sm-12 order-sm-0 col-md-5 order-md-1">
        <RightCol 
          :total="total"
          :unpaid="unpaid"
          :me-unpaid="meUnpaid"
          :my-group="myGroup"
          :all-members="allMembers"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import RightCol from '../components/RightCol'
import LeftCol from '../components/LeftCol'
import LeftColNav from '../components/LeftColNav'
import walikanAPI from '../apis/walikan'

export default {
  name: 'Walikan',
  components: {
    LeftCol,
    LeftColNav,
    RightCol
  },
  data() {
    return {
      walikan: [],
      categories: [],
      categoryId: [],
      total: -1,
      unpaid: -1,
      meUnpaid: -1,
      myGroup: [],
      allMembers: []
    }
  },
  created() {
    const { categoryId } = this.$route.query
    this.fetchWalikan({ categoryId })
  },
  beforeRouteUpdate (to, from, next) {
    // console.log('to:',to)
    const { categoryId } = to.query
    this.fetchWalikan({ categoryId })
    next()
  },
  methods: {
    async fetchWalikan ({ categoryId = '' }) {
      try {
        const { data, statusText } = await walikanAPI.getWalikan({ categoryId })

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.walikan = data.walikan
        this.categories = data.categories
        this.categoryId =data.categoryId
        this.myGroup = data.myGroup
        this.total = data.total
        this.unpaid = data.unpaid
        this.meUnpaid = data.meUnpaid

      } catch (err) {
        console.log('err:', err)
      }
    }
  }
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: 'admin',
    email: 'root@test.com',
    isAdmin: true
  },
  isAuthenticated: true
}

const dummyData = {
  "walikan": [
      {
          "id": 28,
          "title": "kio",
          "amount": 560,
          "date": "03-05",
          "image": null,
          "createdAt": "2020-03-18T08:10:32.000Z",
          "updatedAt": "2020-03-18T08:10:32.000Z",
          "CategoryId": 1,
          "UserId": 1,
          "Category": {
              "id": 1,
              "name": "雜支",
              "createdAt": "2020-03-03T09:13:10.000Z",
              "updatedAt": "2020-04-06T05:02:38.000Z"
          },
          "spliters": []
      },
      {
          "id": 51,
          "title": "test",
          "amount": 40,
          "date": "03-19",
          "image": null,
          "createdAt": "2020-03-25T06:45:59.000Z",
          "updatedAt": "2020-03-25T06:45:59.000Z",
          "CategoryId": 3,
          "UserId": 1,
          "Category": {
              "id": 3,
              "name": "餐食",
              "createdAt": "2020-03-03T09:13:10.000Z",
              "updatedAt": "2020-03-03T09:13:10.000Z"
          },
          "spliters": [
              {
                  "id": 4,
                  "name": "ni",
                  "email": null,
                  "password": null,
                  "isAdmin": false,
                  "createdAt": "2020-03-16T09:03:07.000Z",
                  "updatedAt": "2020-03-16T09:03:07.000Z",
                  "Record": {
                      "UserId": 4,
                      "AccountId": 51,
                      "share": 10,
                      "createdAt": "2020-03-25T06:45:59.000Z",
                      "updatedAt": "2020-03-25T06:45:59.000Z"
                  }
              },
              {
                  "id": 21,
                  "name": "chu",
                  "email": null,
                  "password": null,
                  "isAdmin": false,
                  "createdAt": "2020-03-16T14:14:04.000Z",
                  "updatedAt": "2020-03-16T14:14:04.000Z",
                  "Record": {
                      "UserId": 21,
                      "AccountId": 51,
                      "share": 10,
                      "createdAt": "2020-03-25T06:45:59.000Z",
                      "updatedAt": "2020-03-25T06:45:59.000Z"
                  }
              },
              {
                  "id": 3,
                  "name": "fan",
                  "email": null,
                  "password": null,
                  "isAdmin": false,
                  "createdAt": "2020-03-16T09:03:07.000Z",
                  "updatedAt": "2020-03-16T09:03:07.000Z",
                  "Record": {
                      "UserId": 3,
                      "AccountId": 51,
                      "share": 10,
                      "createdAt": "2020-03-25T06:45:59.000Z",
                      "updatedAt": "2020-03-25T06:45:59.000Z"
                  }
              }
          ]
      },
      {
          "id": 52,
          "title": "測試長度能多長",
          "amount": 300,
          "date": "03-18",
          "image": null,
          "createdAt": "2020-03-25T07:09:22.000Z",
          "updatedAt": "2020-03-31T14:20:32.000Z",
          "CategoryId": 1,
          "UserId": 1,
          "Category": {
              "id": 1,
              "name": "雜支",
              "createdAt": "2020-03-03T09:13:10.000Z",
              "updatedAt": "2020-04-06T05:02:38.000Z"
          },
          "spliters": [
              {
                  "id": 3,
                  "name": "fan",
                  "email": null,
                  "password": null,
                  "isAdmin": false,
                  "createdAt": "2020-03-16T09:03:07.000Z",
                  "updatedAt": "2020-03-16T09:03:07.000Z",
                  "Record": {
                      "UserId": 3,
                      "AccountId": 52,
                      "share": 110,
                      "createdAt": "2020-03-29T08:12:34.000Z",
                      "updatedAt": "2020-03-29T08:12:34.000Z"
                  }
              },
              {
                  "id": 4,
                  "name": "ni",
                  "email": null,
                  "password": null,
                  "isAdmin": false,
                  "createdAt": "2020-03-16T09:03:07.000Z",
                  "updatedAt": "2020-03-16T09:03:07.000Z",
                  "Record": {
                      "UserId": 4,
                      "AccountId": 52,
                      "share": 110,
                      "createdAt": "2020-03-29T08:12:34.000Z",
                      "updatedAt": "2020-03-29T08:12:34.000Z"
                  }
              }
          ]
      },
      {
          "id": 54,
          "title": "jjj",
          "amount": 3214,
          "date": "03-05",
          "image": null,
          "createdAt": "2020-03-25T08:08:24.000Z",
          "updatedAt": "2020-03-25T08:08:24.000Z",
          "CategoryId": 1,
          "UserId": 1,
          "Category": {
              "id": 1,
              "name": "雜支",
              "createdAt": "2020-03-03T09:13:10.000Z",
              "updatedAt": "2020-04-06T05:02:38.000Z"
          },
          "spliters": []
      },
      {
          "id": 58,
          "title": "milk",
          "amount": 400,
          "date": "03-14",
          "image": null,
          "createdAt": "2020-03-25T09:29:46.000Z",
          "updatedAt": "2020-03-25T09:29:46.000Z",
          "CategoryId": 3,
          "UserId": 1,
          "Category": {
              "id": 3,
              "name": "餐食",
              "createdAt": "2020-03-03T09:13:10.000Z",
              "updatedAt": "2020-03-03T09:13:10.000Z"
          },
          "spliters": [
              {
                  "id": 4,
                  "name": "ni",
                  "email": null,
                  "password": null,
                  "isAdmin": false,
                  "createdAt": "2020-03-16T09:03:07.000Z",
                  "updatedAt": "2020-03-16T09:03:07.000Z",
                  "Record": {
                      "UserId": 4,
                      "AccountId": 58,
                      "share": 100,
                      "createdAt": "2020-03-25T09:29:46.000Z",
                      "updatedAt": "2020-03-25T09:29:46.000Z"
                  }
              },
              {
                  "id": 3,
                  "name": "fan",
                  "email": null,
                  "password": null,
                  "isAdmin": false,
                  "createdAt": "2020-03-16T09:03:07.000Z",
                  "updatedAt": "2020-03-16T09:03:07.000Z",
                  "Record": {
                      "UserId": 3,
                      "AccountId": 58,
                      "share": 100,
                      "createdAt": "2020-03-25T09:29:46.000Z",
                      "updatedAt": "2020-03-25T09:29:46.000Z"
                  }
              },
              {
                  "id": 21,
                  "name": "chu",
                  "email": null,
                  "password": null,
                  "isAdmin": false,
                  "createdAt": "2020-03-16T14:14:04.000Z",
                  "updatedAt": "2020-03-16T14:14:04.000Z",
                  "Record": {
                      "UserId": 21,
                      "AccountId": 58,
                      "share": 100,
                      "createdAt": "2020-03-25T09:29:46.000Z",
                      "updatedAt": "2020-03-25T09:29:46.000Z"
                  }
              }
          ]
      }
  ],
  "categories": [
      {
          "id": 1,
          "name": "雜支",
          "createdAt": "2020-03-03T09:13:10.000Z",
          "updatedAt": "2020-04-06T05:02:38.000Z"
      },
      {
          "id": 2,
          "name": "交通",
          "createdAt": "2020-03-03T09:13:10.000Z",
          "updatedAt": "2020-03-03T09:13:10.000Z"
      },
      {
          "id": 3,
          "name": "餐食",
          "createdAt": "2020-03-03T09:13:10.000Z",
          "updatedAt": "2020-03-03T09:13:10.000Z"
      },
      {
          "id": 4,
          "name": "貓咪",
          "createdAt": "2020-03-03T09:13:10.000Z",
          "updatedAt": "2020-03-03T09:13:10.000Z"
      },
      {
          "id": 5,
          "name": "醫療",
          "createdAt": "2020-03-03T09:13:10.000Z",
          "updatedAt": "2020-03-03T09:13:10.000Z"
      },
      {
          "id": 9,
          "name": "其他",
          "createdAt": "2020-03-31T07:49:11.000Z",
          "updatedAt": "2020-03-31T07:49:11.000Z"
      }
  ],
  "categoryId": "",
  "total": 4514,
  "unpaid": 530,
  "meUnpaid": 80,
  "myGroup": [
      {
          "id": 1,
          "name": "home",
          "createdAt": "2020-03-16T14:14:04.000Z",
          "updatedAt": "2020-03-16T14:14:04.000Z",
          "UserId": 1
      },
      {
          "id": 2,
          "name": "test",
          "createdAt": "2020-03-16T14:43:22.000Z",
          "updatedAt": "2020-03-16T14:43:22.000Z",
          "UserId": 1
      }
  ],
  "allMembers": [
      "ni",
      "fan",
      "chu",
      "lele"
  ]
}
</script>

<style>
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
  /* color: rgb(223, 221, 221); */
}

.a-item1, .a-item2 {
  margin-right: 5px;
}

.a-item1 {
  margin-bottom: 5px;
}

.a-text {
  padding-right: 5px;
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
}

.rc:nth-child(3) {
  position:relative; 
  height: 30%;
}

.rc:nth-child(4) {
  /* position: relative;  */
  display: flex;
  flex-direction: row;
  width: 80%; 
  height: 20%; 
  margin-left: 8%;
}

.hi, .profile, .admin {
  color: black;
  width: 50%;
  border: 5px rgb(105, 100, 100) double;
  padding-left: 1%;
}


.total {    
  float: right;
  font-size: 72px;
}

.total span {
  font-size: 36px;
}


.nav-link {
  font-size: 3px; 
  padding: 4px 2px;
}


.unpaid {
  width: 50%;
  border-right: 3px solid rgb(99, 99, 99);
}

.pay {
  text-align: right; 
}

.pay span {
  font-size: 18px;
}

.pay span a {
  font-size: 32px;
}

@media (min-width: 768px) {

  .menu, .menu-nav, .menu-checkbox {
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
    bottom: -7%;

  }

  .total span {
    font-size: 32px;
  }

  .pay {
    top: 7%;
  }

  .pay span {
    font-size: 14px;
  }
  
  .pay span a {
    font-size: 24px;
  }
 
}


@media (max-width: 768px) {

  .game {
    border-radius: 0 0 17% 0;
  }

  .game-info {
    height: 5%;
  }

  .rc:nth-child(2), .rc:nth-child(3), .rc:nth-child(4) {
    display: none;
  }

  .rc:nth-child(1) {
    border: 0px;
  }

  .menu {
    display: inline-block;
    color: black;
    border: 5px rgb(105, 100, 100) double;
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
    /* border: 2px grey double; */
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

</style>