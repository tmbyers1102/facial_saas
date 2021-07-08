import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  CardElement,
  injectStripe,
  Elements,
  StripeProvider,
} from 'react-stripe-elements';

import {
  Button,
  Message,
  Divider,
} from 'semantic-ui-react'
import { authAxios } from '../../utils'
import { subscribeURL, stripePublishKey } from '../../constants'

class StripeForm extends React.Component {
  state = {
    loading: false,
    error: null,
  }

  submit = (ev) => {
    ev.preventDefault();
    this.setState({ loading: true, error: null });
    if (this.props.stripe) {
      this.props.stripe.createToken().then(result => {
        if (result.error) {
          this.setState({
            error: result.error.message,
            loading: false,
          })
        } else {
          console.log(result);
          authAxios
            .post(subscribeURL, {
              stripeToken: result.token.id
            })
            .then(res => {
              this.setState({
                loading: false,
              });
              this.props.handleUserDetails();
            })
            .catch(err => {
              this.setState({
                loading: false,
                error: err.response.data.message
              });
            });
        }
      });
    } else {
      console.log("Stripe JS hasn't loaded yet")
    }
  };

  render() {
    const { loading, error } = this.state;
    return (
      <div>
        <Divider />
        {error && <Message error header="There was an error" content={error} />}
        <CardElement />
        <Button
          primary
          onClick={this.submit}
          loading={loading}
          disabled={loading}
          style={{ marginTop: "10px" }}
        >
          Go Pro!
            </Button>
      </div>
    );
  }
}

const InjectedStripeForm = injectStripe(StripeForm);

class SubscribeForm extends React.Component {
  render() {
    return (
      <StripeProvider apiKey={stripePublishKey}>
        <Elements>
          <InjectedStripeForm {...this.props} />
        </Elements>
      </StripeProvider>
    )
  }
}

export default SubscribeForm;