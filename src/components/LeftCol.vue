<template>
  <ul class="row a-item2" style="padding: 0;">
    <li class="col-2 a-text">
      {{ walikan.date }}
    </li>
    <li class="col-3 a-text item-in">
      <router-link 
        class="edit" 
        to="/walikan/edit"
      >
        {{ walikan.title }}
        <span class="dot">&hellip;</span>
      </router-link>
    </li>
    <li class="col-2 a-text">
      {{ walikan.amount }}元
    </li>
    <li class="col-3 a-text">
        <span
          v-for="spliter in spliters"
          :key="spliter.id"
        >
          <input type="checkbox"
          @click="paidCheck">
          <span 
          class="glyphicon glyphicon-ok-circle"
          v-bind:class="{'glyphicon-unchecked': !spliter.Record.isPaid,
                         'glyphicon-check': spliter.Record.isPaid }"
          @click="spliter.Record.isPaid = !spliter.Record.isPaid"></span>
          {{ spliter.name }}- {{ spliter.Record.share }}<br>
        </span>
    </li>
    <li class="col-2 a-text item-out">
      <form action="/walikan/?_method=DELETE" method="POST" style="display: inline;">
        <button class="delete" type="submit">&otimes;
        </button>
      </form>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RightCol',
  props: {
    initWalikan: {
      type: Object,
      required: true
    },
    initCategories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      walikan: this.initWalikan,
      categories: this.initCategories,
      spliters: this.initWalikan.spliters
    }
  },
  methods: {
    paidCheck(){
      this.spliter.Record.isPaid = !this.spliter.Record.isPaid
    }
  }
}
</script>

<style scoped>

</style>