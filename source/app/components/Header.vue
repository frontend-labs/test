<template lang="pug">
  header
    .container.header__container
        nuxt-link.header__logo(to="/")
          img(src='~assets/img/isotipo.svg')
          //- svg#Layer_1(data-name='Layer 1', xmlns='http://www.w3.org/2000/svg', viewbox='0 0 579.07 324.36')
            defs
              style.
                .cls-1{fill:#00a6d1;}.cls-2{fill:#e50a2f;}
            title fel_isotipo
            path.cls-1(d='M688.06,344.32a15.88,15.88,0,0,0,.16-1.61,24.55,24.55,0,0,0-.75-7.21,24.9,24.9,0,0,0-.86-3,24.11,24.11,0,0,0-2.78-5.14,21.85,21.85,0,0,0-1.35-2.49L567.87,188.29a25.47,25.47,0,1,0-39,32.74L630,341.57,529.12,461.78a25.54,25.54,0,0,0,3.13,35.88h0a25.55,25.55,0,0,0,35.89-3.14L682.75,357.94a24.31,24.31,0,0,0,2.51-4.64c.16-.3.33-.58.49-.88A25,25,0,0,0,688.06,344.32Z', transform='translate(-109.18 -179.23)')
            path.cls-1(d='M167.45,341.57,268.58,221a25.47,25.47,0,1,0-39-32.74L114.95,324.88a25.13,25.13,0,0,0-1.35,2.49,23.89,23.89,0,0,0-2.78,5.14,24.43,24.43,0,0,0-.86,3,25.09,25.09,0,0,0-.75,7.2c0,.56.11,1.08.16,1.64a24.49,24.49,0,0,0,2.33,8.07c.15.31.31.6.48.9.82,1.56,1.34,3.23,2.53,4.62L229.28,494.52a25.48,25.48,0,0,0,39-32.75Z', transform='translate(-109.18 -179.23)')
            path.cls-2(d='M551.68,304.55l-31-31a44,44,0,0,0-62.08,0l-62.08,62.08L334.4,273.51a44,44,0,0,0-62.08,0l-31,31a44,44,0,0,0,0,62.08L365.44,490.79a44,44,0,0,0,62.08,0l31-31h0l93.12-93.12A44,44,0,0,0,551.68,304.55Z', transform='translate(-109.18 -179.23)')

        .u-align-right(:span="12")
            a.header__login-link(href="javascript:;", @click="dialogLoginVisible = true") Login
            nuxt-link(to="/publicar")
              el-button.header__btn-publish(type="primary") Publicar empleo

    el-dialog(title='Login', :visible.sync='dialogLoginVisible')
        el-form(:model='frmLogin', label-width="120px")
            el-form-item(label='Usuario: ')
                el-input(v-model='frmLogin.user')
            el-form-item(label='Password: ')
                el-input(v-model='frmLogin.password', auto-complete='off', type='password')
        span.dialog-footer(slot='footer')
            el-button(@click='dialogLoginVisible = false') Cancelar
            nuxt-link(to="/publicar")
              el-button(type='primary', @click='dialogLoginVisible = false') Login

</template>

<style lang="stylus" scoped>
@import "~assets/css/variables.styl"

.header__container
  display flex
  align-items center
  justify-content space-between

header
    padding: 20px 0

.header__logo
    margin 0
    font-size 20px
    img
      width 60px
    svg
      width 70px
      height 60px
      .cls-1
        fill $brandColor
      .cls-2
        fill red

.header__login-link
    margin-right 20px
    text-decoration none
    color $brandColor
    transition 0.3s all ease
    &:hover
      transition 0.3s all ease
      opacity .8

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
