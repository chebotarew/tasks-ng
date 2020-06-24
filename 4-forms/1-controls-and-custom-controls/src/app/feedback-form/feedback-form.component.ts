import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackFormValues } from '../../models/types';


@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit{
  constructor(private fb: FormBuilder) {
  }
  public feedbackForm!: FormGroup
  @Output()
  createFeedback: EventEmitter<FeedbackFormValues> = new EventEmitter<FeedbackFormValues>()

  save(v: FeedbackFormValues){
    this.createFeedback.emit(v)
  }

  ngOnInit() {
    this.feedbackForm = this.fb.group({
      advantages: this.fb.control(null, [Validators.minLength(10), Validators.required]),
      limitations: this.fb.control(null, [Validators.minLength(10), Validators.required]),
      description: this.fb.control(null, [Validators.minLength(10), Validators.required]),
      rate: this.fb.control(0 )
    })
  }

}
