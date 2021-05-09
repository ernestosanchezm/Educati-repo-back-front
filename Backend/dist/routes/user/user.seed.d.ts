import { OnSeederInit } from 'nestjs-sequelize-seeder';
export declare class SeedUser implements OnSeederInit {
    run(): {
        firstName: string;
        lastName: string;
        email: string;
        userType: string;
        password: any;
    }[];
}
