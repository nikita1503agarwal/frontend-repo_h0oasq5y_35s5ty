export default function Products() {
  const products = [
    {
      name: 'Clásicas Borrego MX',
      price: 699,
      img: 'https://images.unsplash.com/photo-1603568243651-1a4ac07c8546?q=80&w=1200&auto=format&fit=crop',
      tag: 'Más vendidas'
    },
    {
      name: 'Edición Artesanal',
      price: 849,
      img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop',
      tag: 'Hechas a mano'
    },
    {
      name: 'Ultrasuaves',
      price: 749,
      img: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200&auto=format&fit=crop',
      tag: 'Novedad'
    }
  ]

  return (
    <section id="productos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Nuestros favoritos</h2>
            <p className="text-slate-600 mt-2">Calidad superior con materiales locales. Envío a todo México.</p>
          </div>
          <a href="#comprar" className="hidden sm:inline-flex px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Ver todo</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group bg-white rounded-2xl overflow-hidden shadow ring-1 ring-slate-200">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <span className="text-rose-600 font-bold">${'{'}p.price{'}'}</span>
                </div>
                <p className="mt-1 inline-flex px-2 py-0.5 text-xs rounded-full bg-rose-100 text-rose-700">{p.tag}</p>
                <a href="#comprar" className="mt-4 block w-full text-center px-4 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700">Comprar</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
