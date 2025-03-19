import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,    // Cache data for 5 minutes
      gcTime: 1000 * 60 * 10,   // Keep unused cache for 10 minutes
      refetchOnWindowFocus: false, // Prevent refetching on window focus
    },
  },
});

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </React.StrictMode>,
  );
}
