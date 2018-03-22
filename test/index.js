
const { pipe, map, forEach } = require('callbag-basics')
const { fromPublicEvents } = require('../callbag-github.js')

pipe(
  fromPublicEvents(),
  map(x => x.repo.url),
  forEach(console.log)
)
