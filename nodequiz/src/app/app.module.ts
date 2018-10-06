import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { ResultsComponent } from './results/results.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'presentations', component: PresentationsComponent },
  { path: 'quiz-selection', component: QuizSelectionComponent },
  { path: 'quizzes', component: QuizzesComponent },
  { path: 'results', component: ResultsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuizzesComponent,
    PresentationsComponent,
    ResultsComponent,
    QuizSelectionComponent,
    RouterModule.forRoot(routes, {useHash: true })
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
