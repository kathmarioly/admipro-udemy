import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

 progesoAzul: number = 20;
 progresoVerde: number = 30;

 tituloVerde: string = 'Progress Verde';

  constructor() { }

  ngOnInit() {
  }
}
