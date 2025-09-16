import { Schema, models, model, Types } from "mongoose";

interface IQuestion {
  title: string;
  content: string;
  tags: Types.ObjectId[]; // Array of ObjectId references to Tag model
  views: number;
  answers: number;
  upvotes: number;
  downvotes: number;
  authour: Types.ObjectId;
}

const QuestionSchema = new Schema<IQuestion>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: true }],
    views: { type: Number, default: 0 },
    answers: { type: Number, default: 0 },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    authour: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);
const Question =
  models?.Question || model<IQuestion>("Question", QuestionSchema);
export default Question;
