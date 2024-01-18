import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  providers: [],
  imports: [TitleCasePipe],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  @Input() team: string[] = [];
  @Input() index: number = 0;

}
