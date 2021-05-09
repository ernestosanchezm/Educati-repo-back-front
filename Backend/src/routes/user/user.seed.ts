import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { User } from './user.model';
const md5 = require('md5');

@Seeder({
    model: User,
    unique: ['name'],
})
export class SeedUser implements OnSeederInit {
    run() {
        const data = [
            {
                firstName: 'Director',
                lastName: 'General',
                email: 'director@educati.com',
                userType: '1',
                password: md5('secret')
            }
        ];
        return data;
    }
}