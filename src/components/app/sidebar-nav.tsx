'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserCircle, Swords, Aperture, MessageSquare, Users, BookOpen } from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const links = [
  { href: '/biography', label: 'Biography', icon: UserCircle, external: false },
  { href: '/moveset', label: 'Moveset', icon: Swords, external: false },
  { href: '/forms', label: 'Forms', icon: Aperture, external: false },
  { href: '/ask-luffy', label: 'Ask Luffy', icon: MessageSquare, external: false },
  { href: '/crew', label: 'Crew', icon: Users, external: false },
  { href: 'https://onepiece.fandom.com/wiki/Monkey_D._Luffy', label: 'Fandom Wiki', icon: BookOpen, external: true },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            isActive={!link.external && pathname.startsWith(link.href)}
            tooltip={link.label}
          >
            <Link 
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              <link.icon />
              <span>{link.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
