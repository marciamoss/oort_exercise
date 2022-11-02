import _ from 'lodash'
import React from 'react'
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { changeSort } from '../actions';

function TableLayout(props) {
  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={props.column === 'id' ? props.direction : null}
            onClick={() => props.changeSort('id', props.data, props.direction)}

          >
            ID
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={props.column === 'name' ? props.direction : null}
            onClick={() => props.changeSort('name', props.data, props.direction)}
          >
            Name
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={props.column === 'state' ? props.direction : null}
            onClick={() => props.changeSort('state', props.data, props.direction)}
          >
            State
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={props.column === 'az' ? props.direction : null}
            onClick={() => props.changeSort('az', props.data, props.direction)}
          >
            az
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={props.column === 'publicIP' ? props.direction : null}
            onClick={() => props.changeSort('publicIP', props.data, props.direction)}
          >
            Public IP
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={props.column === 'privateIP' ? props.direction : null}
            onClick={() => props.changeSort('privateIP', props.data, props.direction)}
          >
            Private IP
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.data.map(({ id, name, state, az, publicIP, privateIP }, index) => (
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

const mapStateToProps = state => {
  return {
    column: state.sort.column ? state.sort.column : null,
    data: state.sort.data ? state.sort.data : state.getEC2,
    direction: state.sort.direction ? state.sort.direction : 'ascending',
  };
};

export default connect(
  mapStateToProps,
  { changeSort }
)(TableLayout);