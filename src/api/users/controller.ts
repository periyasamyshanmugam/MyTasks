import Resolver from './resolver';
import * as Boom from 'boom';
import Utils from '../../helper/utils';
import Logger from '../../helper/logger';
import * as Hapi from 'hapi';

export default class UserController {
    public resolver: any;
    constructor() {
        this.resolver = new Resolver();
    }

    public createUser = async (request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            if (!request.payload) {
                const error: any = {
                    success: false,
                    message: 'Authorization Failed',
                };
                return  h.response(Boom.unauthorized(error));
            }
            const entity = await this.resolver.createUser(request.payload);
            return h.response({
                statusCode: 200,
                data: entity,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return h.response(Boom.unauthorized(error));
            } else {
                return h.response(Boom.badImplementation(error));
            }
        }
    };
    public getUsers = async (request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<any> => {
        try {
            Logger.info(`GET - ${Utils.getUrl(request)}`);
            const entity = await this.resolver.getUsers();
            return h.response({
                statusCode: 200,
                data: entity,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return h.response(Boom.unauthorized(error));
            }
            return h.response(Boom.badImplementation(error));
        }
    };
    public taskCreate = async (request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            if (!request.payload) {
                const error: any = {
                    success: false,
                    message: 'Authorization Failed',
                };
                return  h.response(Boom.unauthorized(error));
            }
            const entity = await this.resolver.taskCreate(request.payload);
            return h.response({
                statusCode: 200,
                data: entity,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return h.response(Boom.unauthorized(error));
            } else {
                return h.response(Boom.badImplementation(error));
            }
        }
    };
    public updateTasks = async (request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            if (!request.payload) {
                const error: any = {
                    success: false,
                    message: 'Authorization Failed',
                };
                return  h.response(Boom.unauthorized(error));
            }
            const entity = await this.resolver.updateTasks(request.payload);
            return h.response({
                statusCode: 200,
                data: entity,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return h.response(Boom.unauthorized(error));
            } else {
                return h.response(Boom.badImplementation(error));
            }
        }
    };
    public getTasks = async (request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<any> => {
        try {
            Logger.info(`POST - ${Utils.getUrl(request)}`);
            if (!request.payload) {
                const error: any = {
                    success: false,
                    message: 'Authorization Failed',
                };
                return  h.response(Boom.unauthorized(error));
            }
            const entity = await this.resolver.getTasks(request.payload);
            console.log(entity, '$$$$$$$$$$$$$$');
            return h.response({
                statusCode: 200,
                data: entity,
            });
        } catch (error) {
            Logger.error(error);
            if (error.message === 'Authorization Failed') {
                return h.response(Boom.unauthorized(error));
            } else {
                return h.response(Boom.badImplementation(error));
            }
        }
    };
}
