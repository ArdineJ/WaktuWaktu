import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { HelpsComponent } from './helps/helps.component';
import { TimerComponent } from './features/timer/timer.component';
import { StopwatchComponent } from './features/stopwatch/stopwatch.component';
import { NotesComponent } from './features/notes/notes.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'features',
    component: FeaturesComponent,
    children:[
      // {path:'', component:TimerComponent},
      // {path:'', component:StopwatchComponent},
      // {path:'', component:NotesComponent},
    ]
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'help',
    component: HelpsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
