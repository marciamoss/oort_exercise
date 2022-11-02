import React from 'react';
import { connect } from 'react-redux';
import TableLayout from './TableLayout';

let ec2Instances = require("./ec2instance_fakedata.json");

class InstanceTable extends React.Component {
  render() {
    return (
    <div>
      {this.props.isSignedIn ? 
        <div>
          <h2 className='ui header green'>Active EC2 Instances</h2>
          <TableLayout tableData={ec2Instances}/>
        </div>
        : <h1 className='ui header'>Need to sign in to see you ec2 instances</h1>}
    </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(InstanceTable);