import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  secretQuestions = [
    'Your favourite drink?',
    'Your first Pet?',
    'Your first teacher?'
  ]

  model = new User(0, 'Bob', 'bob@bob.com', this.secretQuestions[0] );

  submitted = false;

  onSubmit() { this.submitted = true };

  // help for debugging
  get diagnostic() { return JSON.stringify(this.model); }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  newUser() {
    this.model = new User(1,'','','');
  }
}
