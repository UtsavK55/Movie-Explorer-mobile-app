module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@config': './src/config',
          '@helpers': './src/helpers',
          '@network': './src/network',
          '@theme': './src/theme',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@navigation': './src/navigation',
          '@storage': './src/storage',
        },
      },
    ],
    [
      'module:react-native-dotenv', // Add this line for environment variables
      {
        moduleName: '@env', // This is the module name you'll use to import
        path: '.env', // Path to your .env file
      },
    ],
  ],
};
