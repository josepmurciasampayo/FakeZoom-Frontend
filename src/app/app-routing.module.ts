import { HasValidTokenGuard } from './has-valid-token.guard';
import { ErrorComponent } from './error/error.component';
import { CompleteComponent } from './complete/complete.component';
import { CallComponent } from './call/call.component';
import { SetupComponent } from './setup/setup.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'setup/1', pathMatch: 'full'},
  {
    path: 'setup/:id',
    component: SetupComponent,
    canActivate: [HasValidTokenGuard]
  },
  {
    path: 'call/:id/:userAvatar',
    component: CallComponent,
    canActivate: [HasValidTokenGuard]
  },
  {
    path: 'complete',
    component: CompleteComponent,
  },
  {
    path: 'error',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
