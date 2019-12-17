import * as https from 'https';
import * as fs from 'fs';
import { resolve } from 'path';
import app from './app';

const PORT = 7500;
const httpsOptions = {
  key: fs.readFileSync(resolve('lib/config/key.pem')),
  cert: fs.readFileSync(resolve('lib/config/cert.pem')),
};

https.createServer(httpsOptions, app).listen(PORT, () => console.log('Express server listening on port ' + PORT));