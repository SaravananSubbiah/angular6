import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouteoneComponent } from './routeone/routeone.component';
import { RoutetwoComponent } from './routetwo/routetwo.component';
import { GoogleMapComponent } from './googlemap/googlemap.component';
import { FormsModule } from '@angular/forms';


import { BehaviorSubjectService } from './behaviour-subject.service';
import { AuthGuard } from './auth-guard.service';

import { AppComponent } from './app.component';
import { ParentComponent } from './parenttochild-inp/parent/parent.component';
import { ChildComponent } from './parenttochild-inp/child/child.component';
import { ViewChildParentComponent } from './childtoparent-vc/viewchildparent/viewchildparent.component';
import { ViewChildChildComponent } from './childtoparent-vc/viewchildchild/viewchildchild.component';
import { StorageComponent } from './storage/storage.component';
import { StyleCssComponent } from './style-css/style-css.component';
import { JsconceptsComponent } from './jsconcepts/jsconcepts.component';
import { BsOneComponent } from './bs-one/bs-one.component';
import { BsTwoComponent } from './bs-two/bs-two.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { IndexdbStorageComponent } from './indexdb-storage/indexdb-storage.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { ChildtoparentOutComponent } from './childtoparent-out/childtoparent-out.component';
import { OutputParentComponent } from './childtoparent-out/parent/parent.component';
import { OutputChildComponent } from './childtoparent-out/child/child.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { CounterComponent } from './ngcontentsample/counter/counter.component';
import { WrapperComponent } from './ngcontentsample/wrapper/wrapper.component';
import { NgcontentsampleComponent } from './ngcontentsample/ngcontentsample.component';


@NgModule({
  declarations: [
    AppComponent,
    RouteoneComponent,
    RoutetwoComponent,
    GoogleMapComponent,
    ParentComponent,
    ChildComponent,
    OutputParentComponent,
    OutputChildComponent,
    ViewChildParentComponent,
    ViewChildChildComponent,
    StorageComponent,
    StyleCssComponent,
    JsconceptsComponent,
    BsOneComponent,
    BsTwoComponent,
    BehaviourSubjectComponent,
    IndexdbStorageComponent,
    UsersListComponent,
    UserComponent,
    ChildtoparentOutComponent,
    NgtemplateComponent,
    CounterComponent,
    WrapperComponent,
    NgcontentsampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
 HttpClientModule,
RouterModule.forRoot(
      [
        { path: 'routeone', 
          canActivate: [AuthGuard],
          component: RouteoneComponent 
        },
        { path: 'routetwo', 
        component: RoutetwoComponent,
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'bs',
            component: BehaviourSubjectComponent
          }
        ]      
      },
      { path: 'bs', component: BehaviourSubjectComponent },
        { path: 'googlemap', component: GoogleMapComponent },
        { path: 'parent', component: OutputParentComponent },
        { path: 'viewchildparent', component: ViewChildParentComponent },
        { path: 'ngtemplate', component: NgtemplateComponent}, 
        { path: 'ngcontent', component: NgcontentsampleComponent},        
        { path: 'indexdb', component: IndexdbStorageComponent },
        { path: 'stylecss', component: StyleCssComponent },
        { path: 'jsconcepts', component: JsconceptsComponent },
        { path: 'userlist', component: UsersListComponent },
        { path: 'user/:Id', component: UserComponent },       
        { path: '**', redirectTo: '/' }
      ]
    )
  ],
  providers: [HttpClientModule,
    BehaviorSubjectService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
