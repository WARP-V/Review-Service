const api = require('./api.js');

const PORT = 3004;

api.listen(PORT, () => console.log(`listening on port: ${PORT}`));
