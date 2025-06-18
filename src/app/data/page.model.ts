import { PageSortModel } from "./page-sort.model";
import { PageableModel } from "./pageable.model";

export class PageModel<T>
{
    constructor(public content?:T, 
                public empty?:boolean,
                public first?:boolean,
                public last?:boolean,
                public number?:number,
                public numberOfElements?:number,
                public pageable?:PageableModel,
                public sort?:PageSortModel,
                public size?:number,
                public totalElements?:number,
                public totalPages?:number,
            )
    {

    }
}