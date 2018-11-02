export class Product {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  location: string;
}

export class ProductDetail {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export class Price {
  currency: string;
  amount: number;
  decimals: number;
}

export class Author {
  name: string;
  lastname: string;
}

export class ProductResults {
  author: Author;
  categories: string[];
  items: Product[];
}

export class ProductDetailResult {
  author: Author;
  item: ProductDetail;
  categories: string[];
}
