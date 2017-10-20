<template lang="pug">
  div
    el-input(
      placeholder="Buscar"
      icon="search"
      v-model="txtSearch"
      size="large"
      )
    br
    br
    - for (var i = 0; i < 2; i++)
      nuxt-link.job-item(to="/detalle")
        .job-item__company-logo
          img(src="https://getonbrd-prod.s3.amazonaws.com/uploads/users/logo/2165/thumb_tw_avatar-01.png")
        h3.job-item__title  Javascript Developer
        span.job-item__company Empresa
        | &nbsp; • &nbsp;
        span.job-item__type.job-item__type--full Full-time
        | &nbsp; • &nbsp;
        span.job-item__location Lima

      nuxt-link.job-item(to="/detalle")
        .job-item__company-logo
          img(src="https://vuejobs.com/storage/avatars/tXrNI83Ji4vLBKkyCg5oDFUNCy5caX9TN22q3cN1.png")
        h3.job-item__title  Desarrollador (Back End/DevOps)
        span.job-item__company Empresa
        | &nbsp; • &nbsp;
        span.job-item__type.job-item__type--part Part-time
        | &nbsp; • &nbsp;
        span.job-item__location Lima

      nuxt-link.job-item(to="/detalle")
        .job-item__company-logo
          img(src="https://getonbrd-prod.s3.amazonaws.com/uploads/users/logo/4976/thumb_logo-bbva-continental-square.png")
        h3.job-item__title  Front-end developer
        span.job-item__company Empresa
        | &nbsp; • &nbsp;
        span.job-item__type.job-item__type--contract Contrato
        | &nbsp; • &nbsp;
        span.job-item__location Lima

      nuxt-link.job-item(to="/detalle")
        h3.job-item__title  Front-end developer junior
        span.job-item__company Empresa
        | &nbsp; • &nbsp;
        span.job-item__type.job-item__type--contract Contrato
        | &nbsp; • &nbsp;
        span.job-item__location Lima
    br
    el-pagination(
        layout="prev, pager, next"
        :total="50"
        )

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      txtSearch: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-pagination
  text-align right

</style>
