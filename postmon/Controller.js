// const { get } = require("mongoose");
const { request, response } = require("express");

const UserModel = require("./model");


exports.createUser = async (request, response, next) => {
    if (
        !request.body?.firstName ||
        !request.body?.lastName
    ) {
        response.status(400).json({ message: `firstName or lastName are required.` })
    }
    console.log('asdasd')
    const createUser = await UserModel.create({ ...request.body });
    response
        .status(201)
        .json({ message: `New user is created.`, data: createUser });
};


exports.getUsers = async (request, response, next) => {
    try {
        const users = await UserModel.find();
        response.status(200).json({
            data: users,
        });
    } catch (error) {
        return response.status(400).json({ message: error, data: null })
    }
}

exports.getUser = async (request, response, next) => {
    const { id } = request.params;
    try {
        const user = await UserModel.findById(id);
        response.status(200).json({ message: true, data: user });
    } catch (error) {
        return response.status(400).json({ message: error, data: null })
    }
}

exports.updateUser = async (request, response, next) => {
    const { id } = request.params;
    try {
        const post = await UserModel.findByIdAndUpdate(id, { ...request.body });
        const res = await UserModel.findById(id)
        response.status(200).json({
            data: res,
        });
    } catch (error) {
        return response.status(400).json({ data: null })
    }
}


exports.DeleteUser = async (request, response, next) => {
    const id = request.params.id;
    // const res = await UserModel.findById(id)
    try {
        const post = await UserModel.findByIdAndDelete(id)
        response.status(200).json({ post });
    } catch (error) {
        return response.status(400).json({ data: null })
    }
}


