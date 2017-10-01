<template lang="pug">
  header
    .container.header__container
        nuxt-link.header__logo(to="/")
          h1 jobs
        .u-align-right(:span="12")
            a.header__login-link(href="javascript:;", @click="dialogLoginVisible = true") Login
            nuxt-link(to="/new")
              el-button.header__btn-publish(type="primary") Publicar empleo

    el-dialog(title='Login', :visible.sync='dialogLoginVisible')
        el-form(:model='frmLogin', label-width="120px")
            el-form-item(label='Usuario: ')
                el-input(v-model='frmLogin.user')
            el-form-item(label='Password: ')
                el-input(v-model='frmLogin.password', auto-complete='off', type='password')
        span.dialog-footer(slot='footer')
            el-button(@click='dialogLoginVisible = false') Cancelar
            nuxt-link(to="/new")
              el-button(type='primary', @click='dialogLoginVisible = false') Login

</template>

<style lang="stylus" scoped>

.header__container
  display flex
  align-items center
  justify-content space-between

header
    padding: 20px 0

.header__logo
    margin 0
    font-size 20px

.header__login-link
    margin-right 20px
    text-decoration none

</style>

<script>
export default {
  data () {
    return {
      dialogLoginVisible: false,
      frmLogin: {
        name: '',
        password: ''
      }
    }
  }
}
</script>
