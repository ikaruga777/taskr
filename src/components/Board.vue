<template lang="html">
  <div>
    <h2>{{name}}</h2>
    <list v-for="list in lists" :key="list.id" :list="list"></list>
    <input v-model="listInput" placeholder="add list" @keyup.enter="addList">
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
    addList () {
      this.lists.push({
        id: Date.now(),
        title: this.listInput,
        tasks: []
      })
      this.listInput = ''
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
