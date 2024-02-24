import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator"

export class SignUpDto {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  @Matches(/(?=.*\d)(?=.*[A-Z])/, { message: 'Password must contain at least one digit and one uppercase letter.' })
  password: string

  @IsNotEmpty()
  @IsString()
  fullName: string

  @IsNotEmpty()
  @IsString()
  phoneNumber: string
}