import { RepositoryComment } from "../domain/ManagerRepositoriComment";
import { Commentes } from "../domain/comment.model";
export class UseCaseComment {
  constructor(private readonly repoComment: RepositoryComment) {}
  createComment = async (comment: Commentes) => {
    return await this.repoComment.IcreateComment(comment);
  };
  deleteComment = async (id: number) => {
    return await this.repoComment.IdeleteComment(id);
  };
}
