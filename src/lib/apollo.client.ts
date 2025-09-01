import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://your-graphql-endpoint.com/graphql' }),
    cache: new InMemoryCache(),
});
