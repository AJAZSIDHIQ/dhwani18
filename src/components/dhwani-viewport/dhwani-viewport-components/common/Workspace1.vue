<template>
  <div id="Workspace1" v-bind:class="{ active: isActive }" class="scrollbar-workspace-1">
    <slot></slot>
    <slot name="Menu"></slot>
  </div>
</template>

<script>
import vm from '../../../../main.js'

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
    // eslint-disable-next-line
      // jquery('.scrollbar-workspace-1').scrollbar()
  },
  created: function () {
    // changePath event handler
    this.$bus.$on('activeWorkspace1', function () {
      // console.log('activeWorkspace1')
      vm.$children[0].$children[0].isActive = true
    })
    this.$bus.$on('disableWorkspace1', function () {
      // console.log('disableWorkspace1')
      vm.$children[0].$children[0].isActive = false
    })
  },
  beforeUpdate: function () {
    if (this.isActive) {
      console.log('Workspace1 scroll enabled')
      // eslint-disable-next-line
      jquery('.scrollbar-workspace-1').scrollbar()
    } else {
      console.log('Workspace1 scroll destroy')
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
  width: 94vw !important;
  height: inherit;
  margin-bottom: 0px !important;
  margin-left: -94vw;
  margin-right: 0px !important;
  background: red;
  overflow-x: hidden;
  overflow-y: auto;
  transition: margin 1s ease-in-out;
}
#Workspace1.active {
  margin-left: 0px;
  transition: margin 1s ease-in-out;
}
</style>
