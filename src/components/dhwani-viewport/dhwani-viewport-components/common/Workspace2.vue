<template>
  <div id="Workspace2" v-bind:class="{ active: isActive }" class="scrollbar-workspace-2">
    <slot name="Menu"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Workspace2',
  data: function () {
    return {
      isActive: false
    }
  },
  mounted: function () {
    if (this.isActive) {
      // eslint-disable-next-line
      jquery('.scrollbar-workspace-2').scrollbar()
    } else {
      // eslint-disable-next-line
      jquery('.scrollbar-workspace-1').scrollbar('destroy')
    }
  },
  updated: function () {
    if (this.isActive) {
      // eslint-disable-next-line
      jquery('.scrollbar-workspace-2').scrollbar()
    } else {
      // eslint-disable-next-line
      jquery('.scrollbar-workspace-1').scrollbar('destroy')
    }
  }
}
</script>

<style scoped>
#Workspace2 {
  position: relative;
  display: flex;
  width: inherit;
  height: inherit;
  margin-right: -100vw;
  background: blueviolet;
  overflow-x: hidden;
  overflow-y: auto;
}
#Workspace2.active {
  margin-right: 0px;
}
</style>
