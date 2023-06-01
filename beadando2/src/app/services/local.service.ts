import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LocalDTO } from "models";


@Injectable({
    providedIn: 'root'
})

export class LocalService{

    constructor(private http: HttpClient){}

    getAll(){
        return this.http.get<LocalDTO[]>('/api/locals');
    }

    getOne(id: number){
        return this.http.get<LocalDTO>('/api/locals/'+id);
    }

    create(local: LocalDTO){
        return this.http.post<LocalDTO>('/api/locals/',local);
    }

    update(local: LocalDTO){
        return this.http.put<LocalDTO>('/api/locals',local);
    }

    delete(id: number){
        return this.http.delete('/api/locals/'+id);
    }

}