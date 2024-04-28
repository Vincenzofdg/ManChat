const models = require('../database/models');

module.exports = {
    getAll: async () => {
        const users = await models.users.findAll({
            attributes: {exclude: ['createdAt', 'updatedAt']}
        });
        return users;
    },
    add: async (content) => {
        const model = await models.users.create(content);
        const newUser = model.toJSON();
        const { createdAt, updatedAt, ...user } = newUser;
        return user;
    }
}