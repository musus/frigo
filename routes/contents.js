var express = require('express');
var router = express.Router();

/* Get picture of frigo */
router.get('/', function(req, res, next) {
  res.json({
    name: '冷蔵庫',
    action: 'パカッ'
  });
});

/* Close door. */
router.delete('/', function(req, res, next) {
  res.json({
    name: '冷蔵庫',
    action: 'バタンッ'
  });
});

module.exports = router;
