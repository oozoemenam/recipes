import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipeService } from 'src/app/features/recipes/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent {
  recipes$ = this.service.recipes$;

  constructor(private service: RecipeService) {}
}
