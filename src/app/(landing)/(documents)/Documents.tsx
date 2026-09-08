"use client";

import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import Document from "@/components/Document";
import { documents } from "@/data/documents";
import { useSyncExternalStore } from "react";

const mediaQuery = "(max-width: 800px)";

const subscribe = (onChange: () => void) => {
  const mql = window.matchMedia(mediaQuery);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
};

const getSnapshot = () => window.matchMedia(mediaQuery).matches;
const getServerSnapshot = () => false;

const Documents = () => {
  const isMobile = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  const deviceType: "desktop" | "mobile" = isMobile ? "mobile" : "desktop";

  const getDocumentsForView = (deviceType: string) => {
    return deviceType === "mobile"
      ? documents.slice(0, 1)
      : documents.slice(0, 3);
  };

  const lastDocuments = getDocumentsForView(deviceType);

  return (
    <section id="documents" className="py-12 md:py-24">
      <div className="container flex flex-col gap-8 md:gap-12">
        <SectionTitle subTitle="جزوه های درسی" title="آخرین جزوه ها" />
        <div
          id="documents-list"
          className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {documents.length >= 1 ? (
            lastDocuments.map((item, idx) => (
              <Document
                key={idx}
                title={item.title}
                description={item.description}
                downloadLink={item.downloadLink}
                date={item.date}
              />
            ))
          ) : (
            <span className="text-yellow-500 font-bold">
              جزوه ای وجود ندارد
            </span>
          )}
        </div>
        {documents.length ? (
          <div className="flex justify-center">
            <Link href="/documents" className="btn-primary">
              مشاهده لیست جزوه ها
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Documents;
