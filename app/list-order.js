function ListBuyController($scope) {

    $scope.item = {};

    $scope.items = [
        {product: 'Milo', quantity: 2, buy: false},
        {product: 'Milk', quantity: 12, buy: false}
    ];

    $scope.addItem = function () {
        $scope.items.push({product: $scope.item.product, quantity: $scope.item.quantity, buy: false});
        $scope.productItem = $scope.quantityItem = '';
    };

    $scope.editItem = function(index){
        $scope.itemId = index;
        $scope.productItem = $scope.items[index].product;
        $scope.quantityItem = $scope.items[index].quantity;
        $scope.edit = true;
    };

    $scope.applyChanges = function(index){
        $scope.items[$scope.itemId].product = $scope.productItem;
        $scope.items[$scope.itemId].quantity = $scope.quantityItem;      

        $scope.clearItemEntry();
    };

    $scope.deleteItem = function(index){
        $scope.items.splice(index, 1);
    };

    $scope.cancel = function(index){
        $scope.clearItemEntry();
    };

    $scope.clearItemEntry = function() {
        $scope.productItem = '';
        $scope.quantityItem = '';
        $scope.edit = false;
    }
};