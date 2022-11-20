import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from '@constants/GlobalStyles';
import { normalizeFont } from '@utils/Responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1, 
    backgroundColor: Colors.backgroundColor
  },
  gap: {
    marginTop: 12
  },
  miniSpacer: {
    height: 8
  },
  buttonContainer: {
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 15
  },
  buttonText: {
    marginTop: 2,
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600'
  },
  buttonTextDisabled: {
    marginTop: 2,
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.buttonDisabledText
  },
  entryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  textBold: {
    color: '#000'
  },
  summaryContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 18
  },
  summaryBottomLine: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textCostSummary: {
    fontSize: Platform.OS === 'ios' ? 14.5 : normalizeFont(14.5),
    paddingBottom: 12,
    textAlign: 'left'
  },
  deliveryContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 18
  },
  deliveryBottomLine: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textDelivery: {
    fontSize: 14.5,
    paddingBottom: 12,
    textAlign: 'left',
    fontWeight: '600'
  },
  textDelivery2: {
    fontSize: 14.5,
    paddingBottom: 12,
    lineHeight: 19,
    textAlign: 'left',
    fontWeight: '400'
  },
  deliveryInner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5
  },
  textCheckmark: {
    fontSize: 14,
    marginLeft: 12,
    lineHeight: 19,
    textAlign: 'left',
    fontWeight: '500'
  },
  cardTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    flex: 1
  },
  cardsContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 18
  },
  textCardText: {
    lineHeight: 19,
    paddingLeft: 10,
    fontSize: 13.5,
    color: '#1c1c1c',
    fontWeight: '500'
  },
  cardTypeWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  invitesContainer: {
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  invitesInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center'
  },
  summaryContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 18
  },
  summaryBottomLine: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textCostSummary: {
    fontSize: 14.5,
    paddingBottom: 12,
    textAlign: 'left',
    fontWeight: '600'
  },
  buttonSignIn: {
    backgroundColor: Colors.buttonBlue,
    borderRadius: 4,
    marginTop: 2,
    width: '100%',
    height: 40
  },
  addCardButtonContainer: {
    marginTop: 12
  },
  buttonTextAdd: {
    marginTop: 1,
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600'
  },
});

export default styles;
