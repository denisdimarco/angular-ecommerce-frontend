export class Product {
  sku: string = "";
  name: string = "";
  description: string = "";
  unitPrice: number = 0;
  imageUrl: string = "";
  active: boolean = true;
  unitsInStock: number = 0;
  dateCreated: Date = new Date(+0);
  lastUpdated: Date = new Date(+0);

}
