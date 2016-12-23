import { CardsOSPage } from './app.po';

describe('cards-os App', function() {
  let page: CardsOSPage;

  beforeEach(() => {
    page = new CardsOSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
