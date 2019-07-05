import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'rmp-combine-all-source',
  templateUrl: './combine-all-source.component.html',
  styleUrls: ['./combine-all-source.component.scss'],
})
export class CombineAllSourceComponent implements OnInit {
  templates$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.templates$ = forkJoin([
      this.getSourceCode('html'),
      this.getSourceCode('ts'),
      this.getSourceCode('scss'),
    ]).pipe(
      map(([htmlTemplate, typescriptTemplate, scssTemplate]) => ({
        htmlTemplate,
        typescriptTemplate,
        scssTemplate,
      }))
    );
  }

  private getSourceCode(fileType: string): Observable<string> {
    return this.http.get(
      `assets/source/operators/combination/combine-all/combine-all.component.${fileType}`,
      { responseType: 'text' }
    );
  }
}
