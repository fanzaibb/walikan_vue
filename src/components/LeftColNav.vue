<template>
  <div>
    <div class="btn-group dropright">
      <button class="cate-list dropdown-toggle" data-toggle="dropdown">
        <router-link class="" to="?categoryId=">All</router-link>
      </button>

        <div class="cate-menu dropdown-menu">
          <router-link class="dropdown-item" to="{ name: 'walikan' }">
            All
          </router-link>
          <router-link 
            v-for="category in categories"
            :key="category.id"
            :to="{ name: 'walikan', query: { categoryId: category.id }}"
            class="dropdown-item" 
          >
            {{ category.name }}
          </router-link>
        </div>
    </div>
    <div class="btn-group dropright">
      <button class="time-list dropdown-toggle" data-toggle="dropdown">
        <router-link class="" to="?categoryId=">本月</router-link>
      </button>
        <div class="time-menu dropdown-menu">
          <router-link class="dropdown-item" href="?categoryId=">本月</router-link>
          <router-link class="dropdown-item" href="＃">
          最近三個月</router-link>
          <router-link class="dropdown-item" href="＃">
          2020/02</router-link>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LeftColNav',
  props: {
    initCategories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      categories: this.initCategories
    }
  }
}
</script>
