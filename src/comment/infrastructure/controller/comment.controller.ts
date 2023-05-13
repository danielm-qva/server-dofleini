import { UseCaseComment } from "../../application/UseCaseDomain";
import { Request, Response } from "express";
import { Commentes } from "../../domain/comment.model";
import { validate } from "class-validator";
export class ControllerComment {
  constructor(private readonly repos: UseCaseComment) {}

  public createComment = async (req: Request, res: Response) => {
    const { comment, idpost } = req.body;
    const newCoomment = new Commentes(comment , idpost);
    const error = await validate(newCoomment);
    if (error.length > 0) {
      return res.status(404).json(error);
    }
    try {
      this.repos
        .createComment(newCoomment)
        .then((ans) => {
          return res.status(204).json(ans);
        })
        .catch((error) => {
          return res.status(400).json(error);
        });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  public editComment = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      this.repos
        .deleteComment(parseInt(id))
        .then((ans) => {
          res.status(204).json(ans);
        })
        .catch((error) => {
          res.status(404).json(error);
        });
    } catch (error) {
      res.status(404).json(error);
    }
  };
}
