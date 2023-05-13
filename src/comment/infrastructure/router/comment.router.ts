import { Router } from "express";
import { isAutorizado } from "../../../auth/infrastructure/middleware/authHandle";
import { SqlPostgresRepo } from "../../../comment/infrastructure/repository/SqlRepoComment";
import { UseCaseComment } from "../../application/UseCaseDomain";
import { ControllerComment } from "../controller/comment.controller";

const sqlRepoComment = new SqlPostgresRepo();
const useCaseComment = new UseCaseComment(sqlRepoComment);
const controllerComment = new ControllerComment(useCaseComment);

const routerComment = Router();

routerComment.post(
  "/comment/:id",
  isAutorizado,
  controllerComment.createComment
);
routerComment.delete(
  "/comment/:id",
  isAutorizado,
  controllerComment.editComment
);

export default routerComment;
