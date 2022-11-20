import React, { Component } from 'react';
import { Platform } from 'react-native';
import Modal from 'react-native-modal';
import SafeAreaView from 'react-native-safe-area-view';
import AmazingCropper from 'react-native-amazing-cropper-min';
// eslint-disable-next-line import/no-unresolved
import ImageResizer from 'react-native-image-resizer';
import styles from './ImageCropper.styles';
import CustomCropperHeader from './CustomCropperHeader';

const QUALITY_RATE = Platform.OS === 'ios' ? 0.9 : 90;
const MAXIMUM_DIMENSION = 275;

export default class ImageCropper extends Component {
  onDone = async (croppedImageUri, croppedImageData) => {
    const { onCroppingComplete, imageData } = this.props;

    let fileExt;
    if (Platform.OS == 'ios') {
      fileExt = imageData.uri
        .split('.')
        .pop()
        .toLowerCase();
    } else {
      fileExt = imageData.fileName
        .split('.')
        .pop()
        .toLowerCase();
    }

    const calcFinalSize = this.calculateResize(
      croppedImageData.size.width,
      croppedImageData.size.height,
      MAXIMUM_DIMENSION
    );

    const resizeImage = await ImageResizer.createResizedImage(
      croppedImageUri,
      calcFinalSize.width,
      calcFinalSize.height,
      'JPEG',
      QUALITY_RATE,
      0
    );

    onCroppingComplete({
      fileExt,
      imagePath: resizeImage.uri
    });
  };

  calculateResize = (width, height, maximumDimension) => {
    const size = {};
    if (width > height) {
      size.width = width > maximumDimension ? maximumDimension : width;
      size.height = (size.width / width) * height;
    } else {
      size.height = height > maximumDimension ? maximumDimension : height;
      size.width = (size.height / height) * width;
    }
    return size;
  };

  onCancel = () => {
    const { onCancelPress } = this.props;
    onCancelPress();
  };

  render() {
    const { visible, imageData } = this.props;

    if (visible) {
      return (
        <Modal style={styles.modal} visible={visible}>
          <SafeAreaView style={styles.container}>
            <AmazingCropper
              headerComponent={<CustomCropperHeader />}
              onDone={this.onDone}
              onCancel={this.onCancel}
              imageUri={imageData.uri}
              imageWidth={imageData.width}
              imageHeight={imageData.height}
              minimumSize={75}
              NOT_SELECTED_AREA_OPACITY={0.4}
            />  
          </SafeAreaView>
        </Modal>
      );
    }
    return null;
  }
}

ImageCropper.defaultProps = {
  imageData: null
};

/*
<AmazingCropper
  headerComponent={<CustomCropperHeader />}
  onDone={this.onDone}
  onCancel={this.onCancel}
  imageUri={imageData.uri}
  imageWidth={imageData.width}
  imageHeight={imageData.height}
  minimumSize={75}
  NOT_SELECTED_AREA_OPACITY={0.4}
/>
*/
