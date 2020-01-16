import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // defaultName = '';
  submitted = false;
  defaultQuestion = 'teacher';
  questionAnswer = '';
  genders = ['male', 'female'];
  @ViewChild('f', {static: false}) signupForm: NgForm;
  user={'name':'', 'email': '', 'secret': '', 'answer': '', 'gender': ''};

  onSubmit() {
    this.submitted = true;
    this.user.name = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.answer;
    this.user.gender = this.signupForm.value.gender;
    
    this.signupForm.reset();
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.defaultName = suggestedName;  // simple solution to set just one control 
    // this.signupForm.setValue({            // demo solution, but all controls of form must be set and are updated/overwritten
    //   'userData': {
    //     'username': suggestedName,
    //     'email': ''
    //   },
    //     'secret': '',
    //     'answer': '',
    //     'gender': 'male'
    //   });
    this.signupForm.form.patchValue({   // allowes to set single control value
      'userData': {
        'username': suggestedName
      }
    })
  }
}
