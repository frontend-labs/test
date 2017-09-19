<template lang="pug">
    #app
        header-default
        .container
            el-row(:gutter="40")
                el-col(:span="16")
                    el-input(
                        placeholder="Buscar"
                        icon="search"
                        v-model="txtSearch"
                        size="large"
                        )
                    br
                    br
                    - for (var i = 0; i< 10; i++)
                        .job-item
                            h3.job-item__title  Desarrollador (Back End/DevOps)
                            span.job-item__company Empresa
                            | &nbsp; • &nbsp;
                            span.job-item__type Full-time
                            | &nbsp; • &nbsp;
                            span.job-item__location Lima
                    br
                    el-pagination(
                        layout="prev, pager, next"
                        :total="50"
                        )


                el-col(:span="8")
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
import Header from 'components/Header/Header.vue'

export default {
    name: 'App',
    methods: {
        // ...mapActions(['handleResize', 'openSidebar', 'closeSidebar'])
    },
    data() {
        return {
            checkboxGroup1: ['Full'],
            checkboxGroup2: ['Shanghai'],
            types: ['Full-time', 'Part-time', 'Freelance', 'Contrato'],
            locations: ['Remoto'],
            txtSearch: '',
            txtLocation: '',
        }
    },
    computed: {
    },
    components: {
        'header-default': Header,
    },
    created: function() {
        // window.addEventListener('resize', this.handleResize)
    }
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';

.job-item {
    border-bottom: 1px dashed #e1e1e1;
    padding: 15px 0;
}
.job-item__title {
    margin-top: 0;
    margin-bottom: 5px;
}
</style>
