import { CrowdfundingPlatformPage } from './app.po';

describe('crowdfunding-platform App', () => {
  let page: CrowdfundingPlatformPage;

  beforeEach(() => {
    page = new CrowdfundingPlatformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
