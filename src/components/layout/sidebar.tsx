"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Package,
  ShoppingCart,
  Factory,
  Warehouse,
  Send,
  FileText,
  BarChart3,
  Home,
  Shirt,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "首页",
    items: [
      {
        name: "仪表盘",
        href: "/erp",
        icon: Home,
      },
    ],
  },
  {
    title: "外贸管理",
    items: [
      {
        name: "外贸订单",
        href: "/erp/orders",
        icon: ShoppingCart,
      },
      {
        name: "产品管理",
        href: "/erp/products",
        icon: Shirt,
      },
    ],
  },
  {
    title: "生产管理",
    items: [
      {
        name: "物料管理",
        href: "/erp/materials",
        icon: Package,
      },
      {
        name: "生产订单",
        href: "/erp/production",
        icon: Factory,
      },
      {
        name: "外协管理",
        href: "/erp/outsourcing",
        icon: Send,
      },
    ],
  },
  {
    title: "库存管理",
    items: [
      {
        name: "库存查询",
        href: "/erp/inventory",
        icon: Warehouse,
      },
    ],
  },
  {
    title: "外贸服务",
    items: [
      {
        name: "报关管理",
        href: "/erp/customs",
        icon: FileText,
      },
    ],
  },
  {
    title: "系统",
    items: [
      {
        name: "数据分析",
        href: "/erp/analytics",
        icon: BarChart3,
      },
      {
        name: "系统设置",
        href: "/erp/settings",
        icon: Settings,
      },
    ],
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn("flex flex-col h-full bg-card border-r", className)}>
      {/* Logo */}
      <div className="flex items-center h-16 px-6 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Shirt className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg">成衣外贸ERP</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-6 px-3">
          {menuItems.map((section) => (
            <li key={section.title}>
              <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {section.title}
              </div>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground font-medium"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t">
        <div className="text-xs text-muted-foreground text-center">
          © 2026 成衣外贸ERP系统
        </div>
      </div>
    </div>
  );
}
