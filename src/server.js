const express = require('express');
const cors = require('cors');
require('dotenv').config();
const supabase = require('./supabase');
const whatsappRoutes = require('./routes/whatsapp');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/whatsapp', whatsappRoutes);

app.get('/', (req, res) => {
  res.json({ service: 'FixAm API', status: 'Online' });
});

app.get('/health/db', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('service_categories')
      .select('*');
    
    if (error) throw error;
    res.json({ categories: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 FixAm Server live on port ${PORT}`);
});
