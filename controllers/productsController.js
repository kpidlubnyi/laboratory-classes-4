const Product = require("../models/Product");
const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");

exports.getProductsView = (_request, response) => {
  const products = Product.getAll();
  response.render("products.ejs", {
    headTitle: "Shop - Products",
    path: "/",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products",
    products: products,
  });
};

exports.getAddProductView = (_request, response) => {
  response.render("add-product.ejs", {
    headTitle: "Shop - Add product",
    path: "/add",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/add",
  });
};

exports.addNewProduct = (request, response) => {
  const { name, description } = request.body;
  const newProduct = new Product(name, description);
  Product.add(newProduct);
  response.status(STATUS_CODE.FOUND).redirect("/products/new");
};

exports.getNewProductView = (_request, response) => {
  const newestProduct = Product.getLast();
  response.render("new-product.ejs", {
    headTitle: "Shop - New product",
    path: "/new",
    activeLinkPath: "/products/new",
    menuLinks: MENU_LINKS,
    newestProduct: newestProduct,
  });
};

exports.getProductView = (request, response) => {
  const productName = request.params.name;
  const product = Product.findByName(productName);
  response.render("product.ejs", {
    headTitle: `Shop - ${product ? product.name : 'Product'}`,
    path: `/products/${productName}`,
    activeLinkPath: "/products",
    menuLinks: MENU_LINKS,
    product: product,
  });
};

exports.deleteProduct = (request, response) => {
  const productName = request.params.name;
  Product.deleteByName(productName);
  response.status(STATUS_CODE.OK).json({ success: true });
};