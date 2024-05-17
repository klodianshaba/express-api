import {PostUser, ResponseUser} from "../models/user";
export const users: ResponseUser[] = [
    {id: 1, name: 'Shaba'},
    {id: 2, name: 'Klodian'},
];
export const addUser = (user: PostUser): ResponseUser | undefined => {
    const userData: ResponseUser = {
        id: new Date().getMilliseconds(),
        name: user.name
    };
    users.push(userData);
    return getUser(userData.id);
}
export const getUser = (userId: number): ResponseUser | undefined => {
    return users.find(user => user.id == userId);
}
export const getUsers = (): ResponseUser[] => {
    return users;
}