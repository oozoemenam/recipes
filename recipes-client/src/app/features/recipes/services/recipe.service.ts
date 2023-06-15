import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipe } from '../model/recipe.model';

const BASE_PATH = environment.basePath;

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes$ = this.http
    .get<Recipe[]>(`${BASE_PATH}/recipes`)
    .pipe(catchError((error) => of([])));

  constructor(private http: HttpClient) {}
}
