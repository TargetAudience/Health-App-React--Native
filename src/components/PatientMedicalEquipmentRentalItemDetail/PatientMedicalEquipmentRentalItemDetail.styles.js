import { StyleSheet } from 'react-native';
import { Colors } from '@constants/GlobalStyles';
import { normalizeFont } from '@utils/Responsive';
import { hasNotch } from '@freakycoder/react-native-helpers';

const styles = StyleSheet.create({
  bullet: {
    width: 10,
    height: 10,
    borderWidth: 0,
    borderColor: 'red'
  },
  scrollView: {
    flex: 1,
    marginBottom: 60,
    backgroundColor: 'white'
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    height: hasNotch() ? 80 : 54,
    alignSelf: 'center'
  },
  buttonTextContainer: {
    flexDirection: 'row',
    marginHorizontal: 20
  },
  buttonTextContainer2: {
    marginLeft: -5,
    flexDirection: 'row',
    marginHorizontal: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  buttonTextContainer3: {
    marginLeft: 20,
    flexDirection: 'row',
    marginHorizontal: 20
  },
  buttonBuyText2: {
    marginTop: Platform.OS === 'ios' ? 2 : 0,
    color: '#fff'
  },
  buttonTextContainer4: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20
  },
  buttonBuyText4: {
    marginTop: Platform.OS === 'ios' ? 2 : 0,
    textAlign: 'right',
    color: '#fff'
  },
  buttonSizingB: {
    marginTop: 5
  },
  button: {
    marginTop: 3
  },
  buttonTop: {
    marginBottom: 5
  },
  buttonText: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 2 : 0,
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase'
  },
  alignRight: {
    position: 'absolute',
    right: 2,
    top: 0,
    textAlign: 'right'
  },
  alignRight2: {
    position: 'absolute',
    right: 0,
    textAlign: 'right'
  },
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground
  },
  imageThumbContainer: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageThumbContainerNoImage: {
    backgroundColor: '#efefef',
    height: 300,
    marginHorizontal: 20,
    marginVertical: 20
  },
  imageThumb: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemNameText: {
    marginTop: 5,
    fontSize: Platform.OS === 'ios' ? 16 : normalizeFont(16),
    color: '#1c1c1c',
    textAlign: 'center'
  },
  midButtonsContainer: {
    marginTop: 16,
    paddingVertical: 20,
    width: '100%',
    backgroundColor: '#f2f2f2',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionTextContainer: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column'
  }
});

export default styles;
