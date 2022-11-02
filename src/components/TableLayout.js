import _ from 'lodash'
import React from 'react'
import { Table } from 'semantic-ui-react';

function sortReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
      }
    default:
      throw new Error()
  }
}

function TableLayout({tableData}) {
  const [state, dispatch] = React.useReducer(sortReducer, {
    column: null,
    data: tableData,
    direction: null,
  })
  const { column, data, direction } = state
  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'id' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'id' })}
          >
            ID
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'name' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
          >
            Name
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'state' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'state' })}
          >
            State
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'az' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'az' })}
          >
            az
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'publicIP' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'publicIP' })}
          >
            Public IP
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'privateIP' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'privateIP' })}
          >
            Private IP
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(({ id, name, state, az, publicIP, privateIP }, index) => (
          <Table.Row key={index}>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{state}</Table.Cell>
            <Table.Cell>{az}</Table.Cell>
            <Table.Cell>{publicIP}</Table.Cell>
            <Table.Cell>{privateIP}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default TableLayout