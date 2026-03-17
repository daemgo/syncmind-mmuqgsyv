// 订单相关类型
export interface Order {
  id: string;
  orderNo: string;
  customerName: string;
  country: string;
  productCount: number;
  totalQuantity: number;
  totalAmount: number;
  currency: string;
  tradeTerm: string;
  paymentMethod: string;
  status: OrderStatus;
  orderDate: string;
  deliveryDate: string;
  productionStatus: string;
}

export type OrderStatus = "draft" | "pending" | "confirmed" | "producing" | "ready" | "shipped" | "completed" | "cancelled";

// 产品相关类型
export interface Product {
  id: string;
  productNo: string;
  productName: string;
  productType: "single" | "set" | "series";
  category: string;
  style: string;
  seasons: string[];
  colors: string[];
  sizes: string[];
  basePrice: number;
  currency: string;
  image?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

// 物料相关类型
export interface Material {
  id: string;
  materialNo: string;
  materialName: string;
  materialType: "fabric" | "accessory" | "packaging";
  category: string;
  specification: string;
  unit: string;
  unitPrice: number;
  currency: string;
  supplier: string;
  leadTime: number;
  stockQuantity: number;
  minStock: number;
  maxStock: number;
  warehouse: string;
}

// 库存相关类型
export interface Inventory {
  id: string;
  warehouse: string;
  warehouseType: "fabric" | "accessory" | "garment" | "outsourcing";
  materialNo: string;
  materialName: string;
  batchNo?: string;
  quantity: number;
  unit: string;
  availableQuantity: number;
  status: "normal" | "warning" | "shortage" | "overstock";
  location: string;
  lastUpdated: string;
}

// 生产相关类型
export interface ProductionOrder {
  id: string;
  productionNo: string;
  orderNo: string;
  productNo: string;
  productName: string;
  quantity: number;
  completedQuantity: number;
  status: ProductionStatus;
  startDate: string;
  plannedEndDate: string;
  actualEndDate?: string;
  workshop: string;
  progress: number;
}

export type ProductionStatus = "pending" | "cutting" | "sewing" | "ironing" | "packing" | "completed" | "paused";

// 外协相关类型
export interface OutsourcingOrder {
  id: string;
  outsourcingNo: string;
  orderNo: string;
  factory: string;
  factoryContact: string;
  factoryPhone: string;
  productNo: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  currency: string;
  status: OutsourcingStatus;
  sentDate: string;
  plannedReturnDate: string;
  actualReturnDate?: string;
  progress: number;
  qualityStatus?: "pending" | "passed" | "failed";
}

export type OutsourcingStatus = "pending" | "sent" | "producing" | "completed" | "inspecting" | "stored";

// 报关相关类型
export interface CustomsDeclaration {
  id: string;
  declarationNo: string;
  orderNo: string;
  invoiceNo: string;
  customerName: string;
  destinationPort: string;
  destinationCountry: string;
  totalAmount: number;
  currency: string;
  packages: number;
  grossWeight: number;
  netWeight: number;
  status: CustomsStatus;
  declarationDate: string;
  releaseDate?: string;
}

export type CustomsStatus = "pending" | "declaring" | "released" | "inspecting" | "detained";
