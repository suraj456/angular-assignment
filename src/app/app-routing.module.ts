import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxContainerComponent } from './inbox/containers/inbox-container/inbox-container.component';

const routes: Routes = [
  { path : 'inbox', component : InboxContainerComponent},
  { path : '', redirectTo : 'inbox', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
