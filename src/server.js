require('dotenv').config();
const express = require('express');
const cors = require('cors');
const supabase = require('./supabase');

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ 
    service: 'FixAm API', 
    status: 'running',
    version: '0.1.0'
  });
});

// DB test
app.get('/health/db', async (req, res) => {
  const { data, error } = await supabase
    .from('service_categories')
    .select('name, slug, icon')
    .eq('active', true);

  if (error) return res.status(500).json({ error: error.message });
  res.json({ status: 'ok', categories: data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔧 FixAm API running on port ${PORT}`);
});
