const express = require('express');
const router = express.Router();

router.get('/webhook', (req, res) => {
  const verify_token = process.env.WEBHOOK_VERIFY_TOKEN;
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === verify_token) {
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});

router.post('/webhook', (req, res) => {
  let body = req.body;
  if (body.object) {
    console.log("Incoming WhatsApp message...");
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
