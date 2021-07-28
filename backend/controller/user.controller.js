const {getAll, create} = require('../service/user.service');
module.exports = {
    getAll: async (req, res) => {
        const users = await getAll();
        res.json(users)
    },
    create: async (req, res) => {
        const user = req.body;
        console.log(user);
        const newVar = await create(user);
        res.json(newVar)
    }
}
