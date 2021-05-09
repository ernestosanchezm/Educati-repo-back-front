import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { Role } from './role.model';

@Seeder({
    model: Role,
    unique: ['name'],
})
export class SeedRol implements OnSeederInit {
    run() {
        const data = [
            {
                name: 'Director',
                permissions: '[]'
            },
            {
                name: 'Educador',
                permissions: '[]'
            },
            {
                name: 'Alumno',
                permissions: '[]'
            },
            {
                name: 'Apoderado',
                permissions: '[]'
            },
        ];
        return data;
    }
}