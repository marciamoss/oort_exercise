import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '650821786438-kd45tu35ib0ohqoeosi41vl483njntev.apps.googleusercontent.com',
          scope: 'email',
          plugin_name:'oort'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId(), this.auth.currentUser.get().getBasicProfile().getName());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
      <div className="ui top fixed inverted massive menu">
        <p className="item">{this.props.userName}</p>
        <button onClick={this.onSignOutClick} className="ui item google button right" style={{height:"55px", margin: "0" ,backgroundColor: "red"}} >
            <i className="google icon" />
              Sign Out 
        </button>
      </div>
      );
    } else {
      return (
      <div className="ui top fixed inverted massive menu">
        <button onClick={this.onSignInClick} className="ui item google button right" style={{height:"55px", margin: "0" ,backgroundColor: "green"}} >
            <i className="google icon" />
            Sign In with Google
        </button>
      </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { 
    isSignedIn: state.auth.isSignedIn,
    userName: state.auth.userName
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
