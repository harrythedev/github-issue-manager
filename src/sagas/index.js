import Github from 'github-api'
import { put, takeEvery, all } from 'redux-saga/effects'
const username = process.env.REACT_APP_GITHUB_USERNAME,
  token = process.env.REACT_APP_GITHUB_TOKEN
const requestUrl = `https://api.github.com`
function* fetchUserRepos() {
  const gh = new Github({
    username,
    token,
  })
  const repos = yield gh
    .getUser()
    .listRepos()
    .then(res => {
      // console.log('repos', res)
      return res.data
    })
    .catch(err => console.log('fatal', err))

  // console.log('res', res)

  // const config = {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/vnd.github.v3+json',
  //   },
  // }
  // const json = yield fetch(requestUrl, config).then(response => {
  //   console.log(response)
  //   return response.json()
  // })
  console.log('repos', repos)
  yield put({ type: 'REPOS_FETCH_SUCCEEDED', data: repos })
}
function* fetchIssues({ payload }) {
  const { fullName, id } = payload
  try {
    const endpoint = `${requestUrl}/repos/${fullName}/issues`
    const config = {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    }
    const issues = yield fetch(endpoint, config).then(res => {
      return res.json()
    })
    if (Array.isArray(issues) && issues.length > 0) {
      yield put({ type: 'ISSUES_FETCH_SUCCEEDED', id, issues })
    } else {
      yield put({ type: 'ISSUES_FETCH_FAILED' })
    }
  } catch (e) {
    yield put({ type: 'ISSUES_FETCH_FAILED', message: e.message })
  }
}

function* actionWatcher() {
  yield takeEvery('REPOS_FETCH_REQUESTED', fetchUserRepos)
  yield takeEvery('ISSUES_FETCH_REQUESTED', fetchIssues)
}
export default function* rootSaga() {
  yield all([actionWatcher()])
}
