interface IMail {
  from: string,
  to: string,
  subject: string,
  text: string
}

export class Mail {
  private _from;
  private _to;
  private _subject;
  private _text

  constructor({ from, to, subject, text }: IMail) {
    this._from = from
    this._to = to
    this._subject = subject
    this._text = text
  }
  
  get from() {
    return this._from
  }

  get to() {
    return this._to
  }

  get subject() {
    return this._subject
  }

  get test() {
    return this._text
  }
} 