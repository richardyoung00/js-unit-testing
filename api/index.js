import express from 'express';

export const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'tobi' });
});