import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {
  private dialogs: any[] = [];

  constructor() {}

  get(id: string) {
    return this.dialogs.find((_dialog) => _dialog.id === id);
  }

  add(dialog: any) {
    this.dialogs.push(dialog);
  }

  remove(id: string) {
    this.dialogs = this.dialogs.filter((dialog) => dialog.id !== id);
  }

  open(id: string, data) {
    const dialog = this.dialogs.find((_dialog) => _dialog.id === id);
    dialog.open(data);
    return dialog;
  }

  close(id: string) {
    const dialog = this.dialogs.find((_dialog) => _dialog.id === id);
    dialog.close();
  }
}
