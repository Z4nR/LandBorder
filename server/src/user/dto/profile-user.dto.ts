import { IsString } from 'class-validator';

export class ProfileDto {
  @IsString()
  fullname: string;
}
