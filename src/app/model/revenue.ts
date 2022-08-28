export interface Revenue {
    id: number;
    date:Date;
    amount:number
    user:{
        id:number;
        username:string;
    };
    quiz:{
        id:number;
        title:string;
        price:number
    }
}