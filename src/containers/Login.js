import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { authLogin as login } from "../store/actions/auth";
import logo from '../assets/images/logo.svg'

class NormalLoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    formError: null
  };

  // not in video series yet
  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username !== '' && password !== '') {
      this.props.login(username, password);
    } else {
      this.setState({
        formError: "Please enter all the form fields"
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      formError: null
    });
  };

  render() {
    const { formError } = this.state;
    const { error, loading, authenticated } = this.props;
    if (authenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div style={{ marginTop: "100px" }}>
        <Grid textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src={logo} /> Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  onChange={this.handleChange}
                  name='username'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                  name='password'
                />

                <Button
                  color='teal'
                  fluid size='large'
                  diasabled={loading}
                  loading={loading}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            {formError && (
              <Message negative>
                <Message.Header>
                  There was an error
                </Message.Header>
                <p>{formError}</p>
              </Message>
            )}
            {error && (
              <Message negative>
                <Message.Header>
                  There was an error
                </Message.Header>
                <p>{error}</p>
              </Message>
            )}
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(login(username, password))
  };
};

// old one
// const mapDispatchToProps = dispatch => {
//   return {
//     login: (username, password) => dispatch(authLogin(username, password))
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NormalLoginForm);
