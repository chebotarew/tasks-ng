import { Component, Input } from '@angular/core';
import { FeedbackFormValues } from '../../models/types';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss'],
})
export class FeedbackCardComponent {
  @Input()
  feedback!: FeedbackFormValues
}
