import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VeradoDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class VEradoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<VeradoDTO[]>('/api/veradok');
  }

  getOne(id: number) {
    return this.http.get<VeradoDTO>('/api/veradok/' + id);
  }

  create(product: VeradoDTO) {
    return this.http.post<VeradoDTO>('/api/veradok', product);
  }

  update(product: VeradoDTO) {
    return this.http.put<VeradoDTO>('/api/veradok', product);
  }

  delete(id: number) {
    return this.http.delete('/api/veradok/' + id);
  }
}
