import { ExpressionChangedAfterCheckedPage } from './app.po';

describe('expression-changed-after-checked App', () => {
  let page: ExpressionChangedAfterCheckedPage;

  beforeEach(() => {
    page = new ExpressionChangedAfterCheckedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
