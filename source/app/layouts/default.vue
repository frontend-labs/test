<template lang="pug">
  div
    header-default
    .container
      el-row(:gutter="40")
        el-col(:span="16")
          nuxt

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

<style lang="stylus">
@import url("element-ui/lib/theme-default/index.css")
@import "~assets/css/variables.styl"
@import "~assets/css/utils.styl"
@import "~assets/css/globals.styl"
</style>


<script>
import HeaderDefault from '~/components/Header.vue'

export default {
  components: {
    HeaderDefault
  },
  data () {
    return {
      checkboxGroup1: ['Full'],
      checkboxGroup2: ['Shanghai'],
      types: ['Full-time', 'Part-time', 'Freelance', 'Contrato'],
      locations: ['Remoto'],
      txtSearch: '',
      txtLocation: ''
    }
  }
}
</script>
