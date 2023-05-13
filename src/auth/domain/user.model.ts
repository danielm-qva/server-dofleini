import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  BeforeInsert,
} from "typeorm";
import bycrypt from "bcrypt";
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsAlphanumeric,
  IsBoolean,
} from "class-validator";
@Entity()
export class User {
  constructor(
    username: string,
    fullname: string,
    password: string,
    isActive?: boolean
  ) {
    this.username = username;
    this.fullname = fullname;
    this.password = password;
    this.isActive = isActive ?? true;
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Unique("unique_Username", ["username"])
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  username: string;


  @Column()
  @Unique("unique_fullName", ["fullname"])
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @Column()
  @IsString()
  @IsAlphanumeric()
  @IsNotEmpty()
  password: string;

  @Column({ default: true })
  @IsBoolean()
  @IsNotEmpty()
  isActive!: boolean;

  @BeforeInsert()
  async save() {
    const salt = await bycrypt.genSalt(10);
    const hass_pasword = await bycrypt.hash(this.password, salt);
    this.password = hass_pasword;
  }
}
export default User;
