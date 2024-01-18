import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TeamComponent } from '../app/team/team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//@Component.import ({ TeamComponent } from "team");

export class AppComponent {
  newMemberName: string = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

  addMember() {
    if(!this.newMemberName){
      this.errorMessage = "Name can't be empty!"
      return;
    }

    this.members = [...this.members, this.newMemberName];
    this.newMemberName = '';
    this.errorMessage = '';
    console.log(this.members);
  }

  onInput(member: string) {
    this.newMemberName = member;
  }

  onTeamsNumberInput(number: string) {
    this.numberOfTeams = Number(number);
  }

  generateTeams() {
    const allMembers = [...this.members];

    if(!this.numberOfTeams || this.numberOfTeams <=0) {
      this.errorMessage = 'Invalid number of teams';
      return;
    }

    this.errorMessage = '';
    if(this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough members';
    }

    while(allMembers.length){
      for (let i=0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if(!member) break;
        this.teams[i] = this.teams[i] ? [...this.teams[i], member] : [member];
      }
      console.log(this.teams);
    }

    this.members = [];
    this.numberOfTeams = '';
  }
}
