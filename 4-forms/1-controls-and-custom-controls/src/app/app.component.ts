import { Component } from '@angular/core';
import { FeedbackFormValues } from '../models/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public feedback!: FeedbackFormValues
  public save(feedback: FeedbackFormValues){
    this.feedback = feedback
  }
}
