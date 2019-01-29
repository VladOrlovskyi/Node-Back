let ControllerError = require("../errors/ControllerError");
let Messege = require("../models/Messege");
let controller = {};

controller.getById =  async (req, res, next) => {
    try {
        let id = req.params.id;
        let messege = await Messege.findById(id);
        res.status(200).json(messege);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

controller.findAll =  async (req, res, next) => {
    try {
        res.status(200).json(await Messege.find({}))
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

controller.create =  async (req, res, next) => {
    try {
        let messege = await Messege.create(req.body);
        res.status(201).json(messege);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

controller.update =  async (req, res, next) => {
    try {
        let messege = await Messege.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).json(messege);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

controller.delete =  async (req, res, next) => {
    try {
        let messege = await Messege.findByIdAndRemove(req.params.id);
        res.status(204).json(messege);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

module.exports = controller;