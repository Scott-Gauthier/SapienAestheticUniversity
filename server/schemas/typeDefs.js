const { gql } = require(`apollo-server-express`);

const typeDefs = gql`
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SavedBookInput): User
        removeBook(bookId: String!): User
    }

    type User {
        _id: ID
        username: String
        email: String
        content: [Content]
    }

    type Content {
        title: String
        description: String
        cost: Float
        creator: Creator
    }

    type Auth {
        token: ID!
        user: User
    }
    `;

module.exports = typeDefs;