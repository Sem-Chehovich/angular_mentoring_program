import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  
  @Output() cancel = new EventEmitter<void>();
  description:any;

  constructor(
    private dialogRef: MatDialogRef<ModalWindowComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.description = data;
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  confirm () {
    this.dialogRef.close(true);
  }
}
