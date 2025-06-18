export class PageRequestModel
{
    constructor(
        public pageNumber?:number,
        public pageSize?:number,
        public sort?:string|string[],
        public direction?:string,
    ){}

}