import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import images from '../../../../assets/images';
import styles from './CustomCropperHeader.styles';

class CustomCropperHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusBarColor: '#191919',
      barStyle: 'light-content'
    };
  }

  renderStatusBar = () => {
    const { statusBarColor, barStyle } = this.state;

    return (
      <View style={[styles.statusBar, { backgroundColor: statusBarColor }]}>
        <StatusBar
          translucent
          backgroundColor={statusBarColor}
          barStyle={barStyle}
        />
      </View>
    );
  };

  render() {
    const { onCancel, onDone } = this.props;

    return (
      <>
        {this.renderStatusBar()}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onCancel} style={styles.touchableClose} activeOpacity={0.8} underlayColor="transparent" hitSlop={{ top: 15, bottom: 15 }}>
            <Image source={images.iconCloseWhite} style={styles.iconClose} />
          </TouchableOpacity>
          <Text style={styles.titleText}>Crop Image</Text>
          <TouchableOpacity onPress={onDone} style={styles.touchableDone} activeOpacity={0.8} underlayColor="transparent" hitSlop={{ top: 15, bottom: 15 }}>
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

CustomCropperHeader.propTypes = {
  onDone: PropTypes.func,
  onCancel: PropTypes.func
}

CustomCropperHeader.defaultProps = {
  onDone: null,
  onCancel: null
};

export default CustomCropperHeader;
