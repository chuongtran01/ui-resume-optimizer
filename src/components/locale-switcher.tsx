import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { Button } from "./ui/button";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const locale = useLocale();

  const onSelectChange = (nextLocale: Locale) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale }
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{locale.toLocaleUpperCase()}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {routing.locales.map((locale) => (
          <DropdownMenuItem key={locale} onClick={() => onSelectChange(locale)}>
            <span>{locale}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
