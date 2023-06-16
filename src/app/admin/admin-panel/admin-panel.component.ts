import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  changeParametreTab: number = 0;

  ngOnInit(): void {
  }

  onToggle(event: MouseEvent) {
    const element = event.target as HTMLElement;
    if (!element.parentElement?.classList.contains('dropend')) {
      const elements = document.querySelectorAll('.selected');
      elements.forEach(element => {
        element.classList.remove('selected');
      })
    }
    else {
      const elements = document.querySelectorAll('.selected');
      elements.forEach(element => {
        if (element.parentElement?.classList.contains('dropend')) {
          element.classList.remove('selected');
        }
      })
    }
    element.nextElementSibling?.classList.toggle('selected');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const element = event.target as HTMLElement;
    if (!element.classList.contains('my-dropdown-toggle') && !element.classList.contains('my-dropdown-menu')) {
      const elements = document.querySelectorAll('.selected');
      elements.forEach(element => {
        element.classList.remove('selected');
      })
    }
  }

}
