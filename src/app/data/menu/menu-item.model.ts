import { ModelFunction } from "@angular/core";

export class MenuItemModel {
    constructor(
        public indexMenu: number,
        public ativo?: boolean,
        public separador?: boolean,
        public selecionado?: boolean,
        public nome?: string,
        public icone?: string,
        public sendTo?: string,
        public submenus?:MenuItemModel[],
        public callBack?:Function
    ) {
        
    }
}