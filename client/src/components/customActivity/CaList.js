import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../partials/Title';
import { fetchCaConfigs } from '../../actions';

class  CaList extends Component {
  componentDidMount() {
    this.props.fetchCaConfigs();
  }


  render() {
  return (
    <div>
    <Title text="List Custom Activity"/>

    </div>
  );
  }
}

function mapStateToProps({ configs }) {
  return { configs };
}

export default connect(mapStateToProps, { fetchCaConfigs })(CaList);
