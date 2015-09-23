function ListBuyController($scope) {

    $scope.inputfield = {};
    $scope.item = {};

    $scope.items = [
        {product: 'Milo', quantity: 2, buy: false},
        {product: 'Milk', quantity: 12, buy: false}
    ];

    $scope.addItem = function () {
        $scope.items.push({product: $scope.inputfield.productItem, quantity: $scope.inputfield.quantityItem, buy: false});
        $scope.productItem = $scope.quantityItem = '';
    };

    $scope.editItem = function(index){
        $scope.itemId = index;
        $scope.inputfield.productItem = $scope.items[index].product;
        $scope.inputfield.quantityItem = $scope.items[index].quantity;
        $scope.edit = true;
    };

    $scope.applyChanges = function(index){
        $scope.items[$scope.itemId].product = $scope.inputfield.productItem;
        $scope.items[$scope.itemId].quantity = $scope.inputfield.quantityItem;      

        $scope.clearItemEntry();
    };

    $scope.deleteItem = function(index){
        $scope.items.splice(index, 1);
    };

    $scope.cancel = function(index){
        $scope.clearItemEntry();
    };

    $scope.clearItemEntry = function() {
        $scope.inputfield = {};
        $scope.edit = false;
    }
};