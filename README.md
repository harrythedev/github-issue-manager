# github issue manager v1.0 :four_leaf_clover:

> :zap: Simply priotize your github issues :zap:

### Before You Start... :pushpin:

This project uses following technology:

- React / Redux / Redux-Saga
- react-sortable-hoc
- styled-components
- github-api

### Getting started :pushpin:

1. Clone repo

```bash
$ git clone git@github.com:harrythedev/github-issue-manager.git
```

2. Install dependency in the root directory

```bash
$ npm install
```

### Features :pushpin:

- The interface should accept a Github API key when first accessed. :white_check_mark:
- The application should load all associated repositories for that API key, in a single column layout. :white_check_mark:
- The loading of issues should change the interface from single column layout to a two column interface. Repositories in a left column, issues for the selected repository in a right column.
  :white_check_mark:
- Each issue should display the following: assignee avatar (40x40), title, created time (format: dd/mm/yyyy), and last updated (example: 2 hours or 3 days ago)
- A user should be able to reorder issues in whatever priority they wish (overriding the default sort order of the issues you get back).
  :white_check_mark:
- The customized order should be able to be persisted in a current client-side session so that if you refresh the page, the order will remain. (You do not need to sync this customized order back to the api)
  :white_check_mark:

### Demo :pushpin:

coming...
