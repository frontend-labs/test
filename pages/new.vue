<template lang="pug">
  .container

    el-form
      h2.title Publica una oferta de empleo

      h4.subtitle Categoría
      el-form-item
        el-radio(v-model="rdJobCategory", label="1") Diseño
      el-form-item
        el-radio(v-model="rdJobCategory", label="2") Desarrollo
      h4.subtitle Tipo de empleo
      el-form-item
        el-radio(v-model="rdJobType", label="Full-time") Full-time
      el-form-item
        el-radio(v-model="rdJobType", label="Part-time") Part-time
      el-form-item
        el-radio(v-model="rdJobType", label="Freelance") Freelance
      el-form-item
        el-radio(v-model="rdJobType", label="Contrato") Contrato
      br
      el-form-item
        el-input(v-model="txtJobTitle", placeholder="Título del empleo")
      br
      el-form-item
        el-input(v-model="txtCompanyName", placeholder="Nombre de la empresa")
      br
      el-form-item
        el-input(v-model="txtLocation", placeholder="Ubicación")

      el-form-item
        el-checkbox(v-model="chkRemote") Se acepta trabajo remoto
      .company-logo
        el-upload.company-logo__uploader(
          action="https://jsonplaceholder.typicode.com/posts/",
          :show-file-list="false",
          :on-success="handleAvatarSuccess",
          :before-upload="beforeAvatarUpload")

          img(v-if="imageUrl" :src="imageUrl" class="avatar")
          i(v-else class="el-icon-upload avatar-uploader-icon")
        .company-logo__description
          p.company-logo__title Logo de la empresa
          p.company-logo__text Selecciona una imagen

      h4.subtitle Descripción del empleo

      el-form-item
        el-checkbox(v-model="chkRedirect") Ya tengo la descripción en otro website
      br
      el-form-item
        el-input(v-if="chkRedirect" placeholder="URL al website del empleo")

      div(v-if="!chkRedirect")
        .quill-editor(v-model="content", v-quill:myQuillEditor="editorOptions")

      h4.subtitle Vista previa en listado

      .job-item
          h3.job-item__title  {{ txtJobTitle }}
          span.job-item__company {{ txtCompanyName }}
          | &nbsp; • &nbsp;
          span.job-item__type {{ rdJobType }}
          | &nbsp; • &nbsp;
          span.job-item__location {{ txtLocation }}

      el-form-item.u-align-right
        el-button(type="primary", size="large") ¡Publicar!
      br
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  mounted () {
    console.log('this is current quill instance object', this.myQuillEditor)
  },
  data () {
    return {
      imageUrl: '',
      rdJobCategory: null,
      rdJobType: null,
      txtJobTitle: null,
      txtCompanyName: null,
      txtLocation: null,
      chkRedirect: null,
      chkRemote: null,
      content: '',
      editorOptions: {
        modules: {
          toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['link']
          ]
        }
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('La imagen debe ser formato JPEG')
      }
      if (!isLt2M) {
        this.$message.error('La imagen no debe exceder los 2MB!')
      }
      return isJPG && isLt2M
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
