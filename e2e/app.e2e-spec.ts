import { PruebaAngular4Page } from './app.po';

describe('prueba-angular4 App', function() {
  let page: PruebaAngular4Page;

  beforeEach(() => {
    page = new PruebaAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
