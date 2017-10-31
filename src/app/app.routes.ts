/**
 * Created by Mei on 31/10/2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabsComponent} from './tabs/tabs.component';
import {ListComponent} from './list/list.component';
import {ItemComponent} from './item/item.component';

const routes: Routes = [
  {
    path: 'movies',
    component: TabsComponent,
    children: [
      {
        path: 'cat',
        component:ListComponent,
        children: [
          {
            path:'item',
            component:ItemComponent
          },
        ],
      },
    ],
  },
  {
    path:'**',
    component: TabsComponent,
  },
  {
    path:'',
    component: TabsComponent,
  },
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
