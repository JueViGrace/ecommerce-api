import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TrimMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    const query = req.query;
    if (this.isObj(query)) {
      req.query = this.trim(query);
    }
    next();
  }
  private isObj(obj: any): boolean {
    return typeof obj === 'object' && obj != null;
  }

  private trim(values: unknown) {
    if (typeof values === 'string') {
      return values.trim();
    }

    if (Array.isArray(values)) {
      values.forEach((element, index) => {
        values[index] = this.trim(element);
      });
      return values;
    }

    if (this.isObj(values)) {
      Object.keys(values).forEach((key) => {
        values[key] = this.trim(values[key]);
      });
      return values;
    }
    return values;
  }
}
