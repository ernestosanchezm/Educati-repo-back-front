import { OnSeederInit } from 'nestjs-sequelize-seeder';
export declare class SeedRol implements OnSeederInit {
    run(): {
        name: string;
        permissions: string;
    }[];
}
