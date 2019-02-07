import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onSort } from '../actions'

import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc'

const SortableItem = SortableElement(({ value }) => <li>{value}</li>)

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map(({ id }, index) => (
        <SortableItem key={`item-${index}`} index={index} value={id} />
      ))}
    </ul>
  )
})

class IssueList extends Component {
  onSortEnd = ({ oldIndex, newIndex }) => {
    const { currentIssue, onSort } = this.props
    const newOrderedList = arrayMove(this.props.issues, oldIndex, newIndex)
    onSort(currentIssue, newOrderedList)
  }
  render() {
    const { issues } = this.props
    return (
      <div>
        {issues && issues.length > 0 && (
          <SortableList items={issues} onSortEnd={this.onSortEnd} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentIssue: state.issueReducer.currentIssue,
  issues: state.issueReducer[state.issueReducer.currentIssue],
  isLoading: state.issueReducer.loading,
})

const mapDispatchToProps = {
  onSort,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IssueList)
