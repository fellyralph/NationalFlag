import { NationalFlagPage } from './app.po';

describe('national-flag App', function() {
  let page: NationalFlagPage;

  beforeEach(() => {
    page = new NationalFlagPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
