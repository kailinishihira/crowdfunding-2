import { Component, Input, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
import { FundraiserService } from '../fundraiser.service';

@Component({
  selector: 'app-edit-fundraiser',
  templateUrl: './edit-fundraiser.component.html',
  styleUrls: ['./edit-fundraiser.component.css'],
  providers: [FundraiserService]
})
export class EditFundraiserComponent implements OnInit {
  @Input() selectedFundraiser;

  constructor(private fundraiserService: FundraiserService) { }

  ngOnInit() {
  }

  updateThisFundraiser(fundraiserToUpdate) {
    this.fundraiserService.updateFundraiser(fundraiserToUpdate);
  }

  deleteThisFundraiser(fundraiserToDelete) {
    if(confirm("Are you sure you want to delete this fundraiser?")) {
      this.fundraiserService.deleteFundraiser(fundraiserToDelete);
    }
  }

}
