import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/crmRoutes';
import MongoDBConfig from './config';
import loggerMiddleware from './middleware/loggerMiddleware';

class App {
  public app: express.Application;
  private routePrv: Routes = new Routes();
  private dbConfig: MongoDBConfig = new MongoDBConfig();

  constructor() {
    this.app = express();
    this.runMiddleWares();
    this.dbConfig.testDbConnection();
    this.routePrv.routes(this.app);
  }

  private runMiddleWares(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(loggerMiddleware);
  }
}

export default new App().app;