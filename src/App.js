import { QueryClient, QueryClientProvider } from 'react-query'
import ExampleWithFetch from './ExampleWithFetch';
import ExampleWithReactQuery from './ExampleWithReactQuery';
import { ReactQueryDevtools } from 'react-query/devtools'

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
      <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
  );
}

export default App;
