import { Component, OnInit } from '@angular/core';
import { LocalDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { LocalService } from '../services/local.service';
import{Router} from'@angular/router';


@Component({
  selector: 'app-local-list',
  templateUrl: './local-list.component.html',
  styleUrls: ['./local-list.component.css']
})
export class LocalListComponent implements OnInit {

  locals: LocalDTO[]=[]

  constructor(
    private router: Router,
    private localService: LocalService,
    private toastrService: ToastrService) { }

    ngOnInit(): void{
      this.localService.getAll().subscribe({
        next: (locals) => {
          this.locals = locals;
          console.log(locals);
        },
        error: (err) => console.error(err)
      });
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
          console.error(err);
          this.toastrService.error('Hiba a törléskor.', 'Hiba');
        }
      });
    }
  /*
    getCategoryList(categories: CategoryDTO[]): string {
      return categories.map((category) => category.title).join(", ");
    }
  }*/


  activityUpdate(local: LocalDTO){
    if(local.activity){
    }
    else{
      
    }
  }

}
