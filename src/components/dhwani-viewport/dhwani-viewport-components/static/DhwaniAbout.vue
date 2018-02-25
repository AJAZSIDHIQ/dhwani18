<template>
  <div>
    <a v-on:click.prevent="changePath('/')">Home</a>
    <a v-on:click.prevent="changePath('/about')">About</a>
    <p>Happy Dhwani 2!</p>
  </div>
</template>

<script>
export default {
  name: 'DhwaniAbout',
  methods: {
    changePath: function (newPath) {
      this.$bus.$emit('changePath', newPath)
    }
  }
}
</script>

<style scoped>
</style>
