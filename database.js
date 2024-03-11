import pkg from 'pg';
const { Pool } = pkg;
const client = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tch',
    password: '12345',
    port: 5432,
});
export const executeQuery = async (sqlQuery) => {
    try {
        const response = await client.query(sqlQuery);
        return response;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error; // Rethrow the error for the caller to handle
    }
}

// export const executeQuery = async (sqlQuery) => {
//     const response = client.query(sqlQuery)
//     if (response)
//         return response;
//     return "Error";
// }
// client.query('select * from users', async (err, res) => {
//     if (!err) {
//         console.log(res.rows)
//     }
//     console.error(err)
// });

// client.query('insert into users (name,phone,email,age) values ('shruti','1546232656','shruti@gmail.com','19')', async (err, res) => {
//     if (!err) {
//         console.log(res.rows)
//     }
//     console.error(err)
// });