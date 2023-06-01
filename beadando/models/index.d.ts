// export interface CategoryDTO {
//     id: number;
//     title: string;
// }

export interface UserDTO{
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

export interface LocalDTO{
    id: number;
    intezmeny:string;
    cim: string;
    activity: number;
}

export interface VeradoDTO {
    id: number;
    name: string;
    neme: string;
    allampolgarsag: string;
    szulhely: string;
    szulido: string;
    lakcim: string;
    tajszam: string;
    iranyitott: number;
    iranybetegnev: string;
    iranybetegTaj: string;
    alkalmassag: number;
    orvos: string;
    okozat: string;
    // categories: CategoryDTO[];
    // seller: UserDTO;
}
