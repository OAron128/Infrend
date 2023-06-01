import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDTO } from 'models';
import { LocalService } from '../services/local.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-local-list',
  templateUrl: './local-list.component.html',
  styleUrls: ['./local-list.component.css']
})
export class LocalListComponent {
  locals: LocalDTO[] = [];

  constructor(
    private router: Router, //angular része kell, nem az express
    private localService: LocalService,
    private toastrService: ToastrService
    ) {}

  ngOnInit(): void {
    this.localService.getAll().subscribe({
      next: (locals) => {
        this.locals = locals;
        console.log(locals);
      },
      error: (err) => console.error(err)
    })
  }

  editLocal(local: LocalDTO) {
    this.router.navigate([ '/local', local.id ]);
  }

  deleteLocal(local: LocalDTO) {
    this.localService.delete(local.id).subscribe({
      next: () => {
        const index = this.locals.indexOf(local);
        if (index > -1) {
          this.locals.splice(index, 1);
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

