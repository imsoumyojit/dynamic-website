const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/data', (req, res) => {
  const name = "Jit";
    const date = new Date().toDateString();
      res.json({ message: `Welcome, ${name}!`, date });
      });

      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        });