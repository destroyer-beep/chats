const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const authRouter = require('./routers/authRouter');

app.use(express.json());
app.use('/', authRouter);

function startServer() {
    try {
        app.listen(PORT, () => console.log(`Server started! ${PORT}`));
    }   catch (e) {
        console.error('Error server started!', e);
    }
}

startServer();