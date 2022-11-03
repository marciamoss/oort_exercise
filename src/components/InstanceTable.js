import React from 'react';
import { connect } from 'react-redux';
import { getEC2s } from '../actions';
import TableLayout from './TableLayout';
import Pagination from './Pagination/Pagination';
import NotLoggedInMessage from './NotLoggedInMessage';

const InstanceTable = (props) => {
  React.useEffect(() => {
    props.getEC2s();
  }, []);

  return (
    <div>
      {props.isSignedIn ?
        <div>
          <h2 className='ui header green'>Active EC2 Instances</h2>
          PAGE <Pagination/>
          <TableLayout/>
        </div>
        : <NotLoggedInMessage/>}
    </div>
    );
}

const mapStateToProps = state => {
  return { 
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { getEC2s })(InstanceTable);
