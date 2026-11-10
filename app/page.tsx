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
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
