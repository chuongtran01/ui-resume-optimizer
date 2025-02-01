"use client";

import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Home() {
  const count = useSelector((state: RootState) => state.principal);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("mr")}>मराठी</button>
    </div>
  );
}
