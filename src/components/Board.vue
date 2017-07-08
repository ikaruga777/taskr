<template lang="html">
  <div>
    {{name}}
    <list v-for="list in lists" :key="list" :list="list"></list>
  </div>
</template>

<script>
import List from './List.vue'
export default {
  name: 'board',
  components: {
    List
  },
  data () {
    return {
      name: 'board1',
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
