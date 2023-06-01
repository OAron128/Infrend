import { Component } from '@angular/core';
import { LocalService } from '../services/local.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { LocalDTO, UserDTO } from 'models';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent {
  localForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    intezmeny: this.formBuilder.control(''),
    cim: this.formBuilder.control(''),
    activity: this.formBuilder.control(0)
  });

  isNewLocal = true;


  users: UserDTO[] = [];

  constructor(
    private localService: LocalService,
    // private categoryService: CategoryService,
    private userService: UserService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.isNewLocal = false;
      this.localService.getOne(id).subscribe({
        next: (local) => {
          this.localForm.setValue(local);
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

  saveLocal() {
    const local = this.localForm.value as LocalDTO;

    if (this.isNewLocal) {
      this.localService.create(local).subscribe({
        next: (insertedLocal) => {
          this.toastrService.success('Sikeres mentés, azonosítás: ' + insertedLocal.id, 'Siker');
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt a mentéskor.','Hiba');
        }
      })
    } else {

      this.localService.update(local).subscribe({
        next: (updatedLocal) => {
          this.toastrService.success('Sikeres módosítás: ' + updatedLocal.id,  'Siker');
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

