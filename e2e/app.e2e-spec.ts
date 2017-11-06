import { MedingenioWebPage } from './app.po';

describe('medingenio-web App', () => {
  let page: MedingenioWebPage;

  beforeEach(() => {
    page = new MedingenioWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
