import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatListModule, MatInputModule,
  MatButtonModule, MatDividerModule, MatLineModule, MatIconModule,
  MatCardModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule,
  MatDialogModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { JexiaService } from './services/jexia.service';
import { SignupComponent } from './components/signup/signup.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentModule } from 'ngx-moment';
import { ProfileComponent } from './components/profile/profile.component';

// const config: SocketIoConfig = { url: environment.jexia.projectURL, options: {} };
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    TodoComponent,
    ProfileComponent
  ],
  entryComponents: [ProfileComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MomentModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatMenuModule,
    MatNativeDateModule,
    MatListModule,
    MatToolbarModule,
    DragDropModule,

    // SocketIoModule.forRoot(config)
  ],
  providers: [
    MatNativeDateModule,
    JexiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
