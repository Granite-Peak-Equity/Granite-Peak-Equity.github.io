"use client";

import { useState } from "react";
import type { Property } from "@/lib/data";
import PortfolioCard from "./PortfolioCard";
import PropertyModal from "./PropertyModal";

export default function PortfolioGrid({
  properties,
}: {
  properties: Property[];
}) {
  const [selected, setSelected] = useState<Property | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((p) => (
          <PortfolioCard key={p.name} p={p} onOpen={() => setSelected(p)} />
        ))}
      </div>
      {selected && (
        <PropertyModal property={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
