<template>
  <div id="Workspace1" v-bind:class="{ active: isActive }" class="scrollbar-workspace-1">
    <slot></slot>
    <slot name="Menu"></slot>
  </div>
</template>

<script>
import jquery from 'jquery'

import {} from 'jquery.scrollbar'

export default {
  name: 'Workspace1',
  data: function () {
    return {
      isActive: true
    }
  },
  mounted: function () {
    if (this.isActive) {
      // eslint-disable-next-line
      jquery('.scrollbar-workspace-1').scrollbar()
    } else {
      // eslint-disable-next-line
      jquery('.scrollbar-workspace-1').scrollbar('destroy')
    }
  },
  updated: function () {
    if (this.isActive) {
      // eslint-disable-next-line
      jquery('.scrollbar-workspace-1').scrollbar()
    } else {
      // eslint-disable-next-line
      jquery('.scrollbar-workspace-1').scrollbar('destroy')
    }
  }
}
</script>

<style scoped>
#Workspace1 {
  position: relative;
  display: flex;
  width: inherit;
  height: inherit;
  margin-left: 100vw;
  background: red;
  overflow-x: hidden;
  overflow-y: auto;
}
#Workspace1.active {
  margin-left: 0px;
}
</style>
