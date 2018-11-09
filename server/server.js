const api = require('./api.js');
require('./database/newSeed.js');

const PORT = 3004;

api.listen(PORT, () => console.log(`listening on port: ${PORT}`));


