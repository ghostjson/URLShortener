<script>
   import {Url} from "@/services/url.service";

   export default {
       beforeCreate(){
           const url = this.$route.params.url

           const urlObj = new Url();

           urlObj.getHashUrl(url)
               .then(res => {
                   if(res.data() !== undefined){
                       location.href = "//"+res.data()['url']
                   }else{
                       this.$router.push({name: 'NotFound'})
                   }
               })
       }
   }
</script>
