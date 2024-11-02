import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PaperProvider } from 'react-native-paper';
import Main from './src/Main';

// Apollo Clientの初期化
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </ApolloProvider>
  );
}

// React Nativeアプリケーションの登録
AppRegistry.registerComponent('MyApplication', () => App);