import { Component, OnInit } from '@angular/core';
import { ErtekelesDTO, IranyitottDTO, VeradoDTO } from 'models';
import { VeradoService } from '../services/verado.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verado-list',
  templateUrl: './verado-list.component.html',
  styleUrls: ['./verado-list.component.css']
})
export class VeradoListComponent implements OnInit {
  veradok: VeradoDTO[]=[];
  selectedVerado: string='';
  iranyitott: IranyitottDTO[]=[];
  ertekeles: ErtekelesDTO[]=[];

  constructor(
    private veradoService: VeradoService,
    private router: Router,
    private toastrService: ToastrService
  ){}

  ngOnInit(): void {
    this.veradoService.getAll().subscribe({
      next: (veradok) => {
        this.veradok = veradok;
        console.log(veradok);
      },
      error: (err) => console.log(err)
    });
  }

  editPartner(verado: VeradoDTO) {
    this.router.navigate(['/verado', verado.id]);
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
        this.toastrService.error('Hiba a törléskor', 'Hiba');
      }
    });
  }

  // get selectedVeradoIranyitott(): IranyitottDTO[] {
  //   const verado = this.veradok.find((p) => p.iranyitott === this.selectedVerado);
  //   if (verado) {
  //     return verado.iranyitott;
  //   }
  //   return [];
  // }


  // get selectedVeradoErtekeles(): ErtekelesDTO[] {
  //   const verado = this.veradok.find((p) => p.ertekeles === this.selectedVerado);
  //   if (verado) {
  //     return verado.ertekeles;
  //   }
  //   return [];
  // }

}
