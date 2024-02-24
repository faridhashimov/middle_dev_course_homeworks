import Dexie from 'dexie'

// const db = new Dexie('MyDb')

// db.version(1).stores({
//     notes: '++id, title, description, date',
// })

class MyAppDatabase extends Dexie {
    // Declare implicit table properties.
    // (just to inform Typescript. Instantiated by Dexie in stores() method)
    notes!: Dexie.Table<INotes, number>; // number = type of the primkey
    users!: Dexie.Table<IUsers, number>;
    //...other tables goes here...

    constructor () {
        super("MyDb");
        this.version(5).stores({
            notes: '++id, title, description, date',
            users: '++id, username, password',
            //...other tables goes here...
        });
    }
}

export interface INotes {
    id?: number,
    title: string,
    description: string,
    date: string
}
export interface IUsers {
    id?: number,
    username: string,
    password: string,
}


const db = new MyAppDatabase();

export default db
