export default function CTA() {
  return (
    <section id="comprar" className="py-20 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Dale calor a tus pasos</h2>
        <p className="mt-3 text-slate-300">Envío gratis en pedidos mayores a $999. Cambios sin costo por 30 días.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3">
          <input type="email" required placeholder="Tu correo para recibir promociones" className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-500" />
          <button className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 font-semibold">Quiero mi descuento</button>
        </form>
        <p className="mt-3 text-sm text-slate-400">Al registrarte aceptas recibir novedades y promociones.</p>
      </div>
    </section>
  )
}
