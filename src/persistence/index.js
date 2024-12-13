
// Initialize the database
export const initSQLiteDB = async(db) => {
    try {
        await db.execAsync(
            `CREATE TABLE IF NOT EXISTS activeSession (
                localId TEXT PRIMARY KEY NOT NULL,
                email TEXT NOT NULL,
                token TEXT NOT NULL
        );`);
        console.log("Database initialized");
    } catch (error) {
        console.log("Error initializing DB", error);
    }
};

// // Insert a session
export const insertSession = ({ db, email, localId, token }) => {
    db.runAsync(`INSERT INTO activeSession (localId, email, token) VALUES (?, ?, ?);`,
    [localId, email, token]);
    const response = {localId, email, token};
    return response;
};

// // Get all sessions
export const getSession = async(db) => {
        const session = await db.getFirstAsync('SELECT * FROM activeSession')
        return session;
}

// // Truncate the session table
export const truncateSessionTable = (db) => {
    
    db.runAsync(`DELETE FROM activeSession`);
    return true
};