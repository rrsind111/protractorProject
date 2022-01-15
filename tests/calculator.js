var h1 = require('../pages/homepage');
describe('demo', function(){
    
    it('testcase1', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        //homepage.func0('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
        h1.func1('4');
        
        //element(by.model('second')).sendKeys('5');
        h1.func2('6');

        //element(by.css('[ng-click="doAddition()"]')).click();
        //$('[ng-click="doAddition()"]').click();
        h1.func3();

        //let r = element(by.cssContainingText('.ng-binding', '7'));
        //expect(r.getText()).toEqual('7');
        h1.func4('10');
        browser.sleep(2000);        
    });

    it('testcase2', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        //homepage.func0('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
        h3.func1('4');
    });    
});