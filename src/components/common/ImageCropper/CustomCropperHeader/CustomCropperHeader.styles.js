import { StyleSheet, StatusBar } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#191919',
    height: 46,
    borderColor: '#333333',
    borderBottomWidth: 0.5
  },
  doneText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 17,
    fontWeight: '500',
    textAlign: 'right',
    marginRight: 15
  },
  titleText: {
    textAlignVertical: 'top',
    color: '#fff',
    fontSize: 16,
    lineHeight: 17,
    fontWeight: '600',
    flex: 1/3,
    textAlign: 'center',
  },
  rotateIcon: {
    color: 'white',
    fontSize: 26
  },
  touchableDone: {
    flex: 1/3
  },
  touchableClose: {
    flex: 1/3
  },
  iconClose: {
    marginLeft: 15,
    width: 17,
    height: 17
  }
})

export default styles;
