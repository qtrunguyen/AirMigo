import bcrypt from 'bcrypt';
import { initializeDatabase } from '../../lib/singlestoreClient.js';

export async function logInUser(username, password) {
    const db = await initializeDatabase(); // Connect to the DB

    let users_table;

    try {
        users_table = db.table.use('users_table');
    }
    catch (error) {
        console.error('Table error:', error);
    }

    try {
        const values = await users_table.find({
            select: ['username', 'password'],
            where: { username: username }, 
            limit: 1,
        });

        if (values.length === 0) {
            throw new Error('User not found');
        }

        const user = values[0]; 

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        return { message: 'Login successful' };
        
    } catch (error) {
        console.error('Login error:', error);
        throw new Error('Error during login');
    }
}
