import { Schema } from "mongoose";
import mongoose from "mongoose";

//MongoDB schema
const urlSchema = new Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitedHistory: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const URLModel = mongoose.model("urlModels", urlSchema);
export default URLModel;
