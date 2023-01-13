const { Router } = require('express');

const router = new Router();

router.get('/api', (req, res) => {
  res.send('api OK');
});

module.exports = router;
