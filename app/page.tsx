import Link from "next/link";
export default function Home() {
  return (
    <main className="grow">
      {/* Hero Section */}
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
                  <span className="text-brand-red">
                    Automaticienne de tests
                  </span>
                </h1>
                <h2 className="text-lg lg:text-xl font-semibold text-gray-600">
                  {" "}
                  Développeuse | Ingénieure Pédagogique Digital
                </h2>
                <span className="tag">Temps partiel & Hybride</span>
              </div>
              <p className="text-xl font-medium text-brand-black italic border-l-4 border-brand-orange pl-4 py-1">
                L'excellence technique au service de la fiabilité, avec une
                vision globale de votre produit.
              </p>
              <p className="text-gray-600 leading-relaxed max-w-2xl text-justify">
                Ma recherche de poste s'inscrit dans une démarche
                pluridisciplinaire. L'assurance qualité, le développement et
                l'ingénierie pédagogique sont des domaines qui se recoupent et
                me passionnent profondément. Mon mot d'ordre : la{" "}
                <strong>flexibilité</strong> et <strong>l'adptation</strong> à
                vos défis technologiques et humains.
              </p>
              {/*CTA*/}
              <div id="cta"><Link href="">Découvrir mon CV</Link></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
