var faker = require('faker')
var fn = require('./util.js')

faker.locale = 'es'

function generateJobs () {
  var jobs = []

  for (var id = 0; id < 50; id++) {
    var position_name = faker.name.title()
    var company_name = faker.company.companyName()
    var company_logo = fn.random(['//i.imgur.com/Ji1dkSR.png', '//i.imgur.com/ywfPZPl.png',
      '//i.imgur.com/4W183iV.png', '//i.imgur.com/nE0C6n4.png'])
    var location = faker.address.country()
    var job_type = fn.random(['Full-time', 'Contrato', 'Part-time', 'Freelance'])
    var post_date = faker.date.recent()

    jobs.push({
      'id': id,
      'position_name': position_name,
      'company_name': company_name,
      'company_logo': company_logo,
      'location': location,
      'job_type': job_type,
      'post_date': post_date
    })
  }

  return { 'jobs': jobs }
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateJobs
