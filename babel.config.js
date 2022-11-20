module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        alias: {
          '@react-native-community/masked-view': '@react-native-masked-view/masked-view'
        }
      }
    ]
  ]
};
