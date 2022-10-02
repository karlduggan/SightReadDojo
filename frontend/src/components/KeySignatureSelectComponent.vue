<template>
<label for="key-signiture">Select Key Signiture: </label>
    <select @change="keyOnChange($event)" name="key-signiture" id="key-signiture">
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

    <select @change="modeOnChange($event)" name="key-signiture-major-minor" id="key-signiture-major-minor">
        <option value="Major">Major</option>
        <option value="Minor">Minor</option>
    </select>
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

</style>