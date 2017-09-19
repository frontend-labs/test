<template lang="pug">
    header
        .container
            h1.header__logo jobs
            .u-align-right(:span="12")
                a.header__login-link(href="javascript:;", @click="dialogLoginVisible = true") Login
                el-button.header__btn-publish(type="primary") Publicar empleo

        el-dialog(title='Login', :visible.sync='dialogLoginVisible')
            el-form(:model='frmLogin', label-width="120px")
                el-form-item(label='Usuario: ')
                    el-input(v-model='frmLogin.user')
                el-form-item(label='Password: ')
                    el-input(v-model='frmLogin.password', auto-complete='off', type='password')
            span.dialog-footer(slot='footer')
                el-button(@click='dialogLoginVisible = false') Cancelar
                el-button(type='primary', @click='dialogLoginVisible = false') Login


</template>

<script>
export default {
    data() {
        return {
            dialogLoginVisible: false,
            frmLogin: {
                name: '',
                password: ''
            }
        }
    },
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
