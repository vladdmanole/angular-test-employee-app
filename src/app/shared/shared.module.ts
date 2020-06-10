import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog-confirm/dialog-confirm.component';
import { DialogService } from './services/dialog.service';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule],
  exports: [DialogComponent],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [DialogService, LocalStorageService],
    } as ModuleWithProviders;
  }
}
