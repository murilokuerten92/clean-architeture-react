export class UnexpectedError extends Error {
  constructor() {
    super("Some of error happened. Try again later");
    this.name = "UnexpectedError";
  }
}
