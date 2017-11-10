import { The8digitalPage } from './app.po';

describe('the8digital App', () => {
  let page: The8digitalPage;

  beforeEach(() => {
    page = new The8digitalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
