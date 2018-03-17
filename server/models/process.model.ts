import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";

const processSchema = new mongoose.Schema(
	{
		User: { type: String, default: "User1" },
		Factory: String,
		Model: String,
		Year: String,
		Policy: {}
	},
	{ timestamps: true }
);

const Process = mongoose.model("Process", processSchema);

export { Process };
