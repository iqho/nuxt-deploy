const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the Nuxt 3 app's .output folder
app.use(express.static(path.join(__dirname, 'nuxt', '.output')));

// Handle Nuxt 3 routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'nuxt', '.output', 'server/index.mjs'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});