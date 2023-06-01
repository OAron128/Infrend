import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalDTO } from 'models';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalService } from '../services/local.service';


@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  localForm = this.formBuilder.group({
      id: this.formBuilder.control(0),
      intezmeny: this.formBuilder.control(''),
      cim: this.formBuilder.control('')
  });

  isNewLocal = true;

  constructor(
    private toastrService: ToastrService,
    private localService: LocalService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if(id) {
      this.isNewLocal = false;
      this.localService.getOne(id).subscribe({
        next: (local) => {
          this.localForm.setValue(local);
        },
        error: (err) => {
          console.log(err);
          this.toastrService.error('Hiba a gépadatok betöltésekor,','Hiba');
        }
      })
    }
  }

  // saveLocal() {
  //   const local = this.localForm.value as LocalDTO;

  //   if(this.localService) {
  //     this.localService.create(local).subscribe({
  //       next: (insertedLocal) => {
  //         this.toastrService.success('Sikeres mentés, azonosítás: ' + insertedLocal.id, 'Siker');
  //       },
  //       error: (err) => {
  //         console.error(err);
  //         this.toastrService.error('Hiba történt a mentéskor.', 'Hiba');
  //       }
  //     })
  //   } else {
  //     this.localService.update(local).subscribe({
  //       next: (updateLocal) => {
  //         this.toastrService.success('Sikeres módosítás: ' + updateLocal.id, 'Siker');
  //       },
  //       error: (err: any) => {
  //         console.error(err);
  //         this.toastrService.error('Hiba történt a módosításkor.', 'Hiba');
  //       }
  //     })
  //   }
  // }

  checkActiveLocal(){

  }
}