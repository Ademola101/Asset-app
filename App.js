import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/Navigation';
import { Text } from 'react-native';
import {
  QueryClient,
  QueryClientProvider

} from '@tanstack/react-query';

const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
        <StatusBar style="auto" />
      </QueryClientProvider>

    </>
  );
}