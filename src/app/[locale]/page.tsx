"use client";

import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";

export default function Home() {
  const count = useSelector((state: RootState) => state.principal);
  const dispatch = useDispatch();

  const t = useTranslations();

  return (
    <div>
      <h1>{t("HomePage.title")}</h1>
    </div>
  );
}
