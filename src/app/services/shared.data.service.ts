import { Injectable } from '@angular/core';
import { AcaoPageEnum } from '../data/enums/acao-page.enum';


@Injectable({providedIn: 'root',})
export class SharedDataService {

    private acao:AcaoPageEnum | undefined;

    constructor(){

    }

    public setAcao(acao:AcaoPageEnum)
    {
        this.acao = acao;
    }

    public getAcao():AcaoPageEnum | undefined
    {
        return(this.acao);
    }
}