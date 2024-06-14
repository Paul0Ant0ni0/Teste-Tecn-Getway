import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
  
})
export class DialogComponent {

  constructor(public dialog: MatDialog) { }

  public openDialog(nterAnimationDuration: string, exitAnimationDuration: string): void {
    
  }

}
