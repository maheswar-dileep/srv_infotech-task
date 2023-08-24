import { Schema, model } from 'mongoose';

const teamLeadSchema = new Schema(
  {
    _id: {
      type: Object,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const teamLeadModel = model('TeamLead', teamLeadSchema,);
export default teamLeadModel;
