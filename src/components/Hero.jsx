export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 opacity-20" aria-hidden>
        <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-rose-200 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-[36rem] h-[36rem] rounded-full bg-amber-200 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold">100% Hechas en México</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Pantuflas de borrego para pies felices
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Suaves, cálidas y hechas a mano con lana de borrego de origen responsable. Siéntete en casa donde sea que estés.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#comprar" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold shadow">
                Comprar ahora
              </a>
              <a href="#calidad" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold">
                Ver calidad
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=15" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=32" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=5" />
              </div>
              <p><span className="font-semibold">+1,200</span> clientes con pies calientitos</p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
              <img src="https://images.unsplash.com/photo-1635043359868-045bf818b8ee?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYW50dWZsYXMlMjBkZSUyMGJvcnJlZ298ZW58MHwwfHx8MTc2MzY2MDI3MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Pantuflas de borrego" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 ring-1 ring-slate-200">
              <p className="text-sm text-slate-700">Hechas a mano en León, Gto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
