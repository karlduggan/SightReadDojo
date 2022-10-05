<template>
    <body>
        <h2>How to play:</h2>
        <p>Enter the correct note using your keyboard before it reaches the end of the stave.<br>
        For notes that are sharp (#) or flat (b) use the up and down arrow keys simultaneously with the correct note.</p>
        <img src="../assets/keyboard.png" alt="" srcset="" height="120">

    </body>
</template>
<script>
    export default {
        name: "InstructionComponent",
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
    h2{
        margin-top: 0rem;
    }
</style>