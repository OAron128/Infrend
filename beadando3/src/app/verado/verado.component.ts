import { Component } from '@angular/core';
import { VeradoService } from '../services/verado.service';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UserDTO, VeradoDTO } from 'models';

@Component({
  selector: 'app-verado',
  templateUrl: './verado.component.html',
  styleUrls: ['./verado.component.css']
})
export class VeradoComponent {
  veradoForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    name: this.formBuilder.control(''),
    neme: this.formBuilder.control(''),
    allampolgarsag: this.formBuilder.control(''),
    szulhely: this.formBuilder.control(''),
    szulido: this.formBuilder.control(''),
    lakcim: this.formBuilder.control(''),
    tajszam: this.formBuilder.control(''),
    iranyitott: this.formBuilder.control(0),
    iranybetegnev: this.formBuilder.control(''),
    iranybetegTaj: this.formBuilder.control(''),
    alkalmassag: this.formBuilder.control(0),
    orvos: this.formBuilder.control(''),
    okozat: this.formBuilder.control('')
  });

  isNewVerado = true;


  users: UserDTO[] = [];

  constructor(
    private veradoService: VeradoService,
    private userService: UserService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params['id'];
  
      if (id) {
        this.isNewVerado = false;
        this.veradoService.getOne(id).subscribe({
          next: (verado) => {
            this.veradoForm.setValue(verado);
          },
          error: (err) => {
            console.error(err);
            this.toastrService.error('Hiba a termékadatok betöltésekor.','Hiba');
          }
        });
      }

    // this.categoryService.getAll().subscribe({
    //   next: (categories) => this.categories = categories,
    //   error: (err) => {
    //     console.log(err);
    //     this.toastrService.error('Hiba a kategóriák betöltésekor.', 'Hiba');
    //   }
    // });

    // this.userService.getAll().subscribe({
    //   next: (users) => this.users = users,
    //   error: (err) => {
    //     console.log(err);
    //     this.toastrService.error('Hiba a kategóriák betöltésekor.', 'Hiba');
    //   }
    // });

  }

  saveVerado() {
    const verado = this.veradoForm.value as VeradoDTO;

    if (this.isNewVerado) {
      this.veradoService.create(verado).subscribe({
        next: (insertedVerado) => {
          this.toastrService.success('Sikeres mentés, azonosítás: ' + insertedVerado.id, 'Siker');
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt a mentéskor.','Hiba');
        }
      })
    } else {

      this.veradoService.update(verado).subscribe({
        next: (updatedVerado) => {
          this.toastrService.success('Sikeres módosítás: ' + updatedVerado.id,  'Siker');
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt a módosításkor.','Hiba');
        }
      })
    }
  }

  compareObjects(obj1: any, obj2: any): boolean {
    return obj1 && obj2 && obj1.id == obj2.id;
  }
}

