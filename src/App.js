import { QueryClient, QueryClientProvider } from 'react-query'
import ExampleWithFetch from './ExampleWithFetch';
import ExampleWithReactQuery from './ExampleWithReactQuery';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '50%' }}>
          <ExampleWithFetch />
        </div>
        <div style={{ width: '50%' }}>
          <ExampleWithReactQuery />
        </div>
      </div>
     </QueryClientProvider>
  );
}

export default App;
