import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import MixpanelManager from '@utils/Analytics';
import { CustomHeaderBack, AppButton, CreditCardIcon, AppText } from '@components/common';
import { SafeAreaView, StackActions, NavigationActions } from 'react-navigation';
import { Colors } from '@constants/GlobalStyles';
import { formatPhoneNumber, formatPostalCode } from '@utils/Globals';
import styles from './PatientSeniorProtectionPurchaseSuccess.styles';
import images from '@assets/images';
import analytics from '@react-native-firebase/analytics';

const { width } = Dimensions.get('screen');

class PatientSeniorProtectionPurchaseSuccess extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerOrderId: props.navigation.getParam('customerOrderId', null),
      selectedCard: props.navigation.getParam('selectedCard', null),
      addressDisplayArr: props.navigation.getParam('addressDisplayArr', null)
    }

    this.mixpanel = MixpanelManager.sharedInstance.mixpanel;
  }

  async componentDidMount() {
    await analytics().logScreenView({
      screen_name: 'patient_senior_protection_purchase_success',
      screen_class: 'patient_senior_protection_purchase_success'
    });

    this.mixpanel.track('View Senior Protection Purchase Success');
  }

  onPressContinue = () => {
    const { navigation } = this.props;

    const resetAction = StackActions.reset({
      index: 0,
      key: undefined,
      actions: [NavigationActions.navigate({ routeName: 'PatientHome' })]
    });

    navigation.dispatch(resetAction);
  };

  render() {
    const { auth, cardData } = this.props;
    const { customerOrderId, addressDisplayArr, selectedCard } = this.state;
 
    const card = cardData.find(item => item.cardUuid === selectedCard);

    let now = moment().format('MMMM D, YYYY, h:mm A').toString().toUpperCase();

    return (
      <SafeAreaView style={styles.container}>
        <CustomHeaderBack title="Purchase Success" />
        <ScrollView style={styles.container}>
          <View style={styles.innerContainer}>
            <Image
              style={styles.imageOrdered}
              source={images.boomOrdered}
            />
            <View style={styles.textIconContainer}>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.addressIcon}
                  source={images.address}
                />
              </View>
              <View style={styles.textContainer}>
                <AppText textWeight="300" style={styles.textIconText}>{addressDisplayArr.name}</AppText>
                <AppText textWeight="300" style={styles.textIconText}>{addressDisplayArr.street}</AppText>
                <AppText textWeight="300" style={styles.textIconText}>{addressDisplayArr.city}, {addressDisplayArr.province}</AppText>
                <AppText textWeight="300" style={styles.textIconText}>{formatPostalCode(addressDisplayArr.postalCode)}</AppText>
                <AppText textWeight="300" style={[styles.textIconText, styles.textIconTextGapTop]}>{formatPhoneNumber(addressDisplayArr.phoneNumber)}</AppText>
              </View>
            </View>

            <View style={styles.rowContainerGroup}>
              <View style={styles.rowContainer2}>
                <AppText textWeight="600" style={styles.leftLabelText}>STATUS</AppText>
                <AppText textWeight="600" style={styles.rightLabelText}>OPEN</AppText>
              </View>
              <View style={styles.rowContainer2}>
                <AppText textWeight="600" style={styles.leftLabelText}>ORDER NUMBER</AppText>
                <AppText textWeight="600" style={styles.rightLabelText}>{customerOrderId}</AppText>
              </View>
              <View style={styles.rowContainer2}>
                <AppText textWeight="600" style={styles.leftLabelText}>ORDER TIME</AppText>
                <AppText textWeight="600" style={styles.rightLabelText}>{now}</AppText>
              </View>
              <View style={styles.rowContainer2}>
                <AppText textWeight="600" style={styles.leftLabelText}>PAYMENT</AppText>
                <CreditCardIcon icon={card.cardType} />
              </View>
            </View>

            <AppText textWeight="400" style={styles.informationText}>{`We've just sent you a confirmation via email.`}</AppText>
            <AppButton
              style={styles.buttonContinue}
              onPress={this.onPressContinue}
              width={148}
              height={40}
              backgroundColor={Colors.buttonMain}>
              <AppText textWeight="400" style={styles.buttonText}>Return Home</AppText>
            </AppButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth,
  cardData: state.profile.cardData
});

export default connect(
  mapStateToProps,
  null
)(PatientSeniorProtectionPurchaseSuccess);

