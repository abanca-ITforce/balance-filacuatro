import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { CopyrightComponent } from './shell/copyright/copyright.component';



@NgModule({
  declarations: [ShellComponent, TopBarComponent, MainContentComponent, CopyrightComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
