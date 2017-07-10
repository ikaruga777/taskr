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
        id: '3',
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
      lists: [
        {
          id: '1',
          title: 'bbb',
          tasks: [
            {
              tid: '1',
              tsummary: 'とーどー'
            },
            {
              tid: '2',
              tsummary: 'あああ'
            }
          ]
        },
        {
          id: '2',
          title: 'ccc',
          tasks: [
            {
              tid: '3',
              tsummary: 'けらけら'
            },
            {
              tid: '4',
              tsummary: 'てらｒてあｒ'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
