import {BaseQuestion} from "./base.question";


export class CapitalQuestion extends BaseQuestion {
  type = 1;

  constructor(answers: string[], correctAnswer: number, country: any) {
    super();
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.text = `What is the capital of ${country.name}?`;
  }
}

export class FlagQuestion extends CapitalQuestion {

  type = 2;
  flag: string;

  constructor(answers: string[], correctAnswer: number, country: any) {
    super(answers, correctAnswer, country);
    this.type = 2;
    this.flag = country.flag;
    this.text = `Which country's flag is this?`;

  }

}

export class NeighborQuestion extends  CapitalQuestion {
  type = 3;

  constructor(answers: string[], correctAnswer: number, country: any) {
    super(answers, correctAnswer, country);
    this.type = 3;
    this.text = `Which of the following countries is neighbor to ${country.name}?`;

  }
}
