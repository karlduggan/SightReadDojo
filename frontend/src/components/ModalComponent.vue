<template>
    <transition name="fade">
        <div class="modal" v-show="open">
            <div class="inner-modal">
                <div class="content-modal">
                    <div class="content">
                        <slot/>
                    </div>
                    
                    <button class="close-btn" type="button" @click="$emit('close')">Close</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            open: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style scoped>

    ::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: rgb(0,0,0, 0.5);
        z-index: 1;
    }
    .inner-modal {
        max-width: 500px;
        margin: 2rem auto;
    }
    .content-modal {
        position: relative;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgb(0,0,0, 0.3);
        padding: 2rem;
    }
    .content {
        justify-content: center;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .close-btn {
    
    background-color: #ffffff;
    border: 2px solid #000000;
    border-radius: 5px;
    box-shadow: #545454 4px 4px 0 0;
    color: #545454;
    cursor: pointer;
    display: inline-grid;
    font-weight: 600;
    font-size: 16px;
    margin: 1rem;
    line-height: 35px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    }
    .close-btn:active {
    box-shadow: #545454 2px 2px 0 0;
    transform: translate(2px, 2px);
    }

    @media (min-width: 768px) {
    .close-btn {
        min-width: 120px;
    
    }
    }
    .close-btn:hover{
    background-color: #000000;
    color: #fff;
    }
</style>