class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    if (!this.products.find(({ code }) => code === code)) {
      const newProduct = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
      if (Object.values(newProduct).every((value) => String(value).trim() !== '' && value !== undefined)) {
        this.products.push(newProduct);
        console.log('OK, producto agregado correctamente');
      } else {
        console.log('ERROR, todos los campos son obligatorios')
      }
    } else {
      console.log('ERROR, el codigo ingresado del producto ya existe');
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(pid) {
    return this.products.find((prod) => prod.id === pid) || 'Not Found';
  }
}

// TESTING SUGERIDO EN SLIDES
const productManager = new ProductManager();
console.log(productManager.getProducts());

productManager.addProduct({
  title: 'producto prueba',
  description: 'Este es un producto de prueba',
  price: 200,
  thumbnail: 'sin imagen',
  code: 'abc123',
  stock: 25
});

console.log(productManager.getProducts());

productManager.addProduct({
  title: 'producto prueba',
  description: 'Este es un producto de prueba',
  price: 200,
  thumbnail: 'sin imagen',
  code: 'abc123',
  stock: 25
});

console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));
