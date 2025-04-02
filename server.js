const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then((res)=>
    console.log("Mongo is running")
).catch(err=>console.log('MongoDB connection error',err));


app.use("/api/users",require("./routes/userRoutes"));
app.use("/api/expenses",require("./routes/expenseRoutes"));






app.listen(process.env.PORT, () => console.log('Server running on port 5000'));





/*const expenseSchema = new mongoose.Schema({
    name: String,
    category: String,
    amount: Number,
    date: Date,
    status: { type: String, default: 'todo' }
});
const userSchema= new mongoose.Schema({
    userName:String,
    password:String,
    mobileN:Number
});



const Expense = mongoose.model('Expense', expenseSchema);
const User=mongoose.model('User',userSchema);

// Get all expenses
app.get('/api/expenses', async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

// Add an expense
app.post('/api/expenses', async (req, res) => {
  const { category, amount, name, date } = req.body;
  const newExpense = new Expense({ category, amount, name,date });
  await newExpense.save();
  res.json({ message: 'Expense added!' });
});

// Delete an expense
app.delete('/api/expenses/:id', async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: 'Expense deleted!' });
});

app.patch('/api/expenses/:id/markAsDone', async (req, res) => {
    try {
      const updatedExpense = await Expense.findByIdAndUpdate(
        req.params.id,
        { status: 'done' },
        { new: true }
      );
      if (!updatedExpense) {
        return res.status(404).json({ message: 'Expense not found' });
      }
      const expenses = await Expense.find();
      res.json(expenses);
    } catch (error) {
      res.status(500).json({ error: 'Error updating expense' });
    }
  });*/


