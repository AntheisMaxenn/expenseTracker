import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ItemListComponent } from './item-list/item-list.component';

// service imports
import { ListServiceService} from './shared/services/list-service.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Material Imports...
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

// Forms module import

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditItemModelComponent } from './edit-item-model/edit-item-model.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddItemFormComponent,
    ItemListComponent,
    EditItemModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [ListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
