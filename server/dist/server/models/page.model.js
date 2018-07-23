"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const pageSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    grid: { type: String },
    owner: { type: String }
}, { timestamps: true });
/**
 * pre save page middleware.
 */
// pageSchema.pre("update", function save(next) {
// 	debugger;
// 	const page: any = this;
// });
mongoose.model("Page", pageSchema);
//# sourceMappingURL=page.model.js.map