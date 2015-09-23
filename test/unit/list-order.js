describe('Unit test for buying List', function () {

    describe('ListBuyController', function () {
        beforeEach(function () {
            this.$scope = {};
            this.controller = new ListBuyController(this.$scope);
        });

        it('should create "items" with 2 items', function () {
            expect(this.$scope.items.length).toBe(2);
        });

        describe('addItem', function () {
            it('to add a new item to the list of scope data', function () {
                this.$scope.item = {};
                this.$scope.item.product = 'Carne';
                this.$scope.item.quantity = 5;
                this.$scope.addItem();
                expect(this.$scope.items.length).toBe(3);
                expect(this.$scope.items[2].product).toBe('Carne');
                expect(this.$scope.items[2].quantity).toBe(5);
                expect(this.$scope.items[2].buy).toBeFalse;
            });
        });

    });

});
