import { Component, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { FundraiserService} from '../fundraiser.service';

@Component({
  selector: 'app-fundraiser-list',
  templateUrl: './fundraiser-list.component.html',
  styleUrls: ['./fundraiser-list.component.css'],
  providers: [FundraiserService]
})
export class FundraiserListComponent implements OnInit {
  fundraisers: FirebaseListObservable<any[]>;
   currentRoute: string = this.router.url;

  constructor(private router: Router, private fundraiserService: FundraiserService) { }

  ngOnInit() {
    this.fundraisers = this.fundraiserService.getFundraisers();
  }

  goToDetailPage(clickedFundraiser) {
    this.router.navigate(['fundraisers', clickedFundraiser.$key]);
  }
}
