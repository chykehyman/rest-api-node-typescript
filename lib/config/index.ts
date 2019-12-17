import * as mongoose from 'mongoose';

interface IMongoDbOptions {
  useNewUrlParser: boolean;
  useCreateIndex: boolean;
  useUnifiedTopology: boolean;
}

export default class MongoDBConfig {
  private dbOptions: IMongoDbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
  private db = mongoose.connection;

  constructor() {
    (<any>mongoose).Promise = global.Promise;
    this.connectMongodb('mongodb://localhost:27017/CRMdb', this.dbOptions);
  }

  private connectMongodb(url: string, options: IMongoDbOptions) {
    mongoose.connect(
      url,
      options
    );
  }

  public testDbConnection(): void {
    this.db
    .once('open', () => console.info({ message: 'Connected to the database' }));
    this.db
    .on('error', (error: any) => console.error({ message: 'MongoDB connection error:', error }));
  }
}