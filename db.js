require('dotenv').config()
const { Router } = require("express")

const { Client } = require('pg')

const connectionString = process.env.DATABASE_URL



const getuser = async () => { 
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
        rejectUnauthorized: false
        }
        })
        
    await client.connect(); 
    const res = await client.query('SELECT * from usuarios')
    await client.end()
    return res.rows
}

const userCreate = async (username, email, contraseña) => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
        rejectUnauthorized: false
        }
        })

    await client.connect()
    const res = await client.query(`INSERT INTO usuarios (username, email, contraseña, fecha) VALUES ('${username}', '${email}', '${contraseña}', NOW());`);
    await client.end()
    return res.rows
}


const eliminarTarea = async (id) => {
    try {
        const consulta = {
            text: `DELETE FROM usuarios WHERE id = $1`,
            values: [id]
        };
      
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
            rejectUnauthorized: false
            }
            })
        await client.connect()
        const res = await client.query(consulta);
        await client.end()
        return res.rows

    }
    catch (e) {
        return e;
    }

}







module.exports = { getuser, userCreate, eliminarTarea }