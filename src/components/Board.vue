<template lang="html">
  <div>
    {{msg}}
    <list></list>
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
      msg: 'board1'
    }
  }
}
</script>

<style lang="css">
</style>
