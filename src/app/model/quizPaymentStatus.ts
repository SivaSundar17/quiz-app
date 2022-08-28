import { Quiz } from "./quiz";
import { User } from "./user";

export interface QuizPaymentStatus {
    id: number;
    paymentStatus: boolean;
    user:{
        id:number
    };
    quiz:{
        id:number;
    }
}
