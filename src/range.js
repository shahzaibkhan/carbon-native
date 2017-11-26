import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'react-native';
import { colors } from './styles';

export default function Range(props) {
  const color = colors[props.color] || props.color;
  const minimumTrackTintColor = props.minimumTrackTintColor || color;

  return (
    <Slider
      {...props}
      minimumTrackTintColor={minimumTrackTintColor}
      style={[props.style]}
    />
  );
}

Range.propTypes = {
  color: PropTypes.string,
  style: PropTypes.any,
};
Range.defaultProps = {
  color: 'primary',
};
