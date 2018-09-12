"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.gridItemSchema = new mongoose.Schema({
    x: { type: Number },
    y: { type: Number },
    cols: { type: Number },
    rows: { type: Number },
    owner: { type: String },
    access: { type: String, enum: ["public", "private"], default: "private" },
    type: { type: String },
    valid: { type: Boolean },
    config: Object
}, { timestamps: true });
/**
 * pre save gridItem middleware.
 */
exports.gridItemSchema.pre("save", function save(next) {
    const gridItem = this;
    next();
});
mongoose.model("GridItem", exports.gridItemSchema);
//# sourceMappingURL=grid-item.model.js.map