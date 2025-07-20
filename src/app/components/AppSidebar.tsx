'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Home, HandPlatter, SquareMenu, Search, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const items = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Restaurant", url: "/restaurant", icon: HandPlatter },
  { title: "Menu", url: "/menu", icon: SquareMenu },
  { title: "Search", url: "/search", icon: Search },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="text-4xl mt-5 ml-2">Kridha</div>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-8">
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={clsx(
                          "flex items-center gap-4 pl-4 py-2 rounded-md transition-colors",
                          isActive
                            ? "bg-tertiary text-primary font-semibold hover:bg-tertiary"
                            : "hover:bg-tertiary"
                        )}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="text-lg font-mono tracking-widest">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>{/* Optional footer nav/item */}</SidebarFooter>
    </Sidebar>
  );
}
