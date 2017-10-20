<template lang="pug">
  div
    header-default
    .job-page__header
      .container
        .job-page__company-logo
          img(src="https://getonbrd-prod.s3.amazonaws.com/uploads/users/logo/2165/thumb_tw_avatar-01.png")
        h2.job-page__position  Javascript Developer
        span.job-page__company Empresa
        | &nbsp; • &nbsp;
        span.job-page__type.job-page__type--full Full-time
        | &nbsp; • &nbsp;
        span.job-page__location Lima
    .container
      el-row(:gutter="40")
        el-col(:span="16")
          .job-page__description
            h2.job-page__title Descripción del empleo
            p Nos encontramos en búsqueda de desarrolladores Web Front-End Senior o Semi-Senior con Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repudiandae aliquam facilis saepe dicta et, architecto asperiores rem enim, dolorum voluptatum, corrupti harum fugiat consequatur obcaecati ipsam eaque reiciendis beatae!
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat incidunt placeat quo natus vero obcaecati minima accusamus eveniet quod quos molestiae optio voluptatem suscipit praesentium culpa, quas laudantium, sint, assumenda.
            p Nos encontramos en búsqueda de desarrolladores Web Front-End Senior o Semi-Senior con Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repudiandae aliquam facilis saepe dicta et, architecto asperiores rem enim, dolorum voluptatum, corrupti harum fugiat consequatur obcaecati ipsam eaque reiciendis beatae!
            h2.job-page__title Cómo postular
            p Envía un correo a jobs@airbnb.com con el asunto Desarrollador front-end

        el-col(:span="8")
          h2.job-page__title Más información
          img(src="http://placehold.it/300x400")



</template>

<style lang="stylus">
@import url("element-ui/lib/theme-default/index.css")
@import "~assets/css/variables.styl"
@import "~assets/css/utils.styl"
@import "~assets/css/globals.styl"

.job-page__header
  background-color $colorLightGray
  border-top 1px dashed #e1e1e1
  border-bottom 1px dashed #e1e1e1
  text-align center
  position relative
  padding 30px 0
  margin-top 50px
  margin-bottom 20px

.job-page__company-logo
  position absolute
  left 0
  right 0
  margin auto
  top -40px
  img
    background #fefefe
    width 80px
    border-radius 50%
    border 1px dashed #e1e1e1
    padding 3px

.job-page__position
  margin-top 20px
  font-size 2rem

.job-page__company, .job-page__type, .job-page__location
  font-size 1.2rem

.job-page__description
  padding-bottom 50px
  p
    & + p
      margin-top 20px

.job-page__title
    margin-bottom 10px
    margin-top 20px


</style>


<script>
import HeaderDefault from '~/components/Header.vue'

export default {
  components: {
    HeaderDefault
  }
}
</script>
