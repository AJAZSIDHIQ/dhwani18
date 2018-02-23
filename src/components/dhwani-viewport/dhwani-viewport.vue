<template>
  <div id="dhwani-view-port-outer">
    <div id="gradient">
      <div id="dhwani-view-port-inner" class="scrollbar-inner">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import jquery from 'jquery'

import {} from './gradient'

import {} from 'jquery.scrollbar'

export default {
  name: 'DhwaniViewPort',
  mounted: function () {
    // eslint-disable-next-line
    jquery('.scrollbar-inner').scrollbar()
  },
  updated: function () {
    // eslint-disable-next-line
    jquery('.scrollbar-inner').scrollbar()
  }
}
</script>

<style src="./jquery.scrollbar.css"></style>
<style scoped>
#dhwani-view-port-outer
{
  display: flex;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 1);
  padding: 3vw;
}

#dhwani-view-port-inner
{
  display: flex;
  box-sizing: border-box;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

#gradient
{
  display: flex;
  box-sizing: border-box;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  /*position: absolute;*/
}

div.scroll-wrapper.scrollbar-inner {
  width: 100%;
}
</style>
