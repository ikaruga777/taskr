<template lang="html">
  <div class="card">
    <div class="card-header">
      {{task.tid}} - {{task.tsummary}}
    </div>
    <button @click="$emit('remove')"/>
  </div>
</div>
</template>

<script>
export default {
  name: 'task',
  props: {
    'task': Object
  },
  data () {
    return {
      num: '0'
    }
  }
}
</script>

<style lang="css">
</style>
