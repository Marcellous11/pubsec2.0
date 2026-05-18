"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavLink = { href: string; label: string };

export function MobileNav({ links }: { links: NavLink[] }) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger
          aria-label="Open menu"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-text-muted transition-colors hover:text-text"
        >
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-full gap-0 border-0 px-6 sm:max-w-sm"
        >
          <SheetHeader className="p-0">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
          </SheetHeader>

          <nav
            className="mt-12 flex flex-col gap-2 overflow-y-auto pb-10"
            aria-label="Mobile"
          >
            {links.map((l) => (
              <SheetClose asChild key={l.href}>
                <Link
                  href={l.href}
                  className="border-b border-[var(--border)] py-4 text-2xl font-medium text-text-muted transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
