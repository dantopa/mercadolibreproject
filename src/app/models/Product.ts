export class Product {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  location: string;
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
