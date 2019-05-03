import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
 
const app = express();

const typeDefs = gql`
    type Query {
        hello: String
    }

    schema {
        query: Query
    }
`;

const resolvers = {
    Query: {
        hello(root) {
            return 'world';
        }
    }
};

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    playground: {
        endpoint: 'http://localhost:4000/graphql',
        settings: {
            'editor.theme': 'light'
        }
    }
});

server.applyMiddleware({app: app});
// var schema = makeExecutableSchema({ typeDefs, resolvers });
// server.use('/graphql', graphqlExpress());
// server.use('/graphiql', graphiqlExpress({endpointURL: "/graphql"}));

app.listen(4000, () => {
    console.log('Express app listening on port 4000.');
});
