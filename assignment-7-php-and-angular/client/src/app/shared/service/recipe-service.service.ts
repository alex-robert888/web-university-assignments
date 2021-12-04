import { Recipe } from './../model/recipe.model';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


interface ApiResonse {
    data: Array<Recipe>
}


@Injectable({
providedIn: 'root'
})
export abstract class RecipeService {
    private indexUrl: string = "http://localhost/facultate/ANUL%202/sem2/web/assignment-7-php-and-angular/server/src/api/recipes";

    constructor(private httpClient: HttpClient) {
    }

    initialize_server_urls(indexUrl: string) {
        this.indexUrl = indexUrl;
    }

    index(): Observable<Array<Recipe>> {
        return this.httpClient.get<ApiResonse>(`${this.indexUrl}/index.php`)
        .pipe(
            map(
                r => r.data
            )
        );
    }

    destroy(id: number): void {
        this.httpClient.delete<any>(`${this.indexUrl}/destroy.php?id=${id}`).subscribe(
            response => console.log(response),
            error => console.error(error)
        )
    }

    create(entity: Recipe): void {
        this.httpClient.post<any>(`${this.indexUrl}/create.php`, {
            name: entity.name,
            type: entity.type,
            author: entity.author,
            content: entity.content
        }).subscribe(
            response => console.log(response),
            error => console.error(error)
        )
    }

    update(entity: Recipe): void {
        this.httpClient.put<any>(`${this.indexUrl}/update.php`, {
            id: entity.id,
            name: entity.name,
            type: entity.type,
            author: entity.author,
            content: entity.content
        }).subscribe(
            response => console.log(response),
            error => console.error(error)
        )}

    filter(type: string): Observable<Array<Recipe>> {
      return this.httpClient.get<ApiResonse>(`${this.indexUrl}/filter_by_type.php/?type=${type}`)
      .pipe(
            map(
                r => r.data
            )
        );
    }

    show(id: number): Observable<Recipe> {
      return this.httpClient.get<Recipe>(`${this.indexUrl}/show.php?id=${id}`);
    }
}
  
