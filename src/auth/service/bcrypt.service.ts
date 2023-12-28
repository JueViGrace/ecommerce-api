import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class BcryptService {
  passwordEncrypt(password) {
    const salt = bcryptjs.genSaltSync(10);

    return bcryptjs.hashSync(password, salt);
  }

  comparePassword(password, passwordBD) {
    return bcryptjs.compareSync(password, passwordBD);
  }
}
