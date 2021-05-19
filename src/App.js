import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import ExampleWithFetch from './ExampleWithFetch';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <ExampleWithFetch />
     </QueryClientProvider>
  );
}

export default App;
