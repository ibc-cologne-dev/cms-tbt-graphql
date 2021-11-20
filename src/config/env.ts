import { resolve } from 'path';
import { config } from 'dotenv';

config({ path: resolve(__dirname, '../../.env') });

export const NODE_ENV = process.env.NODE_ENV;

export const PORT = process.env.PORT || 3001;

export const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY
export const FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN
export const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID
export const FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET
export const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_PROJECT_ID
export const FIREBASE_APP_ID = process.env.FIREBASE_APP_ID