describe('As a user I want to browse Perplay so that I can watch my favorite series', function () {
  it('Given I visit Perplay', function () {
    browser.get('http://perplay.surge.sh');

    it('When I see the title in the header', function () {
      var title = element.all(by.tagName('h1'));

      it('Then it should say perplay', function () {        
        expect(title.text).toEqual('perplay');
      });
    });
  });
});