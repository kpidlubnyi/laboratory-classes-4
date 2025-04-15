class Product {
    static #products = [];
  
    constructor(name, description) {
      this.name = name;
      this.description = description;
    }
  
    static add(product) {
        this.#products.push(product);
      }

    static getAll() {
      return this.#products;
    }
  
    static findByName(name) {
      return this.#products.find(product => product.name === name);
    }
  
    static deleteByName(name) {
      const index = this.#products.findIndex(product => product.name === name);
      if (index !== -1) {
        this.#products.splice(index, 1);
      }
    }
  
    static getLast() {
      if (this.#products.length === 0) {
        return null;
      }
      return this.#products[this.#products.length - 1];
    }
  }
  
module.exports = Product;