'use client'

import Image from "next/image";
import { openContactModal } from "../../_components/ContactModal/ContactModal";

function HeroSection() {
  return (
    <section className="hero relative bg-linear-to-br from-slate-950 via-slate-900 to-zinc-900 text-white overflow-hidden">
      {/* Decorative halos */}
      <div className="pointer-events-none absolute -top-28 -right-24 w-96 h-96 rounded-full bg-red-600/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-orange-500/15 blur-3xl"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      {/* Section main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          {/* Text and presentation column */}
          <div className="max-w-3xl space-y-5">
            {/* Status badge */}
            <div className="badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-xs sm:text-sm font-semibold text-orange-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="pb-1">
                Disponible — Temps partiel (50% à 80%) · Hybride / Full Remote
              </span>
            </div>
            {/* Title and subtitle */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Fanny Dacheux
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-400 via-orange-400 to-amber-300">
                Testeuse QA / Automaticienne de tests
              </h2>
              <h3 className="text-sm sm:text-base font-medium text-slate-300">
                Également ouverte aux postes de Développeuse Web & Ingénieure
                Pédagogique Digital
              </h3>
            </div>
            {/* Catch phrase */}
            <p className="text-slate-300/95 text-sm sm:text-base leading-relaxed max-w-2xl border-l-4 border-orange-500 pl-4 py-0.5">
              Un profil hybride qui conjugue la rigueur de l'assurance qualité,
              l'expérience concrète de développeuse fullstack et le sens de la
              transmission acquis en tant qu'ancienne professeure des écoles.
            </p>
            {/* Key indicators : dark pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="dark-pill">
                <svg
                  className="w-4 h-4 text-red-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="pill">Certifiée ISTQB CTFL v4.0</span>
              </span>
              <span className="dark-pill">
                <svg
                  className="w-4 h-4 text-orange-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="pill">Lattes / Montpellier & Remote</span>
              </span>
              <span className="dark-pill">
                <svg
                  className="w-4 h-4 text-slate-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="pill">Permis B · Véhicule personnel</span>
              </span>
            </div>
          </div>
          {/* Double CTA */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 min-w-[240px]">
            <button className="btn-primary text-white font-semibold px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2.5 shadow-lg text-sm sm:text-base cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              Télécharger mon CV (PDF)
            </button>
            <button type="button" onClick={openContactModal} className="bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-semibold px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2.5 transition-all text-sm sm:text-base cursor-pointer">
              <Image alt="" src="/icons/mail.svg" height={22} width={22} />
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
