const app = require('./app');
const { SERVER_PORT } = require('./config/server');
require('./utils/handle-error');

app.listen(SERVER_PORT, () => {
  console.log('codehub is starting success on port ' + SERVER_PORT);
});
