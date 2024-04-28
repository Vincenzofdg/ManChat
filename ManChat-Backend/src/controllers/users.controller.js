const { users: service } = require('../services');
const { users: validation } = require('../validations')

module.exports = {
    getAll: async (_req, res, _next) => {
        const result = await service.getAll();
        return res.status(200).json(result);
    },
    add: async (req, res, _next) => {
        const data = await validation.toAdd(req.body);
        const user = await service.add(data);
        res.status(201).json(user);
    }
};