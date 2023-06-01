import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VeradoDTO } from 'models';
import { VeradoService } from '../services/verado.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verado-list',
  templateUrl: './verado-list.component.html',
  styleUrls: ['./verado-list.component.css']
})
export class VeradoListComponent {
  veradok: VeradoDTO[] = [];

  constructor(
    private router: Router, //angular része kell, nem az express
    private veradoService: VeradoService,
    private toastrService: ToastrService
    ) {}

  ngOnInit(): void {
    this.veradoService.getAll().subscribe({
      next: (veradok) => {
        this.veradok = veradok;
        console.log(veradok);
      },
      error: (err) => console.error(err)
    })
  }

  editVerado(verado: VeradoDTO) {
    this.router.navigate([ '/verado', verado.id ]);
  }

  deleteVerado(verado: VeradoDTO) {
    this.veradoService.delete(verado.id).subscribe({
      next: () => {
        const index = this.veradok.indexOf(verado);
        if (index > -1) {
          this.veradok.splice(index, 1);
        }
      },
      error: (err) => {
        this.toastrService.error('Hiba a törléskor', 'Hiba')
      }
    });
  }

  // getCategoryList(categories: CategoryDTO[]): string {
  //   return categories.map((category) => category.title).join(", ");
  // }
}