import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getList as getCratesList } from '../../store/crate/actions';
import { Helmet } from 'react-helmet/es/Helmet';
import { Grid, GridCell } from '../../components/grid';
import { grey, grey2 } from '../../components/values/colors';
import H3 from '../../components/typography/H3';
import Loading from '../../layout/Loading';
import EmptyMessage from '../../layout/EmptyMessage';
import CrateItem from '../../modules/crate/Item';

class List extends PureComponent {

  componentDidMount() {
    this.props.getCratesList('ASC');
  }

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Crates for everyone! - Crate</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font='secondary'>Crates for everyone!</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>You can choose crate which suits your need. You can also
              subscribe to multiple crates.</p>
          </GridCell>

          {/* Crate List */}
          <Grid>
            <GridCell>
              {this.props.crates.isLoading
                ? <Loading/>
                : this.props.crates.list.length > 0
                  ? this.props.crates.list.map(crate => (
                    <div key={crate.id} style={{ margin: '2em', float: 'left' }}>
                      <CrateItem crate={crate}/>
                    </div>
                  ))
                  : <EmptyMessage message='No crates to show'/>
              }
            </GridCell>
          </Grid>
        </Grid>
      </div>
    );
  }
}

List.propTypes = {
  crates: PropTypes.object.isRequired,
  getCratesList: PropTypes.func.isRequired,
};

const listState = (state) => ({
  crates: state.crates,
});

export default connect(listState, { getCratesList })(List);
