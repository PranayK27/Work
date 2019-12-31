import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NameEditorComponent } from './name-editor/name-editor.component';
// import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
// import { BovineEditorComponent } from './bovine-editor/bovine-editor.component';
// import { BovineCreatorComponent } from './bovine-creator/bovine-creator.component';
import { BovineListComponent } from './bovine-list/bovine-list.component';
// import { BovineFormComponent } from './bovine-form/BovineFormComponent'; // using this to load the bovine-editor form is necessary
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BovineDetailsComponent } from './bovine-details/bovine-details.component';
import { CreateBovineComponent } from './create-bovine/create-bovine.component';
import { UpdateBovineComponent } from './update-bovine/update-bovine.component';
import { SearchBovineComponent } from './search-bovine/search-bovine.component';
// import { BovineFormComponent } from './bovine-form/bovine-form.component';>This caused issue loading the from created

@NgModule({
  declarations: [
    AppComponent,
    // BovineEditorComponent,
    // BovineCreatorComponent,
    BovineListComponent,
    // BovineFormComponent,
    BovineDetailsComponent,
    CreateBovineComponent,
    UpdateBovineComponent,
    SearchBovineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

