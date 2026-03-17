// 成衣外贸ERP - 数据字典

// 订单状态
export const ORDER_STATUS = [
  { label: "草稿", value: "draft", color: "gray" },
  { label: "待确认", value: "pending", color: "yellow" },
  { label: "已确认", value: "confirmed", color: "blue" },
  { label: "生产中", value: "producing", color: "purple" },
  { label: "待发货", value: "ready", color: "cyan" },
  { label: "已发货", value: "shipped", color: "green" },
  { label: "已完成", value: "completed", color: "green" },
  { label: "已取消", value: "cancelled", color: "red" },
];

// 贸易条款
export const TRADE_TERMS = [
  { label: "FOB（离岸价）", value: "FOB" },
  { label: "CIF（到岸价）", value: "CIF" },
  { label: "CFR（成本加运费）", value: "CFR" },
  { label: "EXW（工厂交货）", value: "EXW" },
];

// 结算方式
export const PAYMENT_METHODS = [
  { label: "T/T（电汇）", value: "TT" },
  { label: "L/C（信用证）", value: "LC" },
  { label: "D/P（付款交单）", value: "DP" },
  { label: "D/A（承兑交单）", value: "DA" },
  { label: "Western Union", value: "WU" },
  { label: "PayPal", value: "PP" },
];

// 币种
export const CURRENCIES = [
  { label: "美元 USD", value: "USD", symbol: "$" },
  { label: "欧元 EUR", value: "EUR", symbol: "€" },
  { label: "人民币 CNY", value: "CNY", symbol: "¥" },
  { label: "英镑 GBP", value: "GBP", symbol: "£" },
  { label: "日元 JPY", value: "JPY", symbol: "¥" },
];

// 产品类型
export const PRODUCT_TYPES = [
  { label: "单件", value: "single" },
  { label: "套件", value: "set" },
  { label: "系列", value: "series" },
];

// 尺码
export const SIZES = [
  "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"
];

// 颜色
export const COLORS = [
  { label: "白色", value: "white", hex: "#FFFFFF" },
  { label: "黑色", value: "black", hex: "#000000" },
  { label: "灰色", value: "gray", hex: "#808080" },
  { label: "红色", value: "red", hex: "#FF0000" },
  { label: "蓝色", value: "blue", hex: "#0000FF" },
  { label: "绿色", value: "green", hex: "#008000" },
  { label: "黄色", value: "yellow", hex: "#FFFF00" },
  { label: "棕色", value: "brown", hex: "#A52A2A" },
];

// 库存状态
export const INVENTORY_STATUS = [
  { label: "正常", value: "normal", color: "green" },
  { label: "预警", value: "warning", color: "yellow" },
  { label: "缺货", value: "shortage", color: "red" },
  { label: "过剩", value: "overstock", color: "blue" },
];

// 仓库类型
export const WAREHOUSE_TYPES = [
  { label: "面料仓", value: "fabric" },
  { label: "辅料仓", value: "accessory" },
  { label: "成衣仓", value: "garment" },
  { label: "外协仓", value: "outsourcing" },
];

// 生产状态
export const PRODUCTION_STATUS = [
  { label: "待生产", value: "pending", color: "gray" },
  { label: "裁剪中", value: "cutting", color: "blue" },
  { label: "缝制中", value: "sewing", color: "purple" },
  { label: "整烫中", value: "ironing", color: "cyan" },
  { label: "包装中", value: "packing", color: "yellow" },
  { label: "已完成", value: "completed", color: "green" },
  { label: "已暂停", value: "paused", color: "red" },
];

// 外协状态
export const OUTSOURCING_STATUS = [
  { label: "待外发", value: "pending", color: "gray" },
  { label: "已外发", value: "sent", color: "blue" },
  { label: "生产中", value: "producing", color: "purple" },
  { label: "已完成", value: "completed", color: "green" },
  { label: "质检中", value: "inspecting", color: "yellow" },
  { label: "已入库", value: "stored", color: "green" },
];

// 报关状态
export const CUSTOMS_STATUS = [
  { label: "待报关", value: "pending", color: "gray" },
  { label: "申报中", value: "declaring", color: "blue" },
  { label: "已放行", value: "released", color: "green" },
  { label: "查验中", value: "inspecting", color: "yellow" },
  { label: "已扣留", value: "detained", color: "red" },
];

// 退税状态
export const REFUND_STATUS = [
  { label: "待申报", value: "pending", color: "gray" },
  { label: "审核中", value: "reviewing", color: "blue" },
  { label: "已退税", value: "refunded", color: "green" },
  { label: "已拒绝", value: "rejected", color: "red" },
];
