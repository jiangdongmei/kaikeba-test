const express = require('express');
const app = express();
app.get('/api/courses', (req, res) => {
    res.json(['web高级', 'web全栈']);
});
app.listen('3000');