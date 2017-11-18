<template lang="html">
  <div class="box">
    <!-- 表示欄 -->
    <span style="opacity:0.1" >{{task.tsummary}}{{task.editing}}</span>
    <div v-if="!task.editing">
      <span class="is-size-3" v-text="task.tsummary" @click="task.editing = true"></span>
      <p v-html="task.description"></p>
    </div>
    <!-- 編集欄 -->
    <div v-if="task.editing" class="control">
      <input type="text" class=" input" v-model="task.tsummary">
      <!--<a class=" button is-danger" @click="deleteMember(m.index)">Delete</a>-->
      <textarea class="textarea" v-model="task.description"></textarea>
      <a class=" button is-primary" @click="task.editing = false">OK</a>
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
  summary{

  }
</style>
