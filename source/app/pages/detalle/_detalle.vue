<template lang="pug">
  .container


    h2.title titulo anianianiania
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'detail',
  components: {
    Logo
  },
  mounted () {
    console.log('this is current quill instance object', this.myQuillEditor)
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import url('https://cdn.quilljs.com/1.0.0/quill.snow.css')
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
</style>
