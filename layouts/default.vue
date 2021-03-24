<template>
  <div class="page-wrapper">
    <div class="header-placeholder"></div>
    <div class="header">
      <div class="wrapper header-wrapper">
        <HeaderComponentsAppLogo />
        <div class="sw"></div>
        <HeaderComponentsAppNavigation menu="main" />
      </div>
    </div>

    <Nuxt />
  </div>
</template>

<script>
  import global from '~/mixins/global.js';
  export default {
    data() {
      return {
        user: this.$store.state.user
      }
    },
    mixins: [global]
  }
</script>