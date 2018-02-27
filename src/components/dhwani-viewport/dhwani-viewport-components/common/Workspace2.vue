<template>
  <div id="Workspace2" v-bind:class="{ active: isActive }" class="scrollbar-workspace-2">
    <slot name="Menu"></slot>
    <slot></slot>
  </div>
</template>

<script>
import vm from '../../../../main.js'

import jquery from 'jquery'

import {} from 'jquery.scrollbar'

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
      jquery('.scrollbar-workspace-2').scrollbar('destroy')
    }
    // eslint-disable-next-line
      // jquery('.scrollbar-workspace-2').scrollbar()
  },
  created: function () {
    // changePath event handler
    this.$bus.$on('activeWorkspace2', function () {
      // console.log('activeWorkspace2')
      vm.$children[0].$children[1].isActive = true
    })
    this.$bus.$on('disableWorkspace2', function () {
      // console.log('disableWorkspace2')
      vm.$children[0].$children[1].isActive = false
    })
  },
  beforeUpdate: function () {
    if (this.isActive) {
      console.log('Workspace2 scroll enabled')
      // eslint-disable-next-line
      jquery('.scrollbar-workspace-2').scrollbar()
    } else {
      console.log('Workspace2 scroll destroy')
      // eslint-disable-next-line
      jquery('.scrollbar-workspace-2').scrollbar('destroy')
    }
  }
}
</script>

<style scoped>
#Workspace2 {
  position: relative;
  display: flex;
  width: 94vw !important;
  height: inherit;
  margin-bottom: 0px !important;
  margin-left: 0px !important;
  margin-right: -94vw;
  background: blueviolet;
  overflow-x: hidden;
  overflow-y: auto;
  transition: margin 1s ease-in-out;
}
#Workspace2.active {
  margin-right: 0px;
  transition: margin 1s ease-in-out;
}
</style>
