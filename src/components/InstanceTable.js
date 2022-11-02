import React from 'react';
import { connect } from 'react-redux';
import { getEC2s } from '../actions';
import TableLayout from './TableLayout'

const InstanceTable = (props) => {
  React.useEffect(() => {
    props.getEC2s();
  }, []);

  return (
    <div>
      {props.isSignedIn ?
        <div>
          <h2 className='ui header green'>Active EC2 Instances</h2>
          <TableLayout/>
        </div>
        : <h1 className='ui header'>Need to sign in to see you ec2 instances</h1>}
    </div>
    );
}

const mapStateToProps = state => {
  return { 
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { getEC2s })(InstanceTable);
