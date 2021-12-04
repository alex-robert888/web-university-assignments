export class Recipe {
  id: number = -1
  name: string = "";
  type: string = "";
  author: string = "";
  content: string ="";

  constructor(name: string, type: string, author: string, content: string) {
    this.name = name
    this.type = type
    this.author = author
    this.content = content
  }
}