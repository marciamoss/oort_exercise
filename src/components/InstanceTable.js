import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEC2s } from '../actions';
import TableLayout from './TableLayout';
import Pagination from './Pagination/Pagination';
import NotLoggedInMessage from './NotLoggedInMessage';

const InstanceTable = ({isSignedIn, getEC2s}) => {
  useEffect(() => {
    if(isSignedIn) {
      getEC2s();
    }
  }, [isSignedIn, getEC2s]);

  return (
    <div>
      {isSignedIn ?
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
