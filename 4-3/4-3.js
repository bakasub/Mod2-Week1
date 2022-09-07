var Product = /** @class */ (function () {
    function Product(name, price) {
        this._name = name;
        this._price = price;
    }
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
    }
    Object.defineProperty(ProductManager.prototype, "getAll", {
        get: function () {
            return this.products;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductManager.prototype, "add", {
        set: function (product) {
            this.products.push(product);
        },
        enumerable: false,
        configurable: true
    });
    return ProductManager;
}());
var laptop = new Product("Laptop", 20000);
var iphone = new Product("Iphone", 10000);
var productManager = new ProductManager();
productManager.add = laptop;
productManager.add = iphone;
console.log(productManager.getAll);
