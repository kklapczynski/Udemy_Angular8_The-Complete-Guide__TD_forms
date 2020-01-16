import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // defaultName = '';
  defaultQuestion = 'teacher';
  questionAnswer = '';
  genders = ['male', 'female'];
  @ViewChild('f', {static: false}) signupForm: NgForm;

  onSubmit() {
    console.log(this.signupForm);
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
