import * as Joi from 'joi';

export default {
    createUser: {
        payload: {
            name: Joi.string().required(),
        },
    },
    taskCreate: {
        payload: {
            user_id: Joi.number().required(),
        },
    },
    updateTasks: {
        payload: {
            user_id: Joi.number().required(),
            task_id: Joi.number().required(),
            title: Joi.string().optional(),
            details: Joi.string().optional(),
            date: Joi.date().optional(),
            bool: Joi.boolean().optional()
        },
    },
    getTasks: {
        payload: {
            user_id: Joi.number().required(),
        },
    },
};
