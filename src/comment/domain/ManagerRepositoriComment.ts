import AppDataSource from "../../db/data-source";
import { Commentes } from "./comment.model";

export interface RepositoryComment {
  IcreateComment(comment: Commentes): Promise<Commentes | null>;
  IdeleteComment(id:number): Promise<Commentes | null>;
}

export const ManagerRepoComment = AppDataSource.getRepository(Commentes);

export default ManagerRepoComment;
