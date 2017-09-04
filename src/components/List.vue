<template lang="html">
  <div class="column">
      <h3>{{list.title}}</h3>
      <button class="button is-small is-danger" @click="$emit('remove')">delete</button>
    <task v-for="task in list.tasks" :key="task.tid" :task.sync="task" @remove="removeTask(task)" ></task>
    <input class="input" v-model="taskInput" @keyup.enter="addTask(taskInput)" placeholder="add task" >
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
  components: {
    Task
  },
  name: 'list',
  props: {
    'list': Object
  },
  data () {
    return {
      msg: 'list',
      taskInput: '',
      num: '0'
    }
  },
  methods: {
    addTask: function (summary) {
      if (!summary) {
        return false
      }
      const date = Date.now()
      this.list.tasks.push({
        tid: date,
        tsummary: this.taskInput
      })
      this.taskInput = ''
      return true
    },
    removeTask: function (target) {
      this.list.tasks = this.list.tasks.filter(function (t, index, array) {
        return t.tid !== target.tid
      })
    }
  }
}
</script>

<style lang="css">
</style>
