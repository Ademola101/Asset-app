import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/Navigation';
import {
  QueryClient,
  QueryClientProvider

} from '@tanstack/react-query';

const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <StatusBar style="auto" />
      </QueryClientProvider>

    </>
  );
}