describe("Bacis use case", function(){
    it("should init", function(){
        expect(function(){
            var buffer = new Iva.Buffer.Default()
            var data = new Iva.DataObject({}, buffer);
            var option = new Iva.OptionObject({}, buffer);
            var chart = new Iva.Chart(data, option);
        }).to.not.throw(Error);
    });
});
