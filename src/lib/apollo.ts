import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://my-subgraph-endpoint.com',
  cache: new InMemoryCache(),
});

export default client;