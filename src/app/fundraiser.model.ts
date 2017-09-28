export class Fundraiser{
  public donationReceived: number = 0;
  public status: string = "Yes";
  constructor(public category: string, public organiserName: string, public donationGoal: number, public projectName: string, public description: string){}
}
