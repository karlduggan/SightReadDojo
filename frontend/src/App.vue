<template>

<h1>Sight Read Dojo</h1>
<CanvasDisplay></CanvasDisplay>
<div class="selection-container">
  <TrebleButtonComponent/>
  <BassButtonComponent/>
</div>

</template>

<script>
import CanvasDisplay from './components/CanvasDisplay.vue';
import TrebleButtonComponent from './components/TrebleButtonComponent.vue';
import BassButtonComponent from './components/BassButtonComponent.vue';



export default {
  name: 'App',
  components: {
    CanvasDisplay,
    TrebleButtonComponent,
    BassButtonComponent
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.selection-container {
 
}
</style>
