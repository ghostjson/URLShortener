<script>
    import {Url} from "@/services/url.service";

    export default {
        name: 'Home',
        data() {
            return {
                url: '',
                urlService: null,
                id: '',
                page: 0
            }
        },
        methods: {
            async storeURL() {
                if (this.url !== '') {
                    this.id = window.location.origin + '/' + (await this.urlService.storeURL(this.url))
                    this.page++;
                }
            },
            async copyURL(){
                const copyText = document.getElementById('short')

                copyText.select()
                copyText.setSelectionRange(0, 99999)

                document.execCommand("copy")
            }
        },
        created() {
            this.urlService = new Url();
            this.storeURL()
        }
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
            <section v-if="page === 0">
                <p class="subtitle">
                    Paste your long long URL to be SHORTENED.
                </p>

                <form>
                    <label for="link" style="display: none">Link</label>
                    <input type="text" id="link" placeholder="Paste link here" v-model="url">
                    <br>
                    <button type="button" @click="storeURL">short it</button>
                </form>
            </section>
            <section v-if="page === 1">
                <p class="subtitle">
                    Your SHORTENED URL
                </p>
                <form>
                    <label for="short" style="display: none">Link</label>
                    <input type="text" id="short"  v-model="id">
                    <br>
                    <button type="button" @click="copyURL">Copy URL</button>
                </form>
            </section>
        </div>
    </div>
</template>

<style src="./home.css" scoped></style>

