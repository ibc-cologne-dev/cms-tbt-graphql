import { NODE_ENV } from './config/env';
import { loadServer } from './setup/load-server';

const init = async () => {
  console.info('NODE ENV', NODE_ENV);
  await loadServer();
}

init();
