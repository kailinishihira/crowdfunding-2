import { Injectable } from '@angular/core';
import {Fundraiser} from './fundraiser.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FundraiserService {

  fundraisers: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.fundraisers = database.list('fundraisers');
  }

  getFundraisers() {
    return this.fundraisers;
  }

  addFundraiser(newFundraiser: Fundraiser) {
    this.fundraisers.push(newFundraiser);
  }

  getFundraiserById(fundraiserId: string) {
    return this.database.object('/fundraisers/'+ fundraiserId);
  }

  updateFundraiser(localUpdatedFundraiser) {
    var fundraiserEntryInFirebase =
    this.getFundraiserById(localUpdatedFundraiser.$key);
    fundraiserEntryInFirebase.update({
      category: localUpdatedFundraiser.category,
      organiserName: localUpdatedFundraiser.organiserName,
      donationGoal: localUpdatedFundraiser.donationGoal,
      projectName: localUpdatedFundraiser.projectName,
      description: localUpdatedFundraiser.description});
  }

  deleteFundraiser(localFundraiserToDelete){
    var fundraiserEntryInFirebase = this.getFundraiserById(localFundraiserToDelete.$key);
    fundraiserEntryInFirebase.remove()
  }

  // addDonation(key, donationAmount){
  //   var fundraiserEntryInFirebase =  this.getFundraiserById(key);
  //   fundraiserEntryInFirebase.donationReceived += donationAmount;
  //   // var totalDonationReceived = this.getFundraiserById(localFundraiserToDonate.donationReceived)
  // }


}
