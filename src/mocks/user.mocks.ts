import { User } from '../models/user.interface';

const userList: User[] =[
    {
        name: 'Paul Halliday',
        company: 'PWH',
        location: 'Durham, UK',
        bio: 'He makes videos',
        avatar_url: 'http://i.imger.com/jav62p6.jpg',
        email: 'paul@paul.com'
    },
    {
        name: 'Lina Halliday',
        company: 'LWH',
        location: 'Durham, UK',
        bio: 'She makes videos',
        avatar_url: 'http://i.imger.com/TzWcihb.png',
        email: 'lina@lina.com'
    }
];

export const USER_LIST = userList;