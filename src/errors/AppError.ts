class AppError {
  constructor(public message: string, public status_code = 400) {
    this.message = message;
    this.status_code = status_code;
  }
}

export default AppError;
