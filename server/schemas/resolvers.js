const { User, Content, Order } = require(`../models`);
const { signToken } = require(`../utils/auth`);
const { AuthenticationError } = require(`apollo-server-express`);
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc'); 

const resolvers = {
    Query: {
        User: async(parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.orderedContent',
                    populate: 'title'
                });
                return user
            }
            throw new AuthenticationError('Not logged in');
        },

        Content: async(parent, { title }) => {
            const params = {};
            if (title) {
                params.title = title;
            }
            return await Content.findById(params).populate('title');
        },
        
        AllContent: async(parent, args, context) => {
            // const params = {};
            // if (title) {
            //     params.title = title;
            // }
            return await Content.find();
        },

        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.orderedContent',
                    populate: 'title'
                });
                return user.orders.id(_id);
            }
            throw new AuthenticationError(`The user is not logged in`);
        },
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ orderedContent: args.content });
            const line_items = [];
      
            const { orderedContent } = await order.populate('orderedContent');
      
            for (let i = 0; i < orderedContent.length; i++) {
                const content = await stripe.orderedContent.create({
                    name: orderedContent[i].name,
                    description: orderedContent[i].description,
                    images: [`${url}/images/${orderedContent[i].image}`]
                });
      
                const price = await stripe.prices.create({
                    content: content.id,
                    unit_amount: [i].price * 100,
                    currency: 'usd',
                });
      
                line_items.push({
                    price: price.id,
                    quantity: 1
                });
            }
      
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
            });
      
            return { session: session.id };
        }           
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            console.log(token)
            return { user, token };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne( { email });
            if (!user) {
                throw new AuthenticationError(`Email or password was incorrect, please try again`)
            }
            const correctPass = await user.isCorrectPassword(password);
            if(!correctPass) {
                throw new AuthenticationError(`Email or password was incorrect, please try again`)
            }
            const token = signToken(user);
            return { token, user };
        },
        
    // addContent: async (parent, args , context) => {
    //     if (context.content) {
    //         const updatedContent = await Content.findOneAndUpdate(
    //             { _id: context.user_id },
    //             { $push: { savedContent: args.input }},
    //             { new: true }
    //         )
    //         return updatedContent;
    //     }
    },
        
    saveContent: async (parent, args , context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user_id },
                { $push: { studentcontent: args._id }},
                { new: true }
            )
            return updatedUser;
        }
    },
        
    // removeContent: async (parent, args, context) => {
    //     if (context.content) {
    //         const updatedUser = await User.findOneAndUpdate(
    //             { _id: context.user_id },
    //             { $ToSet: { studentcontent: args.content}},
    //             { new: true }                    
    //         );
    //         return updatedContent;
    //     }
    //     throw new AuthenticationError(`The user must log in`)
    //     }
    //}
}

module.exports = resolvers;