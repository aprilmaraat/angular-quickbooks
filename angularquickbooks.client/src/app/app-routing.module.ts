import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickbooksMainComponent } from './components/quickbooks-main/quickbooks-main.component';

const routes: Routes = [
  { path: '', component: QuickbooksMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
