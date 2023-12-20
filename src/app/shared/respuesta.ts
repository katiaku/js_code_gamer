import { Content } from "../models/content";

export class Respuesta {

    constructor(public error: boolean,
        public code: number,
        public message: string,
        public data: Content[]){

}
}
