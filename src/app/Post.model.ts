export class Post{
   public name:string;
   public image:string;
   public content:string;
   public categoryId:number;

    constructor(name:string,image:string,content:string,categoryId:number){
        this.name=name;
        this.image=image;
        this.content=content;
        this.categoryId=categoryId;
    }
}