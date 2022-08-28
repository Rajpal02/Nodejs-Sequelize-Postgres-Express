import './config';
import Database from './database';
import environment from './config/environment';
import dbConfig from './config/database';

(async () => {
  try {
    // Connect to the database
    const db = new Database(environment.nodeEnv, dbConfig);
    await db.connect();
  } catch (e) {
    console.error('Something went wrong:\n', e.stack);
  }
})();
