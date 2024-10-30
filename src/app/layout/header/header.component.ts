import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('dropdownAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-10px)',
      })),
      transition(':enter', [
        animate(200, style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(-10px)' })),
      ]),
    ]),
  ],

})
export class HeaderComponent {
  isDropdownOpen = false;
  navigation = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Latest Recipes',
      path: '/',
    },
    {
      label: 'Recettes par catégories',
      items: [
        {
          label: 'Starters',
          path: '/category/startes',
        },
        {
          label: 'Mains',
          path: '/category/mains',
        },
        {
          label: 'Desserts',
          path: '/category/desserts',
        },
      ],
    },
  ]

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
