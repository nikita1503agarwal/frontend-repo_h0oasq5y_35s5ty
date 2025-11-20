import { ShieldCheck, ThermometerSun, Feather, Recycle } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <ThermometerSun className="w-6 h-6 text-rose-600" />,
      title: 'Calor natural',
      desc: 'La lana de borrego regula la temperatura y mantiene tus pies cómodos todo el día.'
    },
    {
      icon: <Feather className="w-6 h-6 text-rose-600" />,
      title: 'Suavidad premium',
      desc: 'Plantilla acolchada y forro esponjoso para una sensación de nube.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose-600" />,
      title: 'Durabilidad garantizada',
      desc: 'Suela antideslizante y costuras reforzadas para uso diario.'
    },
    {
      icon: <Recycle className="w-6 h-6 text-rose-600" />,
      title: 'Sustentables',
      desc: 'Materiales locales y procesos responsables con el medio ambiente.'
    }
  ]

  return (
    <section id="calidad" className="py-20 bg-gradient-to-b from-white to-rose-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Calidad que se siente</h2>
        <p className="text-slate-600 text-center mt-2 max-w-2xl mx-auto">Cada par es elaborado por artesanos mexicanos con tradición zapatera. Hechas para durar, hechas para querer.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 shadow ring-1 ring-slate-200">
              <div className="w-10 h-10 grid place-content-center rounded-lg bg-rose-100 mb-3">
                {f.icon}
              </div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
