import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  idHeroe!: string; 
  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({id})=>this.idHeroe=id);
    // console.log(this.idHeroe);

    // this.heroesService.getHeroePorId(this.idHeroe)
    // .subscribe(res=>this.heroe=res);

    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.heroesService.getHeroePorId(id))
    )
    .subscribe(res=>this.heroe=res);
    
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
