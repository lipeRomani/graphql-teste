const { getAllUsers, createUser } = require('../db/mockDB');
const { makeExecutableSchema } = require('graphql-tools');

const typeDef = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers(limit: Int!): [User]!
    }

    type Mutation {
        createUser(name: String!, email: String!): User
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;

const resolvers = {
    Query: {
        allUsers: (_, { limit }) => getAllUsers(limit)
    },
    Mutation: {
        createUser: (_, user) => {
            return createUser(user);
        }
    },
}

module.exports.schema = makeExecutableSchema({
    typeDefs: typeDef,
    resolvers: resolvers
});
