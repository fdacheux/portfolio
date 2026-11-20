"use client";

import Image from "next/image";
import Link from "next/link";
// import { openContactModal } from "../ContactModal/ContactModal";

function HeroSection() {
  return (
    <section
      id="hero"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
    >
      {/*Introduction card */}
      <div className="relative bg-white rounded-3xl shadow-xl p-8 lg:p-12 overflow-hidden border border-gray-100">
        {/*Background decoration*/}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-linear-to-br from-brand-red to-brand-orange opacity-10 blur-3xl"></div>
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center lg:items-start relative z-10">
          {/*Text content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-brand-black leading-tight">
                Testeuse QA /
                <br />
                <span className="text-brand-red">Automaticienne de tests</span>
              </h1>
              <h2 className="text-lg lg:text-xl font-semibold text-gray-600">
                {" "}
                Développeuse | Ingénieure Pédagogique Digital
              </h2>
              <span className="tag">Temps partiel & Hybride</span>
            </div>
            <p className="text-xl font-medium text-brand-black italic border-l-4 border-brand-orange pl-4 py-1">
              L'excellence technique au service de la fiabilité, avec une vision
              globale de votre produit.
            </p>
            <p className="text-gray-600 leading-relaxed max-w-2xl text-justify">
              Ma recherche de poste s'inscrit dans une démarche
              pluridisciplinaire. L'assurance qualité, le développement et
              l'ingénierie pédagogique sont des domaines qui se recoupent et me
              passionnent profondément. Mon mot d'ordre : la{" "}
              <strong>flexibilité</strong> et <strong>l'adptation</strong> à vos
              défis technologiques et humains.
            </p>
            {/*CTA*/}
            <div id="cta" className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/CV"
                className="block rounded-full btn-primary text-white text-center font-semibold py-3 px-8 shadow-lg "
              >
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
                    <path
                      fillRule="evenodd"
                      d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z"
                      clipRule="evenodd"
                    />
                    <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                  </svg>
                  Découvrir mon CV
                </div>
              </Link>
              <Link
                href="/projects"
                className="block btn-secondary border-2 border-brand-black text-brand-black text-center font-semibold py-3 px-8 rounded-full"
              >
                <div className="flex gap-2">
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
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                  Découvrir mes projets
                </div>
              </Link>
              {/* <button
                type="button"
                onClick={openContactModal}
                className="block rounded-full border-2 border-brand-black text-brand-black text-center font-semibold py-3 px-8 cursor-pointer"
              >
                Me contacter
              </button> */}
            </div>
            {/* Photo */}
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition duration-300 border-4 border-white bg-gray-200 flex items-center justify-center group">
              {" "}
              <div className="w-full h-full relative">
                <Image
                  src="/assets/cv_photo.jpg"
                  className="max-w-none max-h-none h-auto absolute md:-left-45 -left-50"
                  alt="Fanny Dacheux"
                  width={600}
                  height={800}
                  objectFit="contain"
                  objectPosition="center"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
