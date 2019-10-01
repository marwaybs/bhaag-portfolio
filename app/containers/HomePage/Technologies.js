import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/H1'

export default class Technologies extends React.PureComponent {
  

  render() {
    const {  } = this.props;

    return (
      <div>
        <H1>Technologies</H1>
        <span>React</span>
        <span>Ruby on Rails</span>
        <span>Python</span>
        <span>Others:</span>

      </div>
    )
  }

}