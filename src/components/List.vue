<template lang="html">
  <div>
    <li>aaa
      {{list.id}} - {{list.summary}}
    </li>
    <task v-for="task in list.tasks" :key="task" :task="task"></task>
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
  components: {
    Task
  },
  name: 'list',
  props: ['list'],
  data () {
    return {
      msg: 'list',
      num: '0'
    }
  }
}
</script>

<style lang="css">
</style>
