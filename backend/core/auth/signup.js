import bcrypt from 'bcrypt';
import { initializeDatabase } from '../../lib/singlestoreClient.js';

export async function signUpUser(user, password) {
    const hashedPassword = await bcrypt.hash(password, 10); 
    const db = await initializeDatabase();  
    
    let users_table;

    try {
        users_table = db.table.use('users_table');
    }
    catch (error) {
        console.error('Table error:', error);
    }

    try {
        await users_table.insert([{username: user, password: hashedPassword}]);
    } catch (error) {
        console.error('Sign-up error:', error);
    }
}
