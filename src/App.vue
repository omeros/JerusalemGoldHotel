<template>
  <div id="app">
 
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/cmps/header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">

</style>
