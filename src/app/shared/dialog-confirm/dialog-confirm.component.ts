import {
  Component,
  OnInit,
  ElementRef,
  Input,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element;
  private data;

  constructor(private dialogService: DialogService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    const dialog = this;
    if (!this.id) {
      console.error('Dialog must have an id');
      return;
    }
    document.body.appendChild(this.element);

    // close dialog on background click
    this.element.addEventListener('click', (e) => {
      if (e.target.className === 'dialog-background' || e.target.className === 'dialog') {
        dialog.close();
      }
    });

    this.dialogService.add(this);
  }

  ngOnDestroy(): void {
    this.dialogService.remove(this.id);
    this.element.remove();
  }

  open(data): void {
    this.data = data;
    this.element.style.display = 'block';
    document.body.classList.add('dialog-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('dialog-open');
  }
}
