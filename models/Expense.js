const mongoose = require("mongoose");


const ExpenseSchema = new mongoose.Schema({
    name: String,
    category: String,
    amount: Number,
    date: Date,
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,ref:'User'
    },
    status: { type: String, default: 'todo' },
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    approvals: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Expense", ExpenseSchema);
