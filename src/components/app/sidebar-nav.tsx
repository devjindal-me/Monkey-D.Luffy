'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserCircle, Swords, Aperture, MessageSquare, Users } from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const links = [
  { href: '/biography', label: 'Biography', icon: UserCircle },
  { href: '/moveset', label: 'Moveset', icon: Swords },
  { href: '/forms', label: 'Forms', icon: Aperture },
  { href: '/ask-luffy', label: 'Ask Luffy', icon: MessageSquare },
  { href: '/crew', label: 'Crew', icon: Users },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname.startsWith(link.href)}
            tooltip={link.label}
          >
            <Link href={link.href}>
              <link.icon />
              <span>{link.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
