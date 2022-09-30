<template>

    <div id="btn-container">
        <div class="wrapper">
            <div class="img-wrap">
                <img height="65" src="../assets/baseClef.png">
            </div>
            
            <div id="btn">Bass Clef</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "BassButtonComponent"
    }
</script>

<style scoped>
    #btn-container {
        /*background-color: #4c7faf; /* Blue */
        border-radius: 5px;
        border: 1px solid rgb(100, 100, 100);
        color: rgb(100, 100, 100);
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 5px;
        


    }
    #btn-container:hover {
        cursor: pointer;
    }
    .wrapper {
        padding: 8px
        
    }
    .img-wrap {
      height: 70px;
      position: relative;
    }
    img {
        position: absolute;
        top: 10px;
        left: 20px;
        height: 40px;
    }

</style>