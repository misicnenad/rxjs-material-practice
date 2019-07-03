import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'rmp-combine-all-source',
  templateUrl: './combine-all-source.component.html',
  styleUrls: ['./combine-all-source.component.scss'],
})
export class CombineAllSourceComponent implements OnInit {
  htmlTemplate$: Observable<string>;
  typescriptTemplate$: Observable<string>;
  scssTemplate$: Observable<string>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.htmlTemplate$ = this.http.get(
      'assets/source/operators/combination/combine-all/combine-all.component.html',
      { responseType: 'text' }
    );
    this.typescriptTemplate$ = this.http.get(
      'assets/source/operators/combination/combine-all/combine-all.component.ts',
      { responseType: 'text' }
    );
    this.scssTemplate$ = this.http.get(
      'assets/source/operators/combination/combine-all/combine-all.component.scss',
      { responseType: 'text' }
    );
  }
}
