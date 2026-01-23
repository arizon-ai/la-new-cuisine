import React from 'react';
import {
    ChefHat, GraduationCap, Clock, Calendar, MapPin, Phone, Mail,
    Award, Users, Utensils, Star, ArrowRight, Check, Sparkles,
    BookOpen, Building, Home as HomeIcon, DollarSign, Package
} from 'lucide-react';

// ============================================
// PRESENTACIÓN BROCHURE - LA NEW CUISINE
// Diseño: Fondo blanco, texto negro, impactante
// ============================================

export default function PresentacionBrochure() {
    return (
        <div className="min-h-screen bg-white text-black font-sans">

            {/* ========== SLIDE 1: HERO PORTADA ========== */}
            <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />

                <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
                    {/* Logo grande */}
                    <img
                        src="/logo.png"
                        alt="La New Cuisine"
                        className="mx-auto mb-8 w-[500px] max-w-[90%] h-auto"
                    />

                    {/* Tagline con estilo editorial */}
                    <div className="mb-12">
                        <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4">
                            Escuela de
                            <span className="block text-6xl md:text-8xl italic">Alta Cocina</span>
                        </h2>
                    </div>

                    {/* Stats en línea */}
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-16">
                        <div className="text-center">
                            <p className="text-6xl md:text-7xl font-bold font-serif">22+</p>
                            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mt-2">Años de Experiencia</p>
                        </div>
                        <div className="text-center">
                            <p className="text-6xl md:text-7xl font-bold font-serif">2002</p>
                            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mt-2">Desde</p>
                        </div>
                        <div className="text-center">
                            <p className="text-6xl md:text-7xl font-bold font-serif">R-0129</p>
                            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mt-2">Registro MPPE</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-3 border-2 border-black px-8 py-4 text-lg font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer">
                        <span>Inscripciones Abiertas</span>
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center pt-2">
                        <div className="w-1 h-3 bg-black rounded-full animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* ========== SLIDE 2: ¿QUIÉNES SOMOS? ========== */}
            <section className="min-h-screen flex items-center bg-neutral-50 py-24">
                <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
                    {/* Texto */}
                    <div>
                        <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">Sobre Nosotros</span>
                        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                            Formamos <span className="italic">artistas</span> culinarios
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Somos una empresa dedicada al rubro gastronómico con más de 22 años de experiencia,
                            formando chefs profesionales en las carreras de cocina internacional, pastelería y panadería.
                        </p>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Capacitamos y brindamos las herramientas a nuevos emprendedores para iniciar sus negocios
                            con las estrategias necesarias para lograr el éxito.
                        </p>

                        {/* Características */}
                        <div className="grid grid-cols-2 gap-4">
                            {['Certificación Oficial', 'Chefs Expertos', 'Prácticas Reales', 'Bolsa de Empleo'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Imagen / Visual */}
                    <div className="relative">
                        <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80"
                                alt="Chef cocinando"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-6">
                                <p className="text-sm uppercase tracking-widest mb-1">Valencia, Venezuela</p>
                                <p className="text-2xl font-serif">Urb. Sabana Larga</p>
                            </div>
                        </div>
                        {/* Decoración */}
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 border-4 border-black -z-10"></div>
                    </div>
                </div>
            </section>

            {/* ========== SLIDE 3: CARRERAS PRINCIPALES ========== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">Nuestras Carreras</span>
                        <h2 className="text-5xl md:text-6xl font-serif font-bold">Programas Profesionales</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-0 border-2 border-black">
                        {/* Chef Cocina Internacional */}
                        <div className="border-b md:border-b-0 md:border-r border-black p-8 lg:p-10">
                            <div className="flex items-center gap-3 mb-4">
                                <Utensils className="w-7 h-7" />
                                <span className="text-xs uppercase tracking-widest bg-black text-white px-2 py-1">Carrera Larga</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-3">Chef en Cocina Internacional</h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                Formación integral desde técnicas fundamentales hasta la vanguardia molecular. 3 niveles: Básico, Intermedio y Avanzado.
                            </p>

                            {/* Horarios */}
                            <div className="bg-neutral-50 p-4 mb-4 text-sm">
                                <p className="font-bold mb-2 flex items-center gap-2"><Clock className="w-4 h-4" /> Horarios Disponibles:</p>
                                <ul className="space-y-1 text-gray-600">
                                    <li>• Lunes 26/01 y Martes 10/02: 2:00-5:30 PM</li>
                                    <li>• Sábados: 8:00 AM - 12:30 PM</li>
                                    <li>• Nocturno (23 Feb): Lunes 6:00-9:30 PM</li>
                                </ul>
                            </div>

                            {/* Inversión */}
                            <div className="border-t pt-4 space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Inscripción</span>
                                    <span className="font-bold">50 €</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Mensualidad</span>
                                    <span className="font-bold text-xl">140 €</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>Kit de estudio</span>
                                    <span>130 €</span>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">*Kit: filipina, gorro, delantal, 2 cuchillos. Financiamiento 2 cuotas</p>
                            </div>

                            <div className="mt-4 pt-4 border-t">
                                <p className="text-xs text-gray-500"><Clock className="w-3 h-3 inline mr-1" /> 15 meses + pasantías</p>
                            </div>
                        </div>

                        {/* Chef Pastelero */}
                        <div className="border-b md:border-b-0 md:border-r border-black p-8 lg:p-10">
                            <div className="flex items-center gap-3 mb-4">
                                <Sparkles className="w-7 h-7" />
                                <span className="text-xs uppercase tracking-widest bg-black text-white px-2 py-1">Especialización</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-3">Chef Pastelero</h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                Técnicas de pastelería francesa, chocolatería fina, bombonería y arte del emplatado profesional.
                            </p>

                            {/* Horarios */}
                            <div className="bg-neutral-50 p-4 mb-4 text-sm">
                                <p className="font-bold mb-2 flex items-center gap-2"><Clock className="w-4 h-4" /> Horarios Disponibles:</p>
                                <ul className="space-y-1 text-gray-600">
                                    <li>• Mié/Jue 25-26 Feb: 8:00-12:30 / 2:00-5:30 PM</li>
                                    <li>• Sábado 28 Feb: 8:00 AM - 12:30 PM</li>
                                    <li>• Nocturno Lunes 23 Feb: 6:00-9:30 PM</li>
                                </ul>
                            </div>

                            {/* Inversión */}
                            <div className="border-t pt-4 space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Inscripción</span>
                                    <span className="font-bold">50 €</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Mensualidad</span>
                                    <span className="font-bold text-xl">140 €</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>Kit de estudio</span>
                                    <span>90 €</span>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">*Kit: filipina, gorro, delantal. Financiamiento 2 cuotas</p>
                            </div>

                            <div className="mt-4 pt-4 border-t">
                                <p className="text-xs text-gray-500"><Clock className="w-3 h-3 inline mr-1" /> Niveles progresivos</p>
                            </div>
                        </div>

                        {/* Chef Panadero */}
                        <div className="p-8 lg:p-10">
                            <div className="flex items-center gap-3 mb-4">
                                <ChefHat className="w-7 h-7" />
                                <span className="text-xs uppercase tracking-widest bg-black text-white px-2 py-1">Especialización</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-3">Chef Panadero</h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                Transforma tu pasión por el pan en una profesión. Desde pan campesino hasta masa madre y ciabatta.
                            </p>

                            {/* Horarios */}
                            <div className="bg-neutral-50 p-4 mb-4 text-sm">
                                <p className="font-bold mb-2 flex items-center gap-2"><Clock className="w-4 h-4" /> Horarios Disponibles:</p>
                                <ul className="space-y-1 text-gray-600">
                                    <li>• Lunes Tarde: 2:00-5:30 PM</li>
                                    <li>• Lunes Nocturno: 6:00-9:30 PM</li>
                                </ul>
                            </div>

                            {/* Inversión */}
                            <div className="border-t pt-4 space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Inscripción</span>
                                    <span className="font-bold">50 €</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Mensualidad</span>
                                    <span className="font-bold text-xl">140 €</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>Kit de estudio</span>
                                    <span>90 €</span>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">*Kit: filipina, gorro, delantal. Financiamiento 2 cuotas</p>
                            </div>

                            <div className="mt-4 pt-4 border-t">
                                <p className="text-xs text-gray-500"><Clock className="w-3 h-3 inline mr-1" /> 8 meses de duración</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== SLIDE 4: PROGRAMAS CORTOS ========== */}
            <section className="py-24 bg-black text-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">Formación Express</span>
                        <h2 className="text-5xl md:text-6xl font-serif font-bold">Programas Cortos</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Junior Chef */}
                        <div className="bg-white/5 backdrop-blur border border-white/10 p-8">
                            <div className="w-16 h-16 bg-white text-black flex items-center justify-center mb-6 text-3xl">
                                👨‍🍳
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-2">Junior Chef</h3>
                            <p className="text-sm text-gray-300 mb-4">Cocina para niños (6-12 años) y adolescentes (13-16 años)</p>

                            <div className="bg-white/5 p-4 mb-4 text-sm">
                                <p className="font-bold mb-2">📅 Viernes 20 de Febrero 2026</p>
                                <p className="text-gray-400">2:00 PM - 6:00 PM • 4 meses</p>
                            </div>

                            <ul className="space-y-2 text-sm text-gray-300 mb-6">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4" /> 2 platos salados + 1 postre por clase</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Ingredientes y recetas incluidos</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Certificado al finalizar</li>
                            </ul>

                            <div className="border-t border-white/20 pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Inscripción</span>
                                    <span>50 € <span className="text-xs text-gray-500">(incluye uniforme)</span></span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Mensualidad</span>
                                    <span className="text-2xl font-bold">150 €</span>
                                </div>
                            </div>
                        </div>

                        {/* Asistente de Chef */}
                        <div className="bg-white/5 backdrop-blur border border-white/10 p-8">
                            <div className="w-16 h-16 bg-white text-black flex items-center justify-center mb-6 text-3xl">
                                🍴
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-2">Asistente de Chef</h3>
                            <p className="text-sm text-gray-300 mb-4">Iniciación al mundo culinario profesional</p>

                            <div className="bg-white/5 p-4 mb-4 text-sm">
                                <p className="font-bold mb-2">📅 Viernes 18 de Febrero 2026</p>
                                <p className="text-gray-400">6:00 PM - 9:30 PM • 4 meses</p>
                            </div>

                            <ul className="space-y-2 text-sm text-gray-300 mb-6">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Cortes, fondos, salsas madres</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Carnes, pescados, mariscos</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Pastas, panes, pizzas</li>
                            </ul>

                            <div className="border-t border-white/20 pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Inscripción</span>
                                    <span>50 €</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Mensualidad</span>
                                    <span className="text-2xl font-bold">120 €</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Kit de estudio</span>
                                    <span>130 €</span>
                                </div>
                                <p className="text-xs text-gray-500">*Kit: filipina, gorro, delantal, 2 cuchillos</p>
                            </div>
                        </div>

                        {/* Intensivo */}
                        <div className="bg-white text-black p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-black text-white px-4 py-2 text-xs uppercase tracking-widest">
                                Intensivo
                            </div>
                            <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-6 text-3xl">
                                🚀
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-2">Cocina Internacional Intensivo</h3>
                            <p className="text-sm text-gray-600 mb-4">Formación acelerada completa</p>

                            <div className="bg-neutral-100 p-4 mb-4 text-sm">
                                <p className="font-bold mb-2">📅 24 de Febrero 2026</p>
                                <p className="text-gray-600">Mar-Vie 6:00 PM - 9:30 PM</p>
                            </div>

                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Nivel Básico completo</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Nivel Intermedio completo</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Nivel Avanzado completo</li>
                            </ul>

                            <div className="border-t pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Inscripción</span>
                                    <span className="font-bold">100 €</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Inversión total</span>
                                    <span className="text-2xl font-bold">2,640 €</span>
                                </div>
                                <p className="text-xs text-gray-500">*Pagadero en 2 cuotas de 1,320 €</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== SLIDE 5: DIPLOMADOS Y TALLERES ========== */}
            <section className="py-24 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">Formación Especializada</span>
                        <h2 className="text-5xl md:text-6xl font-serif font-bold">Diplomados y Talleres</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Diplomado */}
                        <div className="bg-white p-10 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <div className="flex items-center gap-3 mb-6">
                                <GraduationCap className="w-10 h-10" />
                                <span className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1">Diplomado</span>
                            </div>
                            <h3 className="text-3xl font-serif font-bold mb-4">Gerencia Gastronómica</h3>
                            <p className="text-gray-600 mb-6">
                                Formación integral para chefs, emprendedores y profesionales del sector alimentario.
                            </p>

                            {/* Horarios */}
                            <div className="bg-neutral-50 p-4 mb-6 text-sm">
                                <p className="font-bold mb-2">📅 Horarios Disponibles:</p>
                                <ul className="space-y-1 text-gray-600">
                                    <li>• Martes 3 Feb: 2:00-6:00 PM</li>
                                    <li>• Sábado 31 Ene: 8:00-12:30</li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-6">
                                <div className="bg-neutral-100 p-3 text-center">
                                    <p className="text-xs uppercase text-gray-500">Duración</p>
                                    <p className="font-bold">4 meses</p>
                                </div>
                                <div className="bg-neutral-100 p-3 text-center">
                                    <p className="text-xs uppercase text-gray-500">Inscripción</p>
                                    <p className="font-bold">50 €</p>
                                </div>
                                <div className="bg-neutral-100 p-3 text-center">
                                    <p className="text-xs uppercase text-gray-500">Mensualidad</p>
                                    <p className="font-bold">130 €</p>
                                </div>
                            </div>

                            <h4 className="font-bold text-sm uppercase tracking-widest mb-3">Contenido:</h4>
                            <ul className="space-y-2 text-sm">
                                {[
                                    'Emprendimiento y Modelo CANVAS',
                                    'Marketing Gastronómico',
                                    'Neuromarketing y Neurogastronomía',
                                    'Capital humano, liderazgo y coaching',
                                    'Diseño de espacios gastronómicos',
                                    'Ingeniería del menú y catering',
                                    'Presupuestos y control gastronómico',
                                    'Marco jurídico gastronómico',
                                    'Higiene y salud ocupacional',
                                    'Plan de Negocio Final'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Taller Molecular */}
                        <div className="bg-black text-white p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <Sparkles className="w-10 h-10" />
                                    <span className="text-xs uppercase tracking-widest bg-white text-black px-3 py-1">Masterclass</span>
                                </div>
                                <h3 className="text-3xl font-serif font-bold mb-4">ABC Cocina Molecular</h3>
                                <p className="text-gray-400 mb-6">
                                    ¡Revuelve la ciencia en tu cocina! Esferificaciones que estallan sabor, espumas etéreas y geles que desafían la gravedad.
                                </p>

                                <div className="bg-white/10 p-6 mb-6">
                                    <p className="text-sm text-gray-400 mb-1">Con el Chef</p>
                                    <p className="text-2xl font-bold mb-4">Jesús Gil</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase">Fecha</p>
                                            <p className="font-bold">3 de Febrero 2026</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase">Horario</p>
                                            <p className="font-bold">2:00 - 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p className="text-xs uppercase text-gray-400">Inversión</p>
                                        <p className="text-4xl font-bold">40 €</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="flex items-center gap-2 text-sm"><Check className="w-4 h-4" /> Certificado</p>
                                        <p className="flex items-center gap-2 text-sm"><Check className="w-4 h-4" /> Insumos incluidos</p>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-400 italic">
                                    "¡Cupo limitado! Inscríbete YA y crea magia gastronómica"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== SLIDE 6: SERVICIOS ========== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">Para Empresas y Particulares</span>
                        <h2 className="text-5xl md:text-6xl font-serif font-bold">Nuestros Servicios</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Asesorías */}
                        <div className="group p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
                            <Building className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Asesorías Gastronómica</h3>
                            <ul className="text-sm space-y-2 text-gray-600 group-hover:text-gray-300">
                                <li>• Diseño de propuesta gastronómica</li>
                                <li>• Diseño y carta de menú</li>
                                <li>• Costeo, estandarización, fichas técnicas</li>
                                <li>• Capacitación de personal</li>
                                <li>• Ingeniería del menú</li>
                                <li>• Diseño de espacios (neurogastronomía)</li>
                                <li>• Equipamiento de cocina</li>
                                <li>• Acompañamiento post apertura</li>
                            </ul>
                        </div>

                        {/* Chef at Home */}
                        <div className="group p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
                            <HomeIcon className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Chef at Home</h3>
                            <ul className="text-sm space-y-2 text-gray-600 group-hover:text-gray-300">
                                <li>• Planificación del menú</li>
                                <li>• Servicio de compra de ingredientes</li>
                                <li>• Ejecución y servicio a domicilio</li>
                            </ul>
                        </div>

                        {/* Catering */}
                        <div className="group p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
                            <Utensils className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Catering</h3>
                            <ul className="text-sm space-y-2 text-gray-600 group-hover:text-gray-300">
                                <li>• Brunch y desayunos</li>
                                <li>• Eventos sociales y corporativos</li>
                                <li>• Pasapalos y postres listos</li>
                                <li>• Buffets</li>
                                <li>• Mesas de quesos y dulces</li>
                                <li>• Mesas temáticas</li>
                            </ul>
                        </div>

                        {/* Alquiler y Servicios */}
                        <div className="group p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
                            <Users className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Alquiler y Más</h3>
                            <ul className="text-sm space-y-2 text-gray-600 group-hover:text-gray-300">
                                <li>• Cocina para producción</li>
                                <li>• Espacios para cumpleaños</li>
                                <li>• Eventos sociales y corporativos</li>
                                <li>• Colocación de talento</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== SLIDE 7: CONTACTO ========== */}
            <section className="py-24 bg-black text-white">
                <div className="max-w-5xl mx-auto px-8 text-center">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">
                        Comienza tu<br /><span className="italic">Legado Culinario</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
                        Estamos listos para recibirte. Agenda una visita guiada a nuestras instalaciones
                        o formaliza tu inscripción hoy mismo.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white/5 p-8 border border-white/10">
                            <Phone className="w-8 h-8 mx-auto mb-4" />
                            <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">WhatsApp</p>
                            <p className="text-2xl font-bold">+58 424-4635196</p>
                        </div>
                        <div className="bg-white/5 p-8 border border-white/10">
                            <MapPin className="w-8 h-8 mx-auto mb-4" />
                            <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Ubicación</p>
                            <p className="text-lg">Av. 107, Casa 128-11<br />Urb. Sabana Larga<br />Frente a Mediterranean Plaza</p>
                        </div>
                        <div className="bg-white/5 p-8 border border-white/10">
                            <Mail className="w-8 h-8 mx-auto mb-4" />
                            <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Email</p>
                            <p className="text-lg">info@lanewcuisine.com</p>
                            <p className="text-sm text-gray-500 mt-2">administracion@lanewcuisine.com.ve</p>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        <a href="https://facebook.com/lanewcuisine" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                            <span className="text-2xl">📘</span> La New Cuisine
                        </a>
                        <a href="https://instagram.com/lanewcuisine" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                            <span className="text-2xl">📸</span> @lanewcuisine
                        </a>
                        <a href="https://tiktok.com/@lanewcuisine" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                            <span className="text-2xl">🎵</span> @lanewcuisine
                        </a>
                    </div>

                    {/* CTA Final */}
                    <a
                        href="https://wa.me/584244635196"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-black px-12 py-5 text-lg font-bold uppercase tracking-widest hover:bg-gray-100 transition-all"
                    >
                        Inscríbete Ahora
                        <ArrowRight className="w-5 h-5" />
                    </a>

                    {/* Footer */}
                    <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                        <p>© 2026 La New Cuisine. Todos los derechos reservados.</p>
                        <p className="flex items-center gap-2 mt-2 md:mt-0">
                            <Award className="w-4 h-4" /> Registro MPPE No. R-0129-08
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
