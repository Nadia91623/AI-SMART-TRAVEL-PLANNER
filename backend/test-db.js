const { Pool } = require('pg');

// Direct connection test (no .env file)
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'travel_planner',
    password: 'postgres123',  // Change this to your password
    port: 5432,
});

console.log('🔌 Attempting to connect to PostgreSQL...');

pool.connect((err, client, release) => {
    if (err) {
        console.error('❌ Connection error:', err.message);
        console.log('\n💡 Troubleshooting:');
        console.log('1. Is PostgreSQL running? Run: net start | findstr PostgreSQL');
        console.log('2. Is the password correct? Check your pgAdmin password');
        console.log('3. Does database "travel_planner" exist? Check in pgAdmin');
        console.log('4. Try these passwords: postgres, postgres123, admin, or your Windows password');
        return;
    }
    
    console.log('✅ Connected to PostgreSQL successfully!');
    console.log('📊 Database:', 'travel_planner');
    
    // Check if users table exists
    client.query(`
        SELECT EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = 'users'
        ) as exists;
    `, (err, result) => {
        if (err) {
            console.error('❌ Error checking tables:', err.message);
        } else if (result.rows[0].exists) {
            console.log('✅ Users table exists!');
        } else {
            console.log('⚠️  Users table does not exist. Run the CREATE TABLE SQL.');
        }
        
        release();
        pool.end();
    });
});