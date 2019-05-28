import Repository from './users-repository';
export default class Resolver {
    public repository: any;
    constructor() {
        this.repository = new Repository();
    }
    public async createUser(data: any): Promise<any> {
        return await this.repository.createUser(data);
    }
    public async getUsers(): Promise<any> {
        return await this.repository.getUsers();
    }
    public async taskCreate(data: any): Promise<any> {
        return await this.repository.taskCreate(data);
    }
    public async updateTasks(data: any): Promise<any> {
        return await this.repository.updateTasks(data);
    }
    public async getTasks(data: any): Promise<any> {
        return await this.repository.getTasks(data);
    }
}
