import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Routes from './routes';
import { BrowserRouter as Router } from "react-router-dom";
import Layout from './template/Layout';

const apiQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 3000,
    },
  },
});
function App() {
  return (
    <Router>
        <QueryClientProvider client={apiQueryClient}>
          <Layout>
            <Routes />
          </Layout>
        </QueryClientProvider>
    </Router>
  );
}

export default App;
