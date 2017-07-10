<template lang="html">
  <div>
      <h3>{{list.id}} - {{list.title}}</h3>
    <task v-for="task in list.tasks" :key="task.id" :task.sync="task"></task>
    <input v-model="taskInput" @keyup.enter="addTask(this.taskInput)" placeholder="add task" >
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
      taskInput: '',
      num: '0'
    }
  },
  methods: {
    addTask: function (summary) {
      this.list.tasks.push({
        tid: 999,
        tsummary: this.taskInput
      })
      this.$emit('update:task', this.list.tasks)
      this.taskInput = ''
    }
  }
}
</script>

<style lang="css">
</style>
