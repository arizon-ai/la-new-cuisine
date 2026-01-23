import React, { useState, useRef } from 'react';
import { ChefHat, Clock, MapPin, Phone, Mail, ArrowRight, ArrowLeft, Printer, ChevronDown } from 'lucide-react';

// ============================================
// PRESENTACIÓN BROCHURE - LA NEW CUISINE
// Diseño: Moderno, Minimalista, Impactante
// ============================================

export default function PresentacionBrochure() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef(null);

    const totalSlides = 8;

    const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
    const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));
    const goToSlide = (index) => setCurrentSlide(index);

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            {/* Print Styles */}
            <style>{`
        @media print {
          body { margin: 0; }
          .no-print { display: none !important; }
          .print-page { 
            page-break-after: always; 
            min-height: 100vh;
            display: flex !important;
            opacity: 1 !important;
          }
          .brochure-container { 
            height: auto !important; 
            overflow: visible !important;
          }
          .slide-wrapper {
            transform: none !important;
          }
        }
        @page {
          size: A4 landscape;
          margin: 0;
        }
      `}</style>

            {/* Navigation Controls - No Print */}
            <div className="no-print fixed top-6 right-6 z-50 flex items-center gap-4">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all"
                >
                    <Printer className="w-4 h-4" />
                    Imprimir PDF
                </button>
            </div>

            {/* Slide Navigation - No Print */}
            <div className="no-print fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 bg-white/90 backdrop-blur-lg px-8 py-4 border border-black/10">
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="p-2 hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === i ? 'bg-black scale-125' : 'bg-gray-300 hover:bg-gray-500'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    disabled={currentSlide === totalSlides - 1}
                    className="p-2 hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ArrowRight className="w-5 h-5" />
                </button>

                <span className="text-sm font-mono text-gray-500 ml-4">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                </span>
            </div>

            {/* Brochure Container */}
            <div ref={containerRef} className="brochure-container h-screen overflow-hidden bg-white">
                <div
                    className="slide-wrapper h-full transition-transform duration-700 ease-out"
                    style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
                >

                    {/* ========== SLIDE 1: PORTADA ========== */}
                    <section className="print-page h-screen flex items-center justify-center bg-white relative">
                        <div className="absolute inset-0 flex">
                            <div className="w-1/2 bg-white"></div>
                            <div className="w-1/2 bg-black"></div>
                        </div>

                        <div className="relative z-10 text-center">
                            <img
                                src="/logo.png"
                                alt="La New Cuisine"
                                className="mx-auto mb-12 w-[400px] max-w-[80vw]"
                            />
                            <div className="flex items-center justify-center gap-8">
                                <div className="text-right text-black pr-8 border-r-2 border-black">
                                    <p className="text-6xl font-serif font-bold">22+</p>
                                    <p className="text-xs uppercase tracking-[0.3em] mt-2">Años</p>
                                </div>
                                <div className="text-left text-white pl-8">
                                    <p className="text-6xl font-serif font-bold">2026</p>
                                    <p className="text-xs uppercase tracking-[0.3em] mt-2">Temporada</p>
                                </div>
                            </div>
                            <div className="mt-16">
                                <span className="inline-flex items-center gap-3 text-white">
                                    <span className="w-20 h-px bg-white"></span>
                                    <span className="text-sm uppercase tracking-[0.4em]">Escuela de Alta Cocina</span>
                                    <span className="w-20 h-px bg-white"></span>
                                </span>
                            </div>
                        </div>

                        <div className="no-print absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                            <ChevronDown className="w-8 h-8 text-gray-400" />
                        </div>
                    </section>

                    {/* ========== SLIDE 2: CARRERAS ========== */}
                    <section className="print-page h-screen flex bg-white">
                        <div className="w-1/3 bg-black text-white p-16 flex flex-col justify-center">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">01</p>
                            <h2 className="text-5xl font-serif font-bold leading-tight mb-8">
                                Carreras<br />Profesionales
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                Formación integral con certificación oficial del Ministerio de Educación.
                            </p>
                        </div>

                        <div className="w-2/3 p-16 flex flex-col justify-center">
                            <div className="grid gap-8">
                                {/* Cocina Internacional */}
                                <div className="group border-b border-gray-200 pb-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-3xl font-serif font-bold">Chef en Cocina Internacional</h3>
                                            <p className="text-gray-500 mt-2">15 meses + pasantías • 3 niveles</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-4xl font-bold">140€</p>
                                            <p className="text-xs text-gray-400 uppercase">mensual</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 text-sm text-gray-600">
                                        <span>📅 Lun 02/02 • Mar 10/02</span>
                                        <span>🌙 Nocturno 23 Feb</span>
                                        <span>📦 Kit: 130€</span>
                                    </div>
                                </div>

                                {/* Chef Pastelero */}
                                <div className="group border-b border-gray-200 pb-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-3xl font-serif font-bold">Chef Pastelero</h3>
                                            <p className="text-gray-500 mt-2">Niveles progresivos • Pastelería francesa</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-4xl font-bold">140€</p>
                                            <p className="text-xs text-gray-400 uppercase">mensual</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 text-sm text-gray-600">
                                        <span>📅 Mié/Jue 25-26 Feb</span>
                                        <span>🌙 Nocturno Lun 23 Feb</span>
                                        <span>📦 Kit: 90€</span>
                                    </div>
                                </div>

                                {/* Chef Panadero */}
                                <div className="group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-3xl font-serif font-bold">Chef Panadero</h3>
                                            <p className="text-gray-500 mt-2">8 meses • Masa madre, ciabatta, focaccia</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-4xl font-bold">140€</p>
                                            <p className="text-xs text-gray-400 uppercase">mensual</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 text-sm text-gray-600">
                                        <span>📅 Lunes tarde o nocturno</span>
                                        <span>📦 Kit: 90€</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-xs text-gray-400 mt-8">* Inscripción: 50€ para todos los programas</p>
                        </div>
                    </section>

                    {/* ========== SLIDE 3: INTENSIVO ========== */}
                    <section className="print-page h-screen flex bg-black text-white">
                        <div className="w-1/2 p-20 flex flex-col justify-center">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">02</p>
                            <h2 className="text-6xl font-serif font-bold leading-tight mb-8">
                                Programa<br /><span className="italic">Intensivo</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
                                Formación acelerada de martes a viernes. Completa los 3 niveles en tiempo récord.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-5xl font-bold">24</span>
                                    <span className="text-gray-500">Febrero 2026</span>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="text-5xl font-bold">6:00</span>
                                    <span className="text-gray-500">PM a 9:30 PM</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 bg-white text-black p-20 flex flex-col justify-center">
                            <div className="max-w-sm">
                                <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">Inversión</p>
                                <p className="text-8xl font-bold mb-4">2,640€</p>
                                <p className="text-gray-500 mb-12">Inscripción 100€ + 2 cuotas de 1,320€</p>

                                <div className="space-y-4 text-lg">
                                    <div className="flex items-center gap-4">
                                        <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">1</span>
                                        <span>Nivel Básico</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">2</span>
                                        <span>Nivel Intermedio</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">3</span>
                                        <span>Nivel Avanzado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 4: PROGRAMAS CORTOS ========== */}
                    <section className="print-page h-screen flex bg-neutral-50">
                        <div className="w-full p-20 flex flex-col justify-center">
                            <div className="max-w-6xl mx-auto">
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">03</p>
                                <h2 className="text-5xl font-serif font-bold mb-16">Programas Cortos</h2>

                                <div className="grid grid-cols-2 gap-12">
                                    {/* Junior Chef */}
                                    <div className="bg-white p-12 border-l-4 border-black">
                                        <h3 className="text-3xl font-serif font-bold mb-2">Junior Chef</h3>
                                        <p className="text-gray-500 mb-6">Niños (6-12) y Adolescentes (13-16)</p>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase">Inicio</p>
                                                <p className="font-bold">Vie 20 Feb 2026</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase">Horario</p>
                                                <p className="font-bold">2:00 - 6:00 PM</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase">Duración</p>
                                                <p className="font-bold">4 meses</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase">Incluye</p>
                                                <p className="font-bold">Ingredientes + Certificado</p>
                                            </div>
                                        </div>

                                        <div className="flex items-baseline gap-2 pt-6 border-t">
                                            <span className="text-4xl font-bold">150€</span>
                                            <span className="text-gray-400">/mes</span>
                                            <span className="text-sm text-gray-400 ml-4">Inscripción 50€ (incluye uniforme)</span>
                                        </div>
                                    </div>

                                    {/* Asistente */}
                                    <div className="bg-white p-12 border-l-4 border-black">
                                        <h3 className="text-3xl font-serif font-bold mb-2">Asistente de Chef</h3>
                                        <p className="text-gray-500 mb-6">Iniciación profesional en cocina</p>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase">Inicio</p>
                                                <p className="font-bold">Vie 18 Feb 2026</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase">Horario</p>
                                                <p className="font-bold">6:00 - 9:30 PM</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase">Duración</p>
                                                <p className="font-bold">4 meses</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase">Kit</p>
                                                <p className="font-bold">130€ (2 cuchillos)</p>
                                            </div>
                                        </div>

                                        <div className="flex items-baseline gap-2 pt-6 border-t">
                                            <span className="text-4xl font-bold">120€</span>
                                            <span className="text-gray-400">/mes</span>
                                            <span className="text-sm text-gray-400 ml-4">Inscripción 50€</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 5: DIPLOMADO ========== */}
                    <section className="print-page h-screen flex bg-white">
                        <div className="w-1/2 p-20 flex flex-col justify-center border-r border-gray-200">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">04</p>
                            <h2 className="text-5xl font-serif font-bold leading-tight mb-8">
                                Diplomado en<br />Gerencia<br />Gastronómica
                            </h2>
                            <p className="text-gray-500 mb-8 max-w-md">
                                Formación integral para chefs, emprendedores y profesionales del sector alimentario.
                            </p>

                            <div className="grid grid-cols-3 gap-6">
                                <div className="text-center p-4 bg-black text-white">
                                    <p className="text-3xl font-bold">4</p>
                                    <p className="text-xs uppercase">Meses</p>
                                </div>
                                <div className="text-center p-4 border border-black">
                                    <p className="text-3xl font-bold">50€</p>
                                    <p className="text-xs uppercase">Inscripción</p>
                                </div>
                                <div className="text-center p-4 border border-black">
                                    <p className="text-3xl font-bold">130€</p>
                                    <p className="text-xs uppercase">Mensual</p>
                                </div>
                            </div>

                            <div className="mt-8 text-sm text-gray-500">
                                <p>📅 Martes 3 Feb: 2:00 - 6:00 PM</p>
                                <p>📅 Sábado 31 Ene: 8:00 - 12:30</p>
                            </div>
                        </div>

                        <div className="w-1/2 p-20 flex flex-col justify-center bg-neutral-50">
                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">Contenido</p>
                            <ul className="space-y-4 text-lg">
                                {[
                                    'Modelo Canvas & Emprendimiento',
                                    'Marketing Gastronómico',
                                    'Neuromarketing',
                                    'Liderazgo & Capital Humano',
                                    'Diseño de Espacios',
                                    'Ingeniería del Menú',
                                    'Presupuestos & Control',
                                    'Marco Jurídico',
                                    'Higiene & Salud Ocupacional',
                                    'Plan de Negocio Final'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <span className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs">{i + 1}</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* ========== SLIDE 6: TALLER MOLECULAR ========== */}
                    <section className="print-page h-screen flex bg-black text-white">
                        <div className="w-full p-20 flex items-center justify-center">
                            <div className="text-center max-w-3xl">
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">05 • Masterclass</p>
                                <h2 className="text-7xl font-serif font-bold mb-8">
                                    ABC Cocina<br /><span className="italic">Molecular</span>
                                </h2>
                                <p className="text-xl text-gray-400 mb-16">
                                    Esferificaciones, espumas etéreas y geles que desafían la gravedad.
                                </p>

                                <div className="inline-flex items-center gap-16 text-left">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase mb-2">Chef</p>
                                        <p className="text-2xl font-bold">Jesús Gil</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase mb-2">Fecha</p>
                                        <p className="text-2xl font-bold">3 Feb 2026</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase mb-2">Horario</p>
                                        <p className="text-2xl font-bold">2:00 - 6:00 PM</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase mb-2">Inversión</p>
                                        <p className="text-2xl font-bold">40€</p>
                                    </div>
                                </div>

                                <p className="mt-12 text-sm text-gray-500">Incluye certificado e insumos</p>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 7: SERVICIOS ========== */}
                    <section className="print-page h-screen flex bg-neutral-50">
                        <div className="w-full p-20 flex flex-col justify-center">
                            <div className="max-w-6xl mx-auto">
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">06</p>
                                <h2 className="text-5xl font-serif font-bold mb-16">Servicios</h2>

                                <div className="grid grid-cols-4 gap-8">
                                    <div className="p-8 bg-white border-t-4 border-black">
                                        <h3 className="text-xl font-bold mb-4">Asesorías</h3>
                                        <ul className="text-sm text-gray-600 space-y-2">
                                            <li>• Propuesta gastronómica</li>
                                            <li>• Diseño de menú</li>
                                            <li>• Costeo & fichas técnicas</li>
                                            <li>• Capacitación</li>
                                            <li>• Ingeniería del menú</li>
                                            <li>• Diseño de espacios</li>
                                        </ul>
                                    </div>

                                    <div className="p-8 bg-white border-t-4 border-black">
                                        <h3 className="text-xl font-bold mb-4">Chef at Home</h3>
                                        <ul className="text-sm text-gray-600 space-y-2">
                                            <li>• Planificación de menú</li>
                                            <li>• Compra de ingredientes</li>
                                            <li>• Servicio a domicilio</li>
                                        </ul>
                                    </div>

                                    <div className="p-8 bg-white border-t-4 border-black">
                                        <h3 className="text-xl font-bold mb-4">Catering</h3>
                                        <ul className="text-sm text-gray-600 space-y-2">
                                            <li>• Brunch & desayunos</li>
                                            <li>• Eventos corporativos</li>
                                            <li>• Pasapalos & postres</li>
                                            <li>• Buffets</li>
                                            <li>• Mesas temáticas</li>
                                        </ul>
                                    </div>

                                    <div className="p-8 bg-white border-t-4 border-black">
                                        <h3 className="text-xl font-bold mb-4">Alquiler</h3>
                                        <ul className="text-sm text-gray-600 space-y-2">
                                            <li>• Cocina para producción</li>
                                            <li>• Espacios para eventos</li>
                                            <li>• Colocación de talento</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 8: CONTACTO ========== */}
                    <section className="print-page h-screen flex bg-white">
                        <div className="w-1/2 bg-black text-white p-20 flex flex-col justify-center">
                            <h2 className="text-6xl font-serif font-bold leading-tight mb-12">
                                Comienza<br />tu legado<br /><span className="italic">culinario</span>
                            </h2>

                            <a
                                href="https://wa.me/584244635196"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 text-lg font-bold uppercase tracking-widest hover:bg-gray-100 transition-all w-fit"
                            >
                                Inscríbete Ahora
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="w-1/2 p-20 flex flex-col justify-center">
                            <div className="space-y-12">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">WhatsApp</p>
                                    <p className="text-3xl font-bold">+58 424-4635196</p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Ubicación</p>
                                    <p className="text-xl">Av. 107, Casa 128-11</p>
                                    <p className="text-xl">Urb. Sabana Larga</p>
                                    <p className="text-gray-500">Frente a Mediterranean Plaza • Valencia</p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Email</p>
                                    <p className="text-xl">info@lanewcuisine.com</p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Redes Sociales</p>
                                    <p className="text-xl">@lanewcuisine</p>
                                </div>
                            </div>

                            <div className="mt-16 pt-8 border-t border-gray-200">
                                <p className="text-sm text-gray-400">
                                    Registro MPPE No. R-0129-08 • © 2026 La New Cuisine
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    );
}
