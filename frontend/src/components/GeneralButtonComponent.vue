<template>
    <div id="play" @click="toggle" class="button-74" role="button">
       
        Start
    </div>

</template>
<script>
    import State from "./state.js"

    export default {
        name: "GeneralButtonComponent",
        // State
        data() {
            return {
                play: false
            }
        },
        // Actions
        methods: {
            toggle: function() {
                // Clicking to start and stop 
                State.isRunning = !State.isRunning;
                console.log(State.isRunning)
            }
        }
    }

</script>


<style scoped>
    

/* CSS */
.button-74 {
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 5px;
  box-shadow: #545454 4px 4px 0 0;
  color: #545454;
  cursor: pointer;
  display: inline-grid;
  font-weight: 600;
  font-size: 16px;
  margin: 5px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

}



.button-74:active {
  box-shadow: #545454 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
 
  }
}
.button-74:hover{
  background-color: #000000;
  color: #fff;
}
</style>