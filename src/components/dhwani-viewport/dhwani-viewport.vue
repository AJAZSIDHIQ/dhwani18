<template>
  <div id="dhwani-view-port-outer">
    <div id="dhwani-view-port-inner">
      <div id="gradient">
        <grouter-view/>
      </div>
    </div>
  </div>
</template>

<script>
import {} from './gradient'

export default {
  name: 'DhwaniViewPort'
}
</script>

<style scoped>
#dhwani-view-port-outer
{
  display: block;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 1);
  padding: 3vw;
}

#dhwani-view-port-inner
{
  display: block;
  box-sizing: border-box;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  /*border: 0.5px #f2f2f2;
  border-style: solid;
  border-radius: 20px;*/
}

#gradient
{
  display: block;
  box-sizing: border-box;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border: 1px transparent;
  border-style: solid;
  border-radius: 20px;
}
</style>
