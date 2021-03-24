<template>
    <div>
      <HomepageIntro rotator_id="homepage_intro" />

      <PromoZones rotator_id="promo_zones" />

      <div class="blog-widget" style="background-image: url(https://picsum.photos/id/236/1920/800);">
        <div class="wrapper bw-wrapper">
          <div class="bw-header" v-html="cmslabel('blog_widget_title')"></div>
        </div>
      </div>
    </div> 
</template>

<script>
  import global from '~/mixins/global.js';
  export default {
    head() {
      return{
        title: 'Naslovnica',
        bodyAttrs:{
          class: 'page-homepage'
        }
      }
    },
    mixins: [global]
  }
</script>
