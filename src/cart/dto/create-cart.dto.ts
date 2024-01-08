import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCartDto {
  @IsString()
  id: string;

  @IsNotEmpty()
  createdAt: Date;

  status?: number;
}
