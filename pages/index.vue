<template lang="pug">
  div
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

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="stylus" scoped>



</style>
