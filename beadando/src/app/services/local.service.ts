import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<LocalDTO[]>('/api/locals');
  }

  getOne(id: number) {
    return this.http.get<LocalDTO>('/api/locals/' + id);
  }

  create(product: LocalDTO) {
    return this.http.post<LocalDTO>('/api/locals', product);
  }

  update(product: LocalDTO) {
    return this.http.put<LocalDTO>('/api/locals', product);
  }

  delete(id: number) {
    return this.http.delete('/api/locals/' + id);
  }
}
