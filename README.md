# React Native Music Player App

This is a simple music player app built with React Native that lets you search for an artist by name and display their songs. The app uses the iTunes Search API to fetch the song data.

## Getting Started

To run the app, you'll need to have the following software installed:

- Node.js
- npm or Yarn
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/OsamaAbbasi/simple-music-player-test.git
```

2. Install the dependencies:

```
npm install
```

### Running on iOS

To run the app on iOS, you can use the following commands:

```
cd ios
pod install
cd ..
npm run ios
```

This will install the required dependencies for the iOS project and build and run the app on the default iOS simulator. If you want to specify a different simulator, you can use the `--simulator` flag followed by the name of the simulator. For example, to run the app on an iPhone X simulator, you can use the following command:

```
npm run ios --simulator="iPhone X"
```

### Running on Android

To run the app on Android, you can use the following command:

```
npm run android
```

This will build and run the app on the selected Android device or emulator.

## Testing

To run the test suite, use the following command:

```
npm run test
```

This will run all the tests in the `__tests__` directory.

## Conclusion

That's it! You should now be able to run the app on both iOS and Android devices, as well as test the app using the included test suite. If you have any issues or questions, please don't hesitate to reach out to me.
