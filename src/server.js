const express = require('express');
const cors = require('cors');
require('dotenv').config();
const supabase = require('./supabase');
const whatsappRoutes = require('./routes/whatsapp');

const app = express();

// This line is critical: it MUST use the variable Railway provides
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('FixAm Backend is Active and Online!');
});

app.use('/whatsapp', whatsappRoutes);

app.get('/health/db', async (req, res) => {
  try {
    const { data, error } = await supabase.from('service_categories').select('*');
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Bind to 0.0.0.0 so the network can find the process
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server actually listening on port ${PORT}`);
});
