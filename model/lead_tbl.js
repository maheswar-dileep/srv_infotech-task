import { Schema, Types, model } from 'mongoose';

const leadTblSchema = new Schema(
  {
    general: {
      general_agree_check: Number,
    },
    crm: {
      category: [String],
      country: Number,
    },
    lead_status: {
      type: Number,
      requried: true,
    },
    lead_type: { type: Number, requried: true },

    lead_ip: {
      type: String,
      requried: true,
    },
    lead_ref_form_id: {
      type: Types.ObjectId,
    },
    lead_reg_id: {
      type: Types.ObjectId,
    },
    addedby: {
      type: Types.ObjectId,
    },
    date: {
      type: String,
      requried: true,
    },
    time: {
      type: String,
      requried: true,
    },
    createMonth: {
      type: String,
      requried: true,
    },
    createYear: {
      type: String,
      requried: true,
    },
    followup: Array,
    lead_unique_id: {
      type: String,
      requried: true,
    },
    lead_ref_unique_id: {
      type: String,
      requried: true,
    },
    createdAt: {
      type: String,
      requried: true,
    },
    updatedAt: {
      type: String,
      requried: true,
    },
    __v: {
      type: Number,
      requried: true,
    },
  },
  {
    timestamps: false,
    collection: 'leads',
  }
);

const leadTblModel = model('LeadTable', leadTblSchema);
export default leadTblModel;
