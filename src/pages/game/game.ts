import { Component, EventEmitter } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import {QuestionsService} from "../../app/services/questions.service";
import {BaseQuestion} from "../../app/models/questions/base.question";
import {QuestionType} from "../../app/models/questions/question.type.enum";

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  currentQuestion: BaseQuestion;
  wrongAnswer: number;
  QuestionType = QuestionType;
  isDefeated: boolean = false;
  hasWon: boolean = false;

  constructor(public navCtrl: NavController, private params: NavParams,
              public viewCtrl: ViewController, private questionsService: QuestionsService) {
    this.next();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  next(): void {
    this.hasWon = false;
    this.currentQuestion = this.questionsService.createQuestion();
    console.log(this.currentQuestion);
  }

  answer(choice: number) {
    if (choice === this.currentQuestion.correctAnswer) {
      this.hasWon = true;
    } else {
      this.isDefeated = true;
    }
  }



}
