import { MenuItemModel } from "./menu-item.model";

export class MenuUsuarioModel {
    constructor(
        public indexMenu: number,
        public nome?: string,
        public imagem?:any,
        public generateImagem?:boolean,
        public menus?:MenuItemModel[]
    ) {
        
    }
}