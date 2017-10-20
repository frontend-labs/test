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
    nuxt-link.job-item(to="/detalle" v-for="job in jobs" :key="job.id")
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

</template>

<style lang="stylus" scoped>
.el-pagination
  text-align right

</style>

<script>
import axios from 'axios'

export default {

  async asyncData () {
    const { data } = await axios.get('https://api.mockaroo.com/api/72033920?count=30&key=b3c09a30')
    return { jobs: data }
  },
  data () {
    return {
      txtSearch: null,
      jobs: null
    }
  }
}
</script>

