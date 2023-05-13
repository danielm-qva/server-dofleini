import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  Entity,
} from "typeorm";
import Post from "../../post/domain/post.model";

@Entity()
export class Commentes {
  constructor(comment: string, postid: number) {
    this.comment = comment;
    this.postid = postid;
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  comment: string;

  @CreateDateColumn()
  createAt?: Date;

  @ManyToOne(() => Post, (post) => post.commets)
  postid: number;
}

export default Commentes;
