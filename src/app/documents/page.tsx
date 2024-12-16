"use client";

import Document from "@/components/Document";
import SectionTitle from "@/components/SectionTitle";
import { documents } from "@/data/documents";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import "./_pagination.scss";
import PaginatedItems from "./PaginatedItems";

const Documents = () => {
  return (
    <main className="mt-10 flex flex-col gap-[40px]">
      <SectionTitle subTitle="جزوه های درسی" title="لیست جزوه ها" />
      <PaginatedItems itemsPerPage={6} />
    </main>
  );
};

export default Documents;
