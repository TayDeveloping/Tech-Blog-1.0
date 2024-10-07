const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user || !(await user.checkPassword(req.body.password))) {
      return res.status(400).json({ message: 'Incorrect username or password' });
    }
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.loggedIn = true;
      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const user = await User.create(req.body);
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.loggedIn = true;
      res.json({ user, message: 'Account created!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
