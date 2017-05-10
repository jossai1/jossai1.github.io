import { JaneWebsitePage } from './app.po';

describe('jane-website App', () => {
  let page: JaneWebsitePage;

  beforeEach(() => {
    page = new JaneWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
