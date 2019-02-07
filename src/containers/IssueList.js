import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onSort } from '../actions'

import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc'

import styled from 'styled-components'

const Wrapper = styled.li`
  border: 2px solid #000000;
  padding: 5px;
  margin-top: 5px;
`

const SortableItem = SortableElement(({ value, number, title }) => (
  <Wrapper>
    <div>id: {value}</div>
    <div>number: {number}</div>
    <div>title: {title}</div>
  </Wrapper>
))

const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      <h3>Issues:</h3>
      <ul>
        {items.map(({ id, number, title }, index) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            value={id}
            number={number}
            title={title}
          />
        ))}
      </ul>
    </div>
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
