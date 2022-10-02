<template>

<h1>Sight Read Dojo</h1>
<CanvasDisplay></CanvasDisplay>
<div class="container">
  <div class="selection-container">
    <TrebleButtonComponent/>
    <BassButtonComponent/>
  </div>
  <div class="selection-container-2">
    <KeySignatureSelectComponent/>
    <GeneralButtonComponent/>
  </div>
</div>

</template>

<script>
import CanvasDisplay from './components/CanvasDisplay.vue';
import TrebleButtonComponent from './components/TrebleButtonComponent.vue';
import BassButtonComponent from './components/BassButtonComponent.vue';
import GeneralButtonComponent from './components/GeneralButtonComponent.vue';
import KeySignatureSelectComponent from './components/KeySignatureSelectComponent.vue'


export default {
  name: 'App',
  components: {
    CanvasDisplay,
    TrebleButtonComponent,
    BassButtonComponent,
    GeneralButtonComponent,
    KeySignatureSelectComponent
}
}
</script>

<style>
  h1 {
    margin-bottom: 50px;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  display: inline-flex;
}
.selection-container-2 {
 display: inline-grid;
}
</style>
