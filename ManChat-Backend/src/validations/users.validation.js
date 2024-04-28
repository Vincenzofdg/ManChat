const { users: schema } = require('./schemas');

module.exports = {
    toAdd: async (content) => {
        const result = await schema.create.validateAsync(content);
        return result;
    }
}