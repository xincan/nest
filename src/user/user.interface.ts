import {User} from './user.entity';

export interface IUserService {

    save(user: User): Promise<User>;

    update(user: User): number;

    delete(id: number): Promise<User>;

    findPage(page): Promise<User[]>;

    findById(id: number): Promise<User>;

}
