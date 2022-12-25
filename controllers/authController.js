const db = require('../database/db');

class authController {
    async registration(req, res) {
        try {
            const {name, login, password} = req.body;
            const userCheckedLogin = await db.query(`SELECT * FROM users where login = $1`, [login]);
            const userCheckedName = await db.query(`SELECT * FROM users where name = $1`, [name]);
            if(userCheckedLogin.rows.length > 0) {
                res.status(400).end('Пользователь с таким логином уже существует!');
            } else if(userCheckedName.rows.length > 0) {
                res.status(400).end('Пользователь с таким именем уже существует!');
            } else {
                const newUser = await db.query(`INSERT INTO users (name, login, password) values ($1, $2, $3) RETURNING *`, [name, login, password]);
                res.json(newUser.rows[0]);
            }
        } catch (e) {
            console.error('Error registration!', e);
        }
    }

    async authorization(req, res) {
        try {
            res.send('authorization')
        } catch (e) {
            console.error('Error authorization!', e);
        }
    }
}

module.exports = new authController();