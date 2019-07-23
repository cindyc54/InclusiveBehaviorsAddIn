import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviorsSearchComponent } from './behaviors-search/behaviors-search.component';
import AppComponent from "./app.component"

function setRoutesArray(): any {
  let routesArray: any = [
      { path: '', component: AppComponent }
  ];
  console.log("buttocks");
  return routesArray;
}

const routes: Routes = setRoutesArray();

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
