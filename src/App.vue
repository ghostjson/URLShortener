<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<style>

    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        --primary-color: #283646;
        --secondary-color: #F65B53;
        --complementary-color1: #10A3A9;
        --complementary-color2: #F7A35F;
    }
</style>
<script>
    export default {
        name: 'App'
    }
</script>
