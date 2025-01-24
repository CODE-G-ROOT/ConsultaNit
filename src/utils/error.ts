export class ErrorsValidate extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ErrorsValidate';
  }
}
