import { IsString, IsNotEmpty } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import User from "../../auth/domain/user.model";
import Commentes from "../../comment/domain/comment.model";
@Entity()
export class Post {
  constructor(
    title: string,
    description: string,
    photo: string,
    user: number,
    like?: number
  ) {
    this.description = description;
    this.photoPost = photo;
    this.userid = user;
    this.title = title;
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  photoPost: string;

  @CreateDateColumn()
  createAt?: Date;

  @ManyToOne(() => User, (user) => user.post)
  userid: number

  @OneToMany(() => Commentes, (comm) => comm.postid)
  commets!: Commentes[]
}

export default Post;