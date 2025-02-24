export interface IBicycle {
  _id: string;
  name: string;
  brand: string;
  price: number;
  type: "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric";
  description: string;
  image: string;
  quantity: number;
  inStock: boolean;
}

export type FilterState = {
  search: string;
  brand: string;
  type: string;
  price: string;
  inStock: boolean;
};