import { WelcomeComponent} from './welcome/welcome.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundraiserListComponent } from './fundraiser-list/fundraiser-list.component';
import { FundraiserDetailComponent} from './fundraiser-detail/fundraiser-detail.component';
import{ NewfundraiserComponent} from './newfundraiser/newfundraiser.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'fundraisers',
    component: FundraiserListComponent
  },
  {
    path: 'fundraisers/:id',
    component: FundraiserDetailComponent
  },
  {
    path: 'newfundraiser',
    component: NewfundraiserComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
