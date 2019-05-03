export class Photo{
   
    constructor(src: string,likes: number, description: string,comment: any[] ){
        this.src = src;
        this.likes = likes;
        this.description = description;
        this.comment = comment;
      
    }
    public  src: any;
            likes: number;
            description: string;
            comment: any[];
         

}