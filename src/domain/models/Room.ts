import { Child } from "./Child";

export interface Room{
    id:string;
    adultsCount?: number;
    children?: Child[];
}