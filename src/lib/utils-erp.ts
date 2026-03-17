import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 格式化金额
export function formatMoney(amount: number, currency = "USD"): string {
  const symbols: Record<string, string> = {
    USD: "$",
    EUR: "€",
    CNY: "¥",
    GBP: "£",
    JPY: "¥",
  };
  const symbol = symbols[currency] || currency;
  return `${symbol}${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// 格式化日期
export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" });
}

// 格式化日期时间
export function formatDateTime(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// 获取状态颜色
export function getStatusColor(status: string, type: "order" | "production" | "inventory" | "customs" = "order"): string {
  const colorMap: Record<string, Record<string, string>> = {
    order: {
      draft: "bg-gray-100 text-gray-800",
      pending: "bg-yellow-100 text-yellow-800",
      confirmed: "bg-blue-100 text-blue-800",
      producing: "bg-purple-100 text-purple-800",
      ready: "bg-cyan-100 text-cyan-800",
      shipped: "bg-green-100 text-green-800",
      completed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    },
    production: {
      pending: "bg-gray-100 text-gray-800",
      cutting: "bg-blue-100 text-blue-800",
      sewing: "bg-purple-100 text-purple-800",
      ironing: "bg-cyan-100 text-cyan-800",
      packing: "bg-yellow-100 text-yellow-800",
      completed: "bg-green-100 text-green-800",
      paused: "bg-red-100 text-red-800",
    },
    inventory: {
      normal: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      shortage: "bg-red-100 text-red-800",
      overstock: "bg-blue-100 text-blue-800",
    },
    customs: {
      pending: "bg-gray-100 text-gray-800",
      declaring: "bg-blue-100 text-blue-800",
      released: "bg-green-100 text-green-800",
      inspecting: "bg-yellow-100 text-yellow-800",
      detained: "bg-red-100 text-red-800",
    },
  };
  return colorMap[type]?.[status] || "bg-gray-100 text-gray-800";
}

// 生成唯一ID
export function generateId(prefix: string): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);
  return `${prefix}${timestamp}${random}`.toUpperCase();
}
