"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose_1 = require("mongoose");
const socket_controller_1 = require("./socket.controller");
const bson_1 = require("bson");
const GridModel = mongoose_1.model("Grid");
const GridItemModel = mongoose_1.model("GridItem");
const router = express.Router();
exports.router = router;
const getGridWithItems = function (_id, userId) {
    return GridModel.findById(_id).populate({
        path: "items",
        match: { $or: [{ owner: userId }, { access: "public" }] },
        options: { limit: 22 }
    });
};
router.get("/", function (req, res) {
    GridModel.find().then((Result) => res.json({ Result }));
});
router.get("/:id", function (req, res) {
    getGridWithItems(req.params.id, req.query.userId).then((Result) => res.json({ Result }));
});
router.post("/", function (req, res) {
    GridItemModel.find({ owner: req.query.userId }).then((items) => items.forEach((item) => item.remove())).then(() => {
        Promise.all(req.body.items.map((item) => {
            if (!item._id)
                item._id = new bson_1.ObjectId();
            item.owner = req.query.userId;
            return GridItemModel.findByIdAndUpdate(item._id, item, { upsert: true, new: true });
        })).then((items) => {
            const gridData = {
                type: req.body.type,
                name: req.body.name,
                oid: req.body.oid,
                // owner: req.user.id,
                config: req.body.config,
                $addToSet: {
                    items: items.map((item) => item._id.toString())
                }
            };
            if (!req.body._id)
                gridData._id = new bson_1.ObjectId();
            GridModel.findOneAndUpdate({ _id: req.body._id }, gridData, { upsert: true }).then((grid) => {
                getGridWithItems(grid._id, req.query.userId)
                    .then((Result) => {
                    socket_controller_1.SocketMiddleware.server.dispatchActionToClients("[GRID][DB] UPSERT", [Result]);
                    res.send({ Result });
                })
                    .catch((err) => {
                    debugger;
                });
            });
        });
    });
});
router.delete("/:id", function (req, res) {
    GridModel.findByIdAndRemove(req.params.id);
});
//# sourceMappingURL=grid.controller.js.map