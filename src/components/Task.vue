<template lang="html">
  <div class="box">
    <div>
      {{task.tsummary}}
    </div>
    <div class="control">
      <button class="button is-small is-danger" @click="$emit('remove')">delete</button>
    </div>
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
