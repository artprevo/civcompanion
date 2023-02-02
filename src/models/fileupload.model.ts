export class FileUpload {
  key: string = ""
  name: string = ""
  url: string = ""
  file: File = new File(["foo"], "foo.txt", {
    type: "text/plain"})

  constructor(file: File) {
    this.file = file;
  }
}
