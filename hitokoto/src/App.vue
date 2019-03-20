<template>
  <div id="app">
    <Hitokoto />
  </div>
</template>

<script>
import Hitokoto from './components/Hitokoto.vue'

export default {
  name: 'app',
  components: {
    Hitokoto
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
