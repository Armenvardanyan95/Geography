import {Injectable} from '@angular/core';
import {CountriesService} from "./countries.service";
import {CapitalQuestion, FlagQuestion, NeighborQuestion} from "../models/questions/question";
import {BaseQuestion} from "../models/questions/base.question";
import {QuestionType} from "../models/questions/question.type.enum";


@Injectable()
export class QuestionsService {

  private allCountries: any[];

  constructor(private countriesService: CountriesService) {
    this.countriesService.getAllCountries().subscribe(countries => this.allCountries = countries)
  }
  private randomInteger(seed: number = 250): number {
    return Math.floor(Math.random() * seed);
  }

  createQuestion(): BaseQuestion {
    const type = Math.floor(Math.random() * 3) + 1;
    switch (type) {
      case QuestionType.Capital: return this.createCapitalQuestion();
      case QuestionType.Flag: return this.createFlagQuestion();
      case QuestionType.Neighbor: return this.createNeighborQuestion();
    }
  }

  private shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  createCapitalQuestion(): CapitalQuestion {
    const which: number = this.randomInteger();
    const targetCountry: any = this.allCountries[which];
    const incorrectAnswerIndices = [];
    for (let i = 0; i < 3; i++) {
      const next = this.randomInteger();
      if (incorrectAnswerIndices.map((c, i) => i).indexOf(next) !== -1) {
        i--;
        continue;
      }
      incorrectAnswerIndices.push(this.allCountries[next]);
    }
    const answers = [targetCountry.capital, ...(incorrectAnswerIndices.map(c => c.capital))];
    this.shuffle(answers);
    const correctAnswer = answers.indexOf(targetCountry.capital);
    return new CapitalQuestion(answers, correctAnswer, targetCountry);
  }

  createFlagQuestion(): FlagQuestion {
    const which: number = this.randomInteger();
    const targetCountry: any = this.allCountries[which];
    const incorrectAnswerIndices = [];
    for (let i = 0; i < 3; i++) {
      const next = this.randomInteger();
      if (incorrectAnswerIndices.map((c, i) => i).indexOf(next) !== -1) {
        i--;
        continue;
      }
      incorrectAnswerIndices.push(this.allCountries[next]);
    }
    const answers = [targetCountry.name, ...(incorrectAnswerIndices.map(c => c.name))];
    this.shuffle(answers);
    const correctAnswer = answers.indexOf(targetCountry.name);
    return new FlagQuestion(answers, correctAnswer, targetCountry);
  }

  createNeighborQuestion(): NeighborQuestion {
    const targetCountries: any = this.allCountries.filter(country => country.borders.length);
    const which: number = this.randomInteger(targetCountries.length - 1);
    const targetCountry: any = targetCountries[which];
    const correctCountry: any = targetCountry.borders[this.randomInteger(targetCountry.borders.length - 1)];
    const incorrectAnswerIndices = [];
    for (let i = 0; i < 3; i++) {
      const next = this.randomInteger();
      if (
        incorrectAnswerIndices.map((c, i) => i).indexOf(next) !== -1 &&
        targetCountry.borders.indexOf(this.allCountries[next].alpha3Code) === -1
      ) {
        i--;
        continue;
      }
      incorrectAnswerIndices.push(this.allCountries[next]);
    }
    const answers = [correctCountry.name, ...(incorrectAnswerIndices.map(c => c.name))];
    this.shuffle(answers);
    const correctAnswer = answers.indexOf(correctCountry.name);
    return new NeighborQuestion(answers, correctAnswer, targetCountry);
  }

}
