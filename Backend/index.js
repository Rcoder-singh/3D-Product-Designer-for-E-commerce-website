const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors({origin : ['http://localhost:3000']}));

app.use(express.static('./models'));
app.listen(5000, () => {
    console.log('Server started on port 5000');
})

