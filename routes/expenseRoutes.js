const express = require("express");
const Expense = require("../models/Expense");

const router = express.Router();
// Get all expenses
router.get('/allexpenses', async (req, res) => {
    const expenses = await Expense.find();
    res.json(expenses);
  });
  
  // Add an expense
  router.post('/allexpenses', async (req, res) => {
    const { category, amount, name, date } = req.body;
    const newExpense = new Expense({ category, amount, name,date });
    await newExpense.save();
    res.json({ message: 'Expense added!' });
  });
  
  // Delete an expense
  router.delete('/:id', async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: 'Expense deleted!' });
  });
  
  router.patch('/:id/markAsDone', async (req, res) => {
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
    });

    module.exports = router;