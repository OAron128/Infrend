export interface LocalDTO{
    id: number;
    intezmeny:string;
    cim: string;
    activity: boolean;
}


export interface VeradoDTO{
    id: number;
    name: string;
    neme: string;
    allampolgarsag: string;
    szulhely: string;
    szulido: string;
    lakcim: string;
    tajszam: string;
    iranyitott: IranyitottDTO[];
    ertekeles: ErtekelesDTO[];
}

export interface ErtekelesDTO{
    alkalmassag: boolean;
    orvos: string;
    okozat: string;
}

export interface IranyitottDTO{
    iranybetegnev: string;
    iranybetegTaj: string;
}