'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Home, Utensils, Settings } from 'lucide-react';

const links = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Menu', href: '/menu', icon: Utensils },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-4 fixed left-0 top-0">
      <h1 className="text-xl font-bold mb-6">AR Menu</h1>

      <NavigationMenu orientation="vertical">
        <NavigationMenuList className="flex flex-col gap-2">
          {links.map((link) => (
            <NavigationMenuItem key={link.name}>
              <Link href={link.href} passHref legacyBehavior>
                <NavigationMenuLink className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors">
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
}
