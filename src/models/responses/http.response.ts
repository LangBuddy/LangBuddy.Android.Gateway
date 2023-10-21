export class HttpResponse<T = void> {
  constructor(
    public success: boolean,
    public message: string,
    public data?: T,
  ) {}
}
