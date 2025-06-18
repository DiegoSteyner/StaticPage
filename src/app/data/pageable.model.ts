import { PageSortModel } from "./page-sort.model";

export class PageableModel
{
    constructor(public offset?:number,
                public pageNumber?:number,
                public pageSize?:number,
                public sort?:PageSortModel,
                public paged?:number,
                public unpaged?:number,
            )
{

}
}