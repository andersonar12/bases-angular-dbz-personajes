import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public heroes: string[] = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'Thor',
    'Capitan America',
  ];
  constructor() {}

  ngOnInit(): void {}

  removeHeroe(index: number): void {
    this.heroes.splice(index, 1);
  }
}
