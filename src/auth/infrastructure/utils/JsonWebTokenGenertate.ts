import jwt from "jsonwebtoken";

export const JWT_SECRETE = "asdq312qwecc$$^&**@(W)@www3gbt";

export class JsonWebTokenGenerate {
  username: string;
  fullname: string;

  constructor(username: string, fullname: string) {
    this.username = username;
    this.fullname = fullname;
  }

  GenereateToken() {
    return jwt.sign(
      { username: this.username, fullname: this.fullname},
      JWT_SECRETE
    );
  }

  VerifiToken(token: string) {
    return jwt.verify(token, JWT_SECRETE);
  }

  DescodeJWT(toke: string) {
    return jwt.decode(toke);
  }
}
