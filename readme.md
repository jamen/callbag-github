
# callbag-github

Use streaming APIs from GitHub as [Callbags](https://github.com/callbag/callbag).

## Install

```sh
npm i callbag-github
```

## Usage

Most of the API are from [GitHub's Event API](https://developer.github.com/v3/activity/events)

### `fromPublicEvents()`

See [List public events](https://developer.github.com/v3/activity/events/#list-public-events)

### `fromRepoEvents(owner, repo)`

See [List repository events](https://developer.github.com/v3/activity/events/#list-repository-events)

### `fromIssueEvents(owner, repo)`

See [List issue events for a repository](https://developer.github.com/v3/activity/events/#list-issue-events-for-a-repository)

### `fromNetworkEvents(owner, repo)`

See [List public events for a network of repositories](https://developer.github.com/v3/activity/events/#list-public-events-for-a-network-of-repositories)

### `fromOrgEvents(org)`

See [List public events for an organization](https://developer.github.com/v3/activity/events/#list-public-events-for-an-organization)

### `fromReceivedEvents(username)`

See [List events that a user has received](https://developer.github.com/v3/activity/events/#list-events-that-a-user-has-received)

### `fromPublicReceivedEvents(username)`

See [List public events that a user has received](List public events that a user has received)

### `fromUserEvents(username)`

See [List events performed by a user](https://developer.github.com/v3/activity/events/#list-events-performed-by-a-user)

### `fromPublicUserEvents(username)`

See [List public events that a user has received](https://developer.github.com/v3/activity/events/#list-public-events-performed-by-a-user)

### `fromUserOrgEvents(username, org)`

See [](https://developer.github.com/v3/activity/events/#list-events-for-an-organization)

### `fromJobs(query)`

See [The GitHub Jobs API](https://jobs.github.com/api)
