<template lang="pug">
  .container
    el-row.u-pb20(:gutter="40")
      el-col(:span="16")
        div
          el-input(
            placeholder="Buscar"
            icon="search"
            v-model="txtSearch"
            size="large"
            )
          br
          br
          nuxt-link.job-item(:to="{name: 'detalle-id', params: {id: job.id} }" v-for="job in jobs" :key="job.id")
            .job-item__company-logo
              img(:src="job.company_logo")
            h3.job-item__title  {{ job.position_name }}
            span.job-item__company {{ job.company_name }}
            | &nbsp; • &nbsp;
            span.job-item__type.job-item__type--full {{ job.job_type }}
            | &nbsp; • &nbsp;
            span.job-item__location {{ job.location }}

          el-pagination.u-mt20(
              layout="prev, pager, next"
              :total="50"
              )

      el-col(:span="8")
        .filters
          h3.app__title.u-mt0 Filtros

          h4.app__subtitle Tipo
          el-checkbox-group.filters__check(v-model="checkboxGroup1")
              el-checkbox-button(v-for="type in types" :label="type" :key="type") {{type}}

          h4.app__subtitle Ubicación
          el-checkbox-group.filters__check(v-model="checkboxGroup2")
              el-checkbox-button(v-for="location in locations" :label="location" :key="location") {{location}}
          el-input.u-mt10(
              placeholder="Ingresa una ubicación"
              v-model="txtLocation"
              size="small"
              )
            el-button(slot="append", icon="search")


</template>

<style lang="stylus" scoped>
@import url("element-ui/lib/theme-default/index.css")
@import "~assets/css/variables.styl"
@import "~assets/css/utils.styl"
@import "~assets/css/globals.styl"

.el-pagination
  text-align right
>>>
  .filters
    background-color $colorSidebarBg
    border-radius 4px
    padding 20px 20px

  .filters__check
    .el-checkbox-button
      margin-left 0
      margin-right 6px
      margin-bottom 6px
    .el-checkbox-button__inner
      border none !important
      border-radius 50px !important
      background-color darken($colorSidebarBg, 5)
      padding 6px 12px
      position relative
      font-size 14px
      box-shadow none !important
      &:hover
        color $brandColor
      &:before
        content '\00D7'
        display none
        transition 0.3s all ease
        position absolute

    .is-checked
      .el-checkbox-button__inner
        background-color $colorGreen !important
        padding-right 20px
        &:hover
          color white
        &:before
          transition 0.3s all ease
          display block
          right 8px


</style>

<script>
import axios from 'axios'
import { SERVICE_URL } from '~/assets/js/paths.js'

export default {

  async asyncData () {
    const { data } = await axios.get(`${SERVICE_URL}/jobs`)
    return { jobs: data }
  },

  data () {
    return {
      txtSearch: null,
      checkboxGroup1: ['Full-time'],
      checkboxGroup2: ['Shanghai'],
      types: ['Full-time', 'Part-time', 'Freelance', 'Contrato'],
      locations: ['Remoto'],
      txtLocation: '',
      jobs: null
    }
  }
}
</script>

