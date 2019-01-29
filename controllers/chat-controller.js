let ControllerError = require("../errors/ControllerError");
let Chat = require("../models/Chat");
let controller = {};

controller.getById =  async (req, res, next) => {
    try {
        let id = req.params.id;
        let chat = await Chat.findById(id);
        req.session.chat = chat;
        res.status(200).json(chat);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

controller.findAll =  async (req, res, next) => {
    try {
        res.status(200).json(await Chat.find({}));
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

controller.create =  async (req, res, next) => {
    try {
        let chat = await Chat.create(req.body);
        res.status(200).json(chat);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

controller.update =  async (req, res, next) => {
    try {
        let chat = await Chat.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).json(chat);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

controller.delete =  async (req, res, next) => {
    try {
        let chat = await Chat.findByIdAndRemove(req.params.id);
        res.status(204).json(chat);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

module.exports = controller;