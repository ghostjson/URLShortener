<template>
    <div>
        <home></home>
    </div>
</template>

<style>
    *{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }

    :root{
        --primary-color: #283646;
        --secondary-color: #F65B53;
        --complementary-color1: #10A3A9;
        --complementary-color2: #F7A35F;
    }
</style>

<script>

    import Home from "@/pages/Home/Home";
    export default {
        name: 'App',
        components: {Home},
    }
</script>

