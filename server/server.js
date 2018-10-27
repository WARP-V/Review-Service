const api = require('./api.js');

const PORT = 3000;

api.listen(PORT, () => console.log(`listening on port: ${PORT}`));
