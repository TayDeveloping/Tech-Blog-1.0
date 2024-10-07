const router = require('express').Router();

router.get('/example', (req, res) => {
  res.send('This is an example API route.');
});

module.exports = router;
