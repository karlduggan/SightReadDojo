<template>

    <p>Select Key Signature </p>
    <div class="select-container">
        
            <select @change="keyOnChange($event)" name="key-signiture" class="select-74" id="key-signiture" @keydown="preventKeyboardInput($event)">
                    <option value="C">C</option>
                    <option value="G">G</option>
                    <option value="D">D</option>
                    <option value="A">A</option>
                    <option value="E">E</option>
                    <option value="B">B</option>
                    <option value="F#">F#</option>
                    <option value="Gb">Gb</option>
                    <option value="Cb">Cb</option>
                    <option value="Db">Db</option>
                    <option value="Ab">Ab</option>
                    <option value="Eb">Eb</option>
                    <option value="Bb">Bb</option>
                    <option value="F">F</option>
                    <option value="C#">C#</option>
                    <option value="G#">G#</option>
                    <option value="D#">D#</option>
            </select>

            <select @change="modeOnChange($event)" name="key-signiture-major-minor" class="select-74" id="key-signiture-major-minor" @keydown="preventKeyboardInput($event)">
                <option value="Major">Major</option>
                <option value="Minor">Minor</option>
            </select>
    </div>

</template>

<script>
import State from './state'

export default {
    name: "KeySignatureSelectComponent",
    data(){
        return {
            modeSelected: "",
            keySelected: "",
        }
    },
    methods: {
        // To prevent the keyboard interfering with the select options
        preventKeyboardInput: function(event) {
            event.preventDefault();
        },
        modeOnChange: function(event){
            this.modeSelected = event.target.value
            // Set the state value of mode ie Major or Minor
            State.keyMode = this.modeSelected
            // Update isLoaded that state has changed 
            State.isLoaded = false
          
        },
        keyOnChange: function(event){
            this.keySelected = event.target.value
            // Set the state value of keySignature
            State.keySignature = this.keySelected
            // Update isLoaded that state has changed 
            State.isLoaded = false
          
        }
    }
}
</script>

<style scoped>
p {
    margin: 1px;
}
.select-container {
    display: inline;
}
    /* CSS */
.select-74 {
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 5px;
  box-shadow: #545454 4px 4px 0 0;
  color: #545454;
  cursor: pointer;
  display: inline-grid;
  font-weight: 500;
  font-size: 16px;
  margin: 5px;
  padding: 10px;
  width: 90px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.select-74:hover {
  background-color: #fff;
}

.select-74:active {
  box-shadow: #545454 2px 2px 0 0;
  transform: translate(2px, 2px);
}
.select-74:focus {
    outline: none;
}



</style>