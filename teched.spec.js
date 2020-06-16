require('./pages/home');
require('./pages/product');

describe("teched", function () {
    it("Should validate the home screen", function () {
        Then.onTheHomePage.iShouldSeeAllCategories();
    });
    it("Should search for a product", function() {
        When.onTheHomePage.iSearchForProduct();
        Then.onTheHomePage.theProductListShouldBeFiltered();
    });
    it("Should navigate to the product", function () {
        When.onTheHomePage.iSelectTheFirstProduct();
        Then.onTheProductPage.theProductTitleIsShown();
        Then.onTheProductPage.theProductCouldBeOrdered();
    });
	
});
