"use client";

import { useState } from "react";

function JobFilters() {
  const [activeFilter, setActiveFilter] = useState("Tous les profils");

  return (
    <div className="filters-box">
      <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
        <span className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            viewBox="0 0 24 24"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
        </span>
        <span className="filters-box_label">
          Adapter l'affichage selon le poste recherché :
        </span>{" "}
      </div>
      <ul
        className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5 md:pb-0"
        id="role-filter-bar"
        role="tablist"
        aria-label="Filtrer par métier"
      >
        <li>
          <button
            className={
              activeFilter === "Tous les profils"
                ? "filter-btn_active"
                : "filter-btn_inactive"
            }
            onClick={() => setActiveFilter("Tous les profils")}
          >
            Tous les profils
          </button>
        </li>
        <li>
          <button
            className={
              activeFilter === "QA & Tests"
                ? "filter-btn_active"
                : "filter-btn_inactive"
            }
            onClick={() => setActiveFilter("QA & Tests")}
          >
            QA & Tests
          </button>
        </li>
        <li>
          <button
            className={
              activeFilter === "Développement Web"
                ? "filter-btn_active"
                : "filter-btn_inactive"
            }
            onClick={() => setActiveFilter("Développement Web")}
          >
            Développement Web
          </button>
        </li>
        <li>
          <button
            className={
              activeFilter === "Pédagogie & Digital"
                ? "filter-btn_active"
                : "filter-btn_inactive"
            }
            onClick={() => setActiveFilter("Pédagogie & Digital")}
          >
            Pédagogie & Digital
          </button>
        </li>
      </ul>
    </div>
  );
}

export default JobFilters;
