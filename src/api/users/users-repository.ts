import { users } from '../../model/users';
import crypto = require('crypto');
import querystring = require('querystring');
import http = require('https');
import { resolve } from 'path';
import { default as Logger, default as logger } from '../../helper/logger';
import sequelize from '../../sequelize-connection';
import { tasks } from '../../model/tasks';
import { sub_tasks } from '../../model/sub_tasks';

/* tslint:disable:max-line-length*/
export default class Repository {
    constructor() {}

    public createUser(payload: any): Promise<any[]> {
        return new Promise((resolver: any, rejecter: any) => {
            users
                .create({
                    name: payload.name
                })
                .then(
                    (onsuccess: any) => {
                        resolver({
                            success: true,
                            message: 'User Created',
                        });
                    }).catch((catcherror: any) => {
                        Logger.error(catcherror);
                        rejecter({
                            success: true,
                            message: 'Could not set',
                        });
                    });
        });
    }

    public getUsers(): Promise<any[]> {
        return new Promise((resolver: any, rejecter: any) => {
            users
                .findAll()
                .then(
                    (res: any) => {
                        res = JSON.parse(JSON.stringify(res));
                        resolver({
                            success: true,
                            data: res
                        });
                    }).catch((catcherror: any) => {
                        Logger.error(catcherror);
                        rejecter({
                            success: true,
                            message: 'Could not get',
                        });
                    });
        });
    }
    public taskCreate(payload: any): Promise<any[]> {
        return new Promise((resolver: any, rejecter: any) => {
            tasks
                .create({
                    user_id: payload.user_id
                })
                .then(
                    (onsuccess: any) => {
                        tasks.findAll({
                            where: {
                                user_id: payload.user_id
                            },
                            include: [
                                {
                                    model: sub_tasks,
                                    required: true
                                }
                            ]
                        }).then(
                            (res: any) => {
                                res = JSON.parse(JSON.stringify(res));
                                resolver({
                                    success: true,
                                    message: 'Task Created',
                                    data: res
                                });
                            });
                    }).catch((catcherror: any) => {
                        Logger.error(catcherror);
                        rejecter({
                            success: true,
                            message: 'Could not set',
                        });
                    });
        });
    }
    public updateTasks(payload: any): Promise<any[]> {
        return new Promise((resolver: any, rejecter: any) => {
            const pay: any = {
                user_id: payload.user_id,
                task_id: payload.task_id,
                name: payload.title,
                details: payload.details,
                schedule_date: payload.date,
                isCompleted: payload.bool,
            };
            tasks
                .update({
                    where: {
                        user_id: payload.user_id,
                        task_id: payload.task_id
                    }
                }, pay)
                .then(
                    (onsuccess: any) => {
                        tasks.findAll({
                            where: {
                                user_id: payload.user_id
                            },
                            include: [
                                {
                                    model: sub_tasks,
                                    required: true
                                }
                            ]
                        }).then(
                            (res: any) => {
                                res = JSON.parse(JSON.stringify(res));
                                resolver({
                                    success: true,
                                    message: 'Task Created',
                                    data: res
                                });
                            });
                    }).catch((catcherror: any) => {
                        Logger.error(catcherror);
                        rejecter({
                            success: true,
                            message: 'Could not set',
                        });
                    });
        });
    }
    public getTasks(payload: any): Promise<any[]> {
        return new Promise((resolver: any, rejecter: any) => {
            tasks.findAll({
                where: {
                    user_id: payload.user_id
                },
                include: [
                    {
                        model: sub_tasks,
                        required: true
                    }
                ]
            }).then(
                (res: any) => {
                    res = JSON.parse(JSON.stringify(res));
                    resolver({
                        success: true,
                        data: res
                    });
                }).catch((catcherror: any) => {
                    Logger.error(catcherror);
                    rejecter({
                        success: true,
                        message: 'Could not get',
                    });
                });
        });
    }
}
