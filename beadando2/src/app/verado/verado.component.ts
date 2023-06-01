import { Component, OnInit } from '@angular/core';
import { VeradoService } from '../services/verado.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { VeradoDTO } from 'models';

@Component({
  selector: 'app-verado',
  templateUrl: './verado.component.html',
  styleUrls: ['./verado.component.css']
})
export class VeradoComponent implements OnInit {
  veradoForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    name: this.formBuilder.control(''),
    neme: this.formBuilder.control(''),
    allampolgarsag: this.formBuilder.control(''),
    szulhely: this.formBuilder.control(''),
    szulido: this.formBuilder.control(''),
    tajszam: this.formBuilder.control(''),
    iranyitott: this.formBuilder.control(''), //kategoria iranyitott vagy altalanos iranyitott: IranyitottDTO[];
    ertekeles: this.formBuilder.control('') //itt is be van épitve egy pár dolog     ertekeles: ErtekelesDTO[];
  });

  isNewVerado =true;

  constructor(
    private toastrService: ToastrService,
    private veradoService: VeradoService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  // ngOnInit(): void {
  //   const id = this.activatedRoute.snapshot.params['id'];

  //   if (id) {
  //     this.isNewVerado = false;
  //     this.veradoService.getOne(id).subscribe({
  //       next: (verado) => {
  //         this.veradoForm.setValue(verado);
  //       },
  //       error: (err) => {
  //         console.log(err);
  //         this.toastrService.error('Hiba a partneradatok betöltésekor,', 'Hiba');
  //       }
  //     })
  //   }
  // }
  // saveVerado() {
  //   const verado = this.veradoForm.value as VeradoDTO;

  //   if (this.isNewVerado) {
  //     this.veradoService.create(verado).subscribe({
  //       next: (insertedVerado) => {
  //         this.toastrService.success('Sikeres mentés, azonosítás: ' + insertedVerado.id, 'Siker');
  //       },
  //       error: (err) => {
  //         console.error(err);
  //         this.toastrService.error('Hiba történt a mentéskor.', 'Hiba');
  //       }
  //     })
  //   } else {
  //     this.veradoService.update(verado).subscribe({
  //       next: (updateVerado) => {
  //         this.toastrService.success('Sikeres módosítás: ' + updateVerado.id, 'Siker');
  //       },
  //       error: (err) => {
  //         console.error(err);
  //         this.toastrService.error('Hiba történt a módosításkor.', 'Hiba');
  //       }
  //     })
  //   }
  // }

  checkTaj(){

  }

}