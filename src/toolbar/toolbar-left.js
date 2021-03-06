import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  default: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    paddingVertical: 8,
    paddingRight: 6,
  },
});

export default function ToolbarLeft(props) {
  const { children, style, ...passProps } = props;

  return (
    <View style={[styles.default, style]} {...passProps}>
      {children}
    </View>
  );
}

ToolbarLeft.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};
ToolbarLeft.defaultProps = {};
