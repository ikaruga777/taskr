<template lang="html">
  <div>
    {{msg}}
    <task></task>
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
  components: {
    Task
  },
  name: 'list',
  data () {
    return {
      msg: 'list1'
    }
  }
}
</script>

<style lang="css">
</style>
