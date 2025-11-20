import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <section id="reseñas" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Lo que dicen nuestros clientes</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[{
                name: 'Daniela',
                text: 'Las mejores pantuflas que he tenido. Súper calientitas y cómodas.',
                city: 'CDMX'
              },{
                name: 'Luis',
                text: 'Se nota la calidad artesanal. Valen cada peso.',
                city: 'Guadalajara'
              },{
                name: 'María',
                text: 'Las compré para mi mamá y ahora quiere otro par.',
                city: 'Monterrey'
              }].map((r) => (
                <div key={r.name} className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <img src={`https://i.pravatar.cc/48?u=${r.name}`} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-slate-900">{r.name}</p>
                      <p className="text-sm text-slate-600">{r.city}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-slate-700">“{r.text}”</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="nosotros" className="py-20 bg-gradient-to-b from-rose-50/60 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Orgullosamente mexicanos</h2>
              <p className="mt-3 text-slate-700">Somos una empresa familiar de León, Guanajuato, con tradición zapatera. Nuestro objetivo es llevar el confort del borrego a todo México con procesos responsables y empleo local.</p>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                <li>Materiales de proveedores locales</li>
                <li>Pago justo a nuestros artesanos</li>
                <li>Producción de bajo impacto</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1606077089119-92075161bb60?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcnRlc2Fub3MlMjB0cmFiYWphbmRvfGVufDB8MHx8fDE3NjM2NjAyNzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Artesanos trabajando" className="rounded-3xl w-full h-full object-cover shadow ring-1 ring-slate-200" />
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600">© {new Date().getFullYear()} Borrego MX. Hecho con amor en México.</p>
          <div className="text-slate-500 text-sm">Whatsapp: +52 477 000 0000 · Envíos a todo el país</div>
        </div>
      </footer>
    </div>
  )
}

export default App
