import { Component, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
import { FundraiserService } from '../fundraiser.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FundraiserService]
})
export class AdminComponent implements OnInit {

  constructor(private fundraiserService: FundraiserService) { }

  ngOnInit() {
  }

}
