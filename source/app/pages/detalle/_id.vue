<template lang="pug">
div
  .job-page__header
    .container
      .job-page__company-logo
        img(:src="company_logo")
      h2.job-page__position  {{ position_name }}
      span.job-page__company {{ company_name }}
      | &nbsp; • &nbsp;
      span.job-page__type.job-page__type--full {{ job_type }}
      | &nbsp; • &nbsp;
      span.job-page__location {{ location }}
  .container
    el-row.u-pb20(:gutter="40")
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

<script>
import axios from 'axios'
import { SERVICE_URL } from '~/assets/js/paths.js'

export default {
  async asyncData ({params}) {
    const { data } = await axios.get(`${SERVICE_URL}/jobs/${params.id}`)
    return {
      position_name: data.position_name,
      company_name: data.company_name,
      company_logo: data.company_logo,
      job_type: data.job_type,
      location: data.location
    }
  },
  data () {
    return {
      position_name: null,
      params: null,
      data: null
    }
  }
}
</script>

<style lang="stylus" scoped>
@import url('https://cdn.quilljs.com/1.0.0/quill.snow.css')

@import url("element-ui/lib/theme-default/index.css")
@import "~assets/css/variables.styl"
@import "~assets/css/utils.styl"
@import "~assets/css/globals.styl"

.title
  margin-bottom 20px
.subtitle
  margin 20px 0 5px
.el-form-item
  margin-bottom 0
.company-logo
  display flex
  margin-top 20px
.company-logo__title
  margin-top 10px
  font-weight bold
  font-size 14px
.company-logo__text
  font-size 14px
.company-logo__uploader
  margin-right 10px
  >>>
    .el-upload
      border 1px dashed #bfcbd9
      border-radius 6px
      cursor pointer
      position relative
      overflow hidden

    .el-uploadhover
      border-color #20a0ff

    .avatar-uploader-icon
      font-size 28px
      color #8c939d
      width 60px
      height 60px
      line-height 60px
      text-align center

.avatar
  width 60px
  height 60px
  display block

.job-item
    border-top 1px dashed #e1e1e1
    margin 20px 0


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
    height 80px
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
