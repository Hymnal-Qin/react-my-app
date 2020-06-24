import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Card } from '../../components/card';
import { black, grey2, white } from '../../components/values/colors';
import { routeLocal } from '../../routes';
import { Icon } from '../../components/icon';
import { Button } from '../../components/button';
import { H4 } from '../../components/typography';

import { create } from '../../store/subscriptions/actions';
import userRoutes from '../../routes/user';

class Item extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  onClickSubscribe = (crateId) => {
    this.setState({
      isLoading: true,
    });

    this.props.create({ crateId })
      .then((data) => {
        if (data) this.props.history.push(userRoutes.subscriptions.path);
      })
      .then(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    const { id, name, description } = this.props.crate;
    const { isLoading } = this.state;
    return (
      <Card style={{ width: '18em', backgroundColor: white }}>
        <p style={{ padding: '2em 3em 0 3em' }}>
          <img src={`${routeLocal}/images/crate.png`} alt={name} style={{ width: '100%' }}/>
        </p>

        <div style={{ padding: '1em 1.2em' }}>
          <H4 font="secondary" style={{ color: black }}>
            {name}
          </H4>

          <p style={{ color: grey2, marginTop: '1em' }}>{description}</p>

          <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
            <Button
              theme="primary"
              onClick={this.onClickSubscribe.bind(this, id)}
              type="button"
              disabled={isLoading}
            >
              <Icon size={1.2} style={{ color: white }}>
                add
              </Icon>
              Subscribe
            </Button>
          </p>
        </div>
      </Card>
    );
  }
}

Item.propTypes = {
  crate: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  create: PropTypes.func.isRequired
};

const itemState = (state) => ({
  user: state.user,
});

export default connect(itemState, { create })(withRouter(Item));
