
import React from 'react';
import { Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './contexts/ThemeContext';
import { SidebarProvider } from './contexts/SidebarContext';
import { Toaster } from './components/ui/toaster';
import AdminLayout from './components/layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import NotFound from './pages/not-found';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SidebarProvider>
          <AdminLayout>
            <Switch>
              <Route path="/" component={Dashboard} />
              <Route path="/orders" component={Orders} />
              <Route component={NotFound} />
            </Switch>
          </AdminLayout>
          <Toaster />
        </SidebarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
