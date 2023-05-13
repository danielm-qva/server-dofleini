import { Commentes } from "../../domain/comment.model";
import { RepositoryComment , ManagerRepoComment } from "../../domain/ManagerRepositoriComment";

export class SqlPostgresRepo implements RepositoryComment {
  async IcreateComment(comment: Commentes): Promise<Commentes | null> {
    return await ManagerRepoComment.save(comment);
  }
  async IdeleteComment(id: number): Promise<Commentes | null> {
     return await ManagerRepoComment.delete({id: id});
  }
}
