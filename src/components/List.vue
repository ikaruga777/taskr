<template lang="html">
  <div>
      <h3>{{list.title}}</h3>
    <task v-for="task in list.tasks" :key="task.tid" :task.sync="task" @remove="removeTask(task)" ></task>
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
      this.list.tasks.push({
        tid: Date.now(),
        tsummary: this.taskInput
      })
      this.taskInput = ''
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
