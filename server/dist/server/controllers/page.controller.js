"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose_1 = require("mongoose");
const socket_controller_1 = require("./socket.controller");
const bson_1 = require("bson");
const GridModel = mongoose_1.model("Grid");
const Model = mongoose_1.model("Page");
const router = express.Router();
exports.router = router;
router.get("/", function (req, res) {
    Model.find({ owner: req.query.userId })
        .then((Result) => res.json({ Result }))
        .catch((err) => res.sendStatus(500).json(err));
});
router.get("/:name", function (req, res) {
    Model.findOne({ name: req.params.name, owner: req.query.userId }).then((Result) => res.json({ Result }));
});
router.post("/", function (req, res) {
    if (!req.body._id)
        req.body._id = new bson_1.ObjectId();
    req.body.owner = req.query.userId;
    // TODO: use async
    if (!req.body.grids || req.body.grid == "") {
        const grid = new GridModel({
            name: req.body.name,
            owner: req.query.userId
        });
        grid.save();
        req.body.grid = grid._id.toString();
    }
    // TODO: set user
    Model.findOneAndUpdate({ _id: req.body._id, owner: req.query.userId }, req.body, { upsert: true, new: true })
        .then((Result) => {
        // TODO:
        socket_controller_1.SocketMiddleware.server.dispatchActionToClientByUsername("[PAGE][DB] UPSERT", [Result], req.query.userId);
        res.send({ Result });
    })
        .catch((err) => {
        res.sendStatus(500).json(err);
    });
});
router.delete("/:_id", function (req, res) {
    Model.findByIdAndRemove(req.params._id)
        .then((Result) => res.json({ Result }))
        .catch((err) => res.sendStatus(500).json(err));
});
//# sourceMappingURL=page.controller.js.map