import Dexie, { Table } from 'dexie';

export interface User {
  id?: number;
  businessName: string;
  email: string;
  username: string;
  password: string;
}

export class AppDatabase extends Dexie {
  users!: Table<User>;

  constructor() {
    super('AppDatabase');
    this.version(1).stores({
      users: '++id, username, email'
    });
  }
}

export const db = new AppDatabase();