import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { AddCharacterComponent } from '../../components/add-character/add-character.component';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ListComponent, AddCharacterComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onNewCharacter(character: Character) {
    this.dbzService.onNewCharacter(character);
  }

  deleteCharacterById(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  ngOnInit(): void {}
}
