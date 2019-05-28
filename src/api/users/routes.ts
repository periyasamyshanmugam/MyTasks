import * as Hapi from 'hapi';

import validate from './validate';
import IRoute from '../../helper/route';
import Logger from '../../helper/logger';
import UserController from './controller';

export default class UserRoutes implements IRoute {
    public async register(server: Hapi.Server): Promise<any> {
        return new Promise(resolve => {
            Logger.info('UserRoutes - Start adding user routes.');
            const controller = new UserController();

            server.route([
                {
                    method: 'POST',
                    path: '/api/users/createUser',
                    options: {
                        handler: controller.createUser,
                        validate: validate.createUser,
                        description: 'Method that creates users',
                        tags: ['api', 'Users'],
                        auth: false,
                    },
                },
                {
                    method: 'get',
                    path: '/api/users',
                    options: {
                        handler: controller.getUsers,
                        description: 'Method that get users',
                        tags: ['api', 'Users'],
                        auth: false,
                    },
                },
                {
                    method: 'POST',
                    path: '/api/taskCreate',
                    options: {
                        handler: controller.taskCreate,
                        validate: validate.taskCreate,
                        description: 'Method that creates or update tasks',
                        tags: ['api', 'Users'],
                        auth: false,
                    },
                },
                {
                    method: 'POST',
                    path: '/api/updateTasks',
                    options: {
                        handler: controller.updateTasks,
                        validate: validate.updateTasks,
                        description: 'Method that creates or update tasks',
                        tags: ['api', 'Users'],
                        auth: false,
                    },
                },
                {
                    method: 'POST',
                    path: '/api/getTasks',
                    options: {
                        handler: controller.getTasks,
                        validate: validate.getTasks,
                        description: 'Method that creates or update tasks',
                        tags: ['api', 'Users'],
                        auth: false,
                    },
                },
            ]);

            Logger.info('UserRoutes - Finish adding user routes.');
            resolve();
        });
    }
}
