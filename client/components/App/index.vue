<template lang="pug">
    #app
        header.el-row
            .container
                el-col(:span="12")
                    h1 -----
                el-col.u-align-right(:span="12")
                    a(href="javascript:;", @click="dialogLoginVisible = true") Login
                    el-button(type="primary") Publicar link

        el-dialog(title='Login', :visible.sync='dialogLoginVisible')
            el-form(:model='frmLogin', label-width="120px")
                el-form-item(label='Usuario: ')
                    el-input(v-model='frmLogin.user')
                el-form-item(label='Password: ')
                    el-input(v-model='frmLogin.password', auto-complete='off', type='password')
            span.dialog-footer(slot='footer')
                el-button(@click='dialogLoginVisible = false') Cancelar
                el-button(type='primary', @click='dialogLoginVisible = false') Login


        .el-row(:gutter="20")
            .container
                el-col(:span="18")
                    el-input(
                        placeholder="Buscar"
                        icon="search"
                        v-model="txtSearch"
                        )
                    - for (var i = 0; i< 10; i++)
                        .job
                            h3.job__title lorem ipsum asdasfsdf
                            span.job__company Nombre
                            | &nbsp; • &nbsp;
                            span.job__type Full
                            | &nbsp; • &nbsp;
                            span.job__location Lima
                    br
                    el-pagination(
                        layout="prev, pager, next"
                        :total="50"
                        )


                el-col(:span="6")
                    h3 Filtros

                    h4 Tipo
                    el-checkbox-group(v-model="checkboxGroup1")
                        el-checkbox-button(v-for="type in types" :label="type" :key="type") {{type}}

                    h4 Ubicación
                    el-checkbox-group(v-model="checkboxGroup2")
                        el-checkbox-button(v-for="location in locations" :label="location" :key="location") {{location}}
                    br
                    el-input(
                        placeholder="Ingresa una ubicación"
                        icon="search"
                        v-model="txtLocation"
                        )


</template>
<script>
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import { mapActions, mapState } from 'vuex'

export default {

    name: 'App',
    methods: {
        ...mapActions(['handleResize', 'openSidebar', 'closeSidebar'])
    },
    data() {
        return {
            checkboxGroup1: ['Full'],
            checkboxGroup2: ['Shanghai'],
            types: ['Full', 'Part', 'Free', 'Con'],
            locations: ['Rem'],
            txtSearch: '',
            txtLocation: '',
            dialogLoginVisible: false,
            frmLogin: {
                name: '',
                password: ''
            }
        }
    },
    computed: {
        ...mapState({
            sidebarOpened: state => {
                return state.ui.sidebarOpened
            },
            obfuscatorActive: state => {
                return state.ui.obfuscatorActive
            },
            title: state => {
                return state.route.meta.title
            }
        })
    },
    components: {
        'header-component': Header,
        'sidebar-component': Sidebar
    },
    created: function() {
        window.addEventListener('resize', this.handleResize)
    }
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
