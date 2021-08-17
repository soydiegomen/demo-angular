import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result-counter',
  templateUrl: './result-counter.component.html',
  styleUrls: ['./result-counter.component.sass']
})
export class ResultCounterComponent implements OnInit {
  count$: Observable<number> = new Observable<number>();

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
  }

}
