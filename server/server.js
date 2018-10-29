const api = require('./api.js');

const PORT = 3001;

api.listen(PORT, () => console.log(`listening on port: ${PORT}`));
