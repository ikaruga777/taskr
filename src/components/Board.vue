<template lang="html">
  <div class="container">
    <h2>{{name}}</h2>
    <div class="columns">
      <list v-for="list in lists" :key="list.id" :list="list" :list.sync="list" @remove="removeList(list)"></list>
    </div>
    <input class="input" v-model="listInput" placeholder="add list" @keyup.enter="addList(listInput)">
  </div>
</template>

<script>
import List from './List.vue'
export default {
  name: 'board',
  components: {
    List
  },
  methods: {
    addList (listName) {
      if (!listName) {
        return
      }
      this.lists.push({
        id: Date.now(),
        title: listName,
        tasks: []
      })
      this.listInput = ''
    },
    removeList: function (target) {
      this.lists = this.lists.filter(function (l, index, array) {
        return l.id !== target.id
      })
    }
  },
  data: function () {
    return {
      name: 'board1',
      listInput: '',
      lists: []
    }
  }
}
</script>

<style lang="css">
</style>
