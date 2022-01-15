var homepage1 = function() {
    var f1 = element(by.model('first'));
    var s1 = element(by.model('second'));
    var goButton = element(by.css('[ng-click="doAddition()"]'));

    this.func0 = async function(url){
        await browser.get(url);
    };

    this.func1 = function(f){
        f1.sendKeys(f);
    };

    this.func2 = function(s){
        console.log("rajarao");
        s1.sendKeys(s);
    };

    this.func3 = function(){
        goButton.click();
    };

    this.func4 = function(result){
        let r = element(by.cssContainingText('.ng-binding', result));
        expect(r.getText()).toEqual(result);
    };

};

module.exports = new homepage1();