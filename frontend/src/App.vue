<template>

<h1>Sight Read Dojo</h1>


<ModalComponent :open="showModal" @close="showModal = !showModal">
  <img id="treble-notes-img" src="./assets/treble-notes.png" />
  <img id="bass-notes-img" src="./assets/bass-notes.png" />
</ModalComponent>

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
<br>
<button class="show-btn" @click="showModal = true" >Show Notes</button>

<InstructionComponent/>
<footer>Built by Karl Duggan 2022</footer>
</template>

<script>
import CanvasDisplay from './components/CanvasDisplay.vue';
import TrebleButtonComponent from './components/TrebleButtonComponent.vue';
import BassButtonComponent from './components/BassButtonComponent.vue';
import GeneralButtonComponent from './components/GeneralButtonComponent.vue';
import KeySignatureSelectComponent from './components/KeySignatureSelectComponent.vue'
import InstructionComponent from './components/InstructionComponent.vue';
import ModalComponent from './components/ModalComponent.vue';
import { ref } from "vue";


export default {
  name: 'App',
  components: {
    CanvasDisplay,
    TrebleButtonComponent,
    BassButtonComponent,
    GeneralButtonComponent,
    KeySignatureSelectComponent,
    InstructionComponent,
    ModalComponent
},
setup(){
  const showModal = ref(false)
  return { showModal}
}
}
</script>

<style>
  h1 {
    margin-bottom: 50px;
    font-size: 50px;
    font-weight: 600;
    color: #545454;
    
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

#treble-notes-img {
 
  width: 400px;
  height: auto;
  height: auto;
}
#bass-notes-img {
 
  width: 400px;
  height: auto;
}

.show-btn {
    
    background-color: #ffffff;
    border: 2px solid #000000;
    border-radius: 5px;
    box-shadow: #545454 4px 4px 0 0;
    color: #545454;
    cursor: pointer;
    display: inline-grid;
    font-weight: 600;
    font-size: 16px;
    margin: 2rem;
    line-height: 35px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    }
    .show-btn:active {
    box-shadow: #545454 2px 2px 0 0;
    transform: translate(2px, 2px);
    }

    @media (min-width: 768px) {
    .show-btn {
        min-width: 140px;
    
    }
    }
    .show-btn:hover{
    background-color: #000000;
    color: #fff;
    }
    footer {
     margin:0;
     margin-top: 2rem;
     padding: 8px;
     color: #545454;

    }
</style>
