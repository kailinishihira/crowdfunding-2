import { Component, OnInit } from '@angular/core';
import { FundraiserService} from '../fundraiser.service';
import { Fundraiser } from '../fundraiser.model';

@Component({
  selector: 'app-newfundraiser',
  templateUrl: './newfundraiser.component.html',
  styleUrls: ['./newfundraiser.component.css'],
  providers: [FundraiserService]
})
export class NewfundraiserComponent implements OnInit {

  constructor(private fundraiserService: FundraiserService) { }

  ngOnInit() {
  }
  submitForm(category: string, organiserName: string, donationGoal: number, projectName: string, description: string)
  {
    var newFundraiser : Fundraiser = new Fundraiser(category, organiserName, donationGoal, projectName, description);
    this.fundraiserService.addFundraiser(newFundraiser);
  }

}
