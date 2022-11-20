import React, { Component } from 'react';
import { View, Image, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import images from '@assets/images';
import { AppButton, ButtonLoading, InputWithLabel, CheckmarkToggle, AppText } from '@components/common';
import { Colors, FormStyles } from '@constants/GlobalStyles';
import styles from './AllergiesModal.styles';

const { width, height } = Dimensions.get('screen');

class AllergiesModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedGluten: props.dietaryRestrictions.checkedGluten, 
      checkedDairyCow: props.dietaryRestrictions.checkedDairyCow,
      checkedDairySheep: props.dietaryRestrictions.checkedDairySheep,
      checkedNuts: props.dietaryRestrictions.checkedNuts,
      checkedShellfish: props.dietaryRestrictions.checkedShellfish,
      checkedPork: props.dietaryRestrictions.checkedPork,
      checkedOther: props.dietaryRestrictions.checkedOther
    };
  }

  toggleAllergy = allergy => {
    const { checkedGluten, checkedDairyCow, checkedDairySheep, checkedNuts, checkedShellfish, checkedPork, checkedLowFibre, checkedOther } = this.state;

    switch (allergy) {
      case 'checkedGluten':
        this.setState({ checkedGluten: !checkedGluten });
        break;
      case 'checkedDairyCow':
        this.setState({ checkedDairyCow: !checkedDairyCow });
        break;
      case 'checkedDairySheep':
        this.setState({ checkedDairySheep: !checkedDairySheep });
        break;
      case 'checkedNuts':
        this.setState({ checkedNuts: !checkedNuts });
        break;
      case 'checkedShellfish':
        this.setState({ checkedShellfish: !checkedShellfish });
        break;
      case 'checkedPork':
        this.setState({ checkedPork: !checkedPork });
        break;
      case 'checkedLowFibre':
        this.setState({ checkedLowFibre: !checkedLowFibre });
        break;
    }
  };

  render() {
    const { isModalOpen, onPressButtonLoading, actionLoading, onPressOne, onPressCloseButton, buttonOneWidth, buttonOneLabel, titleText, modalHeight, scrollHeight } = this.props;
    const { checkedGluten, checkedDairyCow, checkedDairySheep, checkedNuts, checkedShellfish, checkedPork, checkedLowFibre } = this.state;

    return (
      <Modal
        backdropOpacity={0.5}
        backdropTransitionOutTiming={0}
        isVisible={isModalOpen}
        deviceWidth={width}
        deviceHeight={height}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        onBackdropPress={onPressOne}>
        <View style={[styles.modalContent, { height: modalHeight }]}>  
          {onPressCloseButton ? (
            <TouchableOpacity activeOpacity={0.8} onPress={onPressCloseButton} style={styles.closeContainer}>
              <Image
                style={styles.close}
                source={images.close}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ) : null}
          <AppText textWeight="600" style={styles.titleText}>{titleText}</AppText>
          <View style={styles.contentContainer}>
            <View style={[styles.scrollViewContainer, { height: scrollHeight }]}>
              <ScrollView>
                <AppText textWeight="400" style={styles.instructionsText}>Please advise us of any dietary restrictions.</AppText>
                <View style={styles.deliveryContainer}>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.toggleAllergy('checkedGluten')} style={styles.deliveryInner}>
                    <CheckmarkToggle checked={Boolean(checkedGluten)} onPress={() => this.toggleAllergy('checkedGluten')} />
                    <AppText textWeight="400" style={styles.textCheckmark}>Gluten Free</AppText>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.toggleAllergy('checkedDairyCow')} style={styles.deliveryInner}>
                    <CheckmarkToggle checked={Boolean(checkedDairyCow)} onPress={() => this.toggleAllergy('checkedDairyCow')} />
                    <AppText textWeight="400" style={styles.textCheckmark}>No Dairy (Cow)</AppText>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.toggleAllergy('checkedDairySheep')} style={styles.deliveryInner}>
                    <CheckmarkToggle checked={Boolean(checkedDairySheep)} onPress={() => this.toggleAllergy('checkedDairySheep')} />
                    <AppText textWeight="400" style={styles.textCheckmark}>No Dairy (Sheep/Goat)</AppText>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.toggleAllergy('checkedNuts')} style={styles.deliveryInner}>
                    <CheckmarkToggle checked={Boolean(checkedNuts)} onPress={() => this.toggleAllergy('checkedNuts')} />
                    <AppText textWeight="400" style={styles.textCheckmark}>Nut Free</AppText>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.toggleAllergy('checkedShellfish')} style={styles.deliveryInner}>
                    <CheckmarkToggle checked={Boolean(checkedShellfish)} onPress={() => this.toggleAllergy('checkedShellfish')} />
                    <AppText textWeight="400" style={styles.textCheckmark}>No Shellfish</AppText>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.toggleAllergy('checkedPork')} style={styles.deliveryInner}>
                    <CheckmarkToggle checked={Boolean(checkedPork)} onPress={() => this.toggleAllergy('checkedPork')} />
                    <AppText textWeight="400" style={styles.textCheckmark}>No Pork</AppText>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.toggleAllergy('checkedLowFibre')} style={styles.deliveryInner}>
                    <CheckmarkToggle checked={Boolean(checkedLowFibre)} onPress={() => this.toggleAllergy('checkedLowFibre')} />
                    <AppText textWeight="400" style={styles.textCheckmark}>Low Fibre Friendly</AppText>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.cancelLinkContainer}>
            <AppButton
              style={styles.buttonPatient}
              onPress={() => onPressOne(this.state)}
              width={buttonOneWidth}
              height={36}
              backgroundColor={Colors.buttonMain}
              disabled={false}>
              <AppText textWeight={`${(Platform.OS === 'ios') ? '600' : '500'}`} style={styles.buttonText}>{buttonOneLabel}</AppText>
            </AppButton>
          </View>
        </View>
      </Modal>
    );
  }
}

export default AllergiesModal;

