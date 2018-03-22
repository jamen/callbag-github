
const fetch = require('isomorphic-fetch')
const { fromPromise } = require('callbag-basics')
const { encode } = require('@jamen/query-string')

function fromFetch (url) {
  return function source (type, sink) {
    if (type !== 0) return

    sink(0, source) // ?

    fetch(url).then(function (response) {
      return response.json()
    }).then(response => {
      for (var i = 0; i < response.length; i++) {
        sink(1, response[i])
      }
    }, err => {
      sink(2, err)
    })
  }
}

const api = 'https://api.github.com'
const apiJobs = 'http://jobs.github.com/positions.json'

exports.fromPublicEvents = () => {
  return fromFetch(`${api}/events`)
}

exports.fromRepoEvents = (owner, repo) => {
  return fromFetch(`${api}/repos/${owner}/${repo}/events`)
}

exports.fromIssueEvents = (owner, repo) => {
  return fromFetch(`${api}/repos/${owner}/${repo}/issues/events`)
}

exports.fromNetworkEvents = (owner, repo) => {
  return fromFetch(`${api}/networks/${owner}/${repo}/events`)
}

exports.fromOrgEvents = (org) => {
  return fromFetch(`${api}/orgs/${org}/events`)
}

exports.fromReceivedEvents = (username) => {
  return fromFetch(`${api}/users/${username}/received_events`)
}

exports.fromPublicReceivedEvents = (username) => {
  return fromFetch(`${api}/users/${username}/received_events/public`)
}

exports.fromUserEvents = (username) => {
  return fromFetch(`${api}/users/${username}/events`)
}

exports.fromPublicUserEvents = (username) => {
  return fromFetch(`${api}/users/${username}/events/public`)
}

exports.fromUserOrgEvents = (username, org) => {
  return fromFetch(`${api}/users/${username}/events/orgs/${org}`)
}

exports.fromJobs = (query) => {
  return fetchFrom(`${apiJobs}/positions.json${encode(query)}`)
}
