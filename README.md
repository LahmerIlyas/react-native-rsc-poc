# React Native with Server Components - Proof of Concept

## Context

In recent months, Expo has demonstrated its ongoing development of a universal router with support for React Server Components. Inspired by this, I wanted to explore the concept and understand what it would take to use Server Components in a React Native environment.

### Challenges

During my investigation, I discovered that React Native, in its current state, cannot natively support React Server Components due to several limitations:
1. **Lack of Stream Support**: React Server Components rely on streams to stream UI as it gets rendered, but React Native does not support streams.
2. **Fetch API Limitations**: The built-in `fetch` function in React Native does not support streaming mode.
3. **Missing APIs**: React Native lacks built-in support for `TextEncoder` and `TextDecoder`, which are used in server-side rendering.
4. **No Built-in Remote Module Fetching**: React Native lacks a feature to fetch JavaScript modules over the network dynamically.

### Overcoming Limitations with Polyfills

While React Native itself doesn’t support these features, the community has provided several polyfills that fill these gaps:
- [text-encoding-polyfill](https://www.npmjs.com/package/text-encoding-polyfill)
- [web-streams-polyfill](https://www.npmjs.com/package/web-streams-polyfill)
- [react-native-fetch-api](https://www.npmjs.com/package/react-native-fetch-api)

With these polyfills, React Native can meet the runtime requirements necessary to use Server Components.

### Bundling and Client Components

At present, Metro, the default bundler for React Native, does not support bundling client components in a Server Components setup. To work around this, I used **Webpack**. However, there was an issue: client components bundled by Webpack could not be loaded into React Native because the Webpack runtime wasn’t compatible.

To resolve this, I implemented a custom Webpack runtime specifically for React Native that allows loading remote client components bundled with Webpack.

## Running Locally

### Prerequisites
- Make sure your [React Native development environment](https://reactnative.dev/docs/environment-setup) is properly set up.

### Clone the Repository
```bash
git clone https://github.com/LahmerIlyas/react-native-rsc-poc
cd react-native-rsc-poc
```

### Install Dependecies
```bash
yarn install

```

### Start the Server
In a separate terminal tab or window, run the server:

```bash
cd apps/server
npm run watch
```

### Run the React Native App
Ensure that your environment is configured for iOS development or adjust the command for your target platform (e.g., Android).

In another terminal tab, start the React Native app:

```bash
cd apps/app
yarn ios
```



