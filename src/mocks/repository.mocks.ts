import { Repository } from '../models/Repository.interface';
import { USER_LIST } from './user.mocks';

const repositoryList: Repository[] = [
    {
        name: 'I3 Camera',
        description: 'Repository chows Ionic 3 Camera usage',
        owner: USER_LIST[0]
    },
    {
        name: 'I3 Geolocation',
        description: 'Repository chows Ionic 3 Geolocation usage',
        owner: USER_LIST[0]
    },
    {
        name: 'I3 SMS',
        description: 'Repository chows Ionic 3 SMS usage',
        owner: USER_LIST[1]
    },
    {
        name: 'I3 Touch',
        description: 'Repository chows Ionic 3 Touch usage',
        owner: USER_LIST[1]
    }
];

export const REPOSITORY_LIST = repositoryList;