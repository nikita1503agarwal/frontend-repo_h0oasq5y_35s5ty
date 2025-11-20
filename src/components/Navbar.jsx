import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#productos', label: 'Productos' },
    { href: '#calidad', label: 'Calidad' },
    { href: '#reseñas', label: 'Reseñas' },
    { href: '#nosotros', label: 'Nosotros' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <img src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=256&auto=format&fit=crop" alt="Logo Borrego" className="w-8 h-8 rounded-full object-cover" />
            <span className="font-extrabold tracking-tight text-slate-900">Borrego MX</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#comprar" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition-colors">
              <ShoppingBag className="w-5 h-5" />
              Comprar ahora
            </a>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-700">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
              <a href="#comprar" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg bg-rose-600 text-white text-center">
                Comprar ahora
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
