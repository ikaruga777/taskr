<template lang="html">
  <div>
    {{task.tid}} - {{task.tsummary}}
    <button @click="$emit('remove')"/>
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
