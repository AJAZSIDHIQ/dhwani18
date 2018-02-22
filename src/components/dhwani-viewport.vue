<template>
  <div id="dhwani-view-port-outer">
    <div id="dhwani-view-port-inner">
      <grouter-view/>
    </div>
  </div>
</template>

<script>
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
  padding: 5vw;
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
  border: 1px #d8d8d8;
  border-style: solid;
}
</style>
