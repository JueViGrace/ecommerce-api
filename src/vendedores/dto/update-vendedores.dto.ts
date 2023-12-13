import { PartialType } from '@nestjs/mapped-types';
import { CreateVendedoresDto } from './create-vendedore.dto';

export class UpdateVendedoresDto extends PartialType(CreateVendedoresDto) {}
