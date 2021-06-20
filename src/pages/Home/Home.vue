<script>
    export default {
        name: 'Home',
    }
</script>

<template>
    <div id="home">
        <div class="circle circle3"></div>
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle4"></div>
        <div class="circle circle5"></div>
        <div class="circle circle6"></div>

        <div class="content">
            <div class="logo">
                <img src="../../assets/logo_white_croppped.png" alt="easeapp-logo">
            </div>
            <div class="title">
                <h3>URL SHORTENER</h3>
            </div>
            <p class="subtitle">
                Paste your long long URL to be SHORTENED.
            </p>

            <form>
                <label for="link" style="display: none">Link</label>
                <input type="text" id="link" placeholder="Paste link here">
                <br>
                <button type="button">short it</button>
            </form>
        </div>
    </div>
</template>

<style src="./home.css" scoped></style>

