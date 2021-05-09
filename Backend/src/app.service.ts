import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'ESTO ES UNA PRUEBA PARA COMPROBAR EL DESPLIEGUE!';
  }
}
