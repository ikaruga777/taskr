<template lang="html">
  <div>{{task.tid}} - {{task.tsummary}}</div>
</template>

<script>
export default {
  name: 'task',
  props: ['task'],
  data () {
    return {
      num: '0'
    }
  }
}
</script>

<style lang="css">
</style>
