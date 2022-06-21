import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nwtwq80u9c01xph4dsayan/master',
    cache: new InMemoryCache()
})