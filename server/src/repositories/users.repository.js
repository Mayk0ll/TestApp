import UserModel from "../models/user.model.js";

const createUsersQuery = async (name, email, password) => {
    return await UserModel.create({ name, email, password });
};

const getUsersByEmailQuery = async (email) => {
    return await UserModel.findOne( { email } );
}

export { createUsersQuery, getUsersByEmailQuery };