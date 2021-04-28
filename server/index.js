const express = require('express');
const messages_controller = require('./controllers/messages_controller');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const messageURL = '/api/messages';
app.post(messageURL, messages_controller.create);
app.get(messageURL, messages_controller.read);
app.put(`${messageURL}/:id`, messages_controller.update);
app.delete(`${messageURL}/:id`, messages_controller.delete);

const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});