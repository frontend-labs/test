<template lang="pug">
  div
    header-default
    nuxt
</template>

<style lang="stylus">
@import url("element-ui/lib/theme-default/index.css")
@import "~assets/css/variables.styl"
@import "~assets/css/utils.styl"
@import "~assets/css/globals.styl"


</style>


<script>
import HeaderDefault from '~/components/Header.vue'

export default {
  components: {
    HeaderDefault
  }
}
</script>
