import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Fundraiser } from '../fundraiser.model';
import { FundraiserService } from '../fundraiser.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fundraiser-detail',
  templateUrl: './fundraiser-detail.component.html',
  styleUrls: ['./fundraiser-detail.component.css'],
  providers: [FundraiserService]
})

export class FundraiserDetailComponent implements OnInit {
  fundraiserId: string;
  fundraiserToDisplay;
  currentRoute: string = this.router.url;
  showDonationForm: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private fundraiserService: FundraiserService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.fundraiserId = urlParametersArray['id'];
    });
    this.fundraiserService.getFundraiserById(this.fundraiserId).subscribe(dataLastEmittedFromObserver => {
      this.fundraiserToDisplay = new Fundraiser(
                  dataLastEmittedFromObserver.category,
                  dataLastEmittedFromObserver.organiserName,
                  dataLastEmittedFromObserver.donationGoal,
                  dataLastEmittedFromObserver.projectName,
                  dataLastEmittedFromObserver.description)
      console.log(this.fundraiserToDisplay);
    })
  }

  donationForm() {
    this.showDonationForm = true;
  }

  // submitDonation(donationAmount: number) {
  //
  // }
}
