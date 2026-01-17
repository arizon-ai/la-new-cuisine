import React from 'react';
import {
    Calendar, Clock, MapPin, Star, Phone, Mail, Quote, Check, Award, Scissors
} from 'lucide-react';

// --- DATA ---
const courses = [
    {
        id: 'cocina',
        title: 'Chef en Cocina Internacional',
        subtitle: 'CARRERA LARGA',
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80',
        description: 'Nuestra formación insignia. Un recorrido integral desde las técnicas fundamentales hasta la vanguardia molecular. Duración: 15 meses más pasantías.',
        details: {
            duration: '15 Meses + Pasantías',
            start: 'Lunes 26 y Martes 27 Enero 2026',
            schedule: [
                'Lunes y Martes: 2:00 PM - 5:30 PM',
                'Sábados: 8:00 AM - 12:30 PM',
                'Nocturno Lunes: 6:00 PM - 9:30 PM'
            ],
            investment: [
                { label: 'Inscripción Básico', price: '50 €' },
                { label: 'Mensualidad Básico', price: '140 €' },
                { label: 'Kit de Estudio', price: '130 €', note: '*Incluye filipina, gorro, delantal, set de 2 cuchillos (puntilla y cebollero). Financiamiento 2 cuotas' }
            ]
        },
        syllabus: [
            'Técnicas de Cortes y Buenas Prácticas',
            'Fondos, Caldos, Sopas y Cremas',
            'Salsas Madres y Aderezos',
            'Cereales, Hortalizas, Tubérculos',
            'Setas, Hierbas y Especias',
            'Lácteos, Grasas y Pastas',
            'Masas I, Costos I',
            'Técnicas de Emplatado',
            'Etiqueta y Protocolo',
            'Oratoria y Expresión Corporal'
        ]
    },
    {
        id: 'panadero',
        title: 'Chef Panadero',
        subtitle: 'ESPECIALIZACIÓN',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80',
        description: 'Transforma tu pasión por el pan en una profesión con aroma a éxito. Formación integral para chefs, emprendedores y profesionales del sector alimentario.',
        details: {
            duration: 'Niveles Progresivos',
            start: 'Lunes 9 de Febrero 2026',
            schedule: [
                'Lunes (Tarde): 2:00 PM - 5:30 PM',
                'Lunes (Nocturno): 6:00 PM - 9:30 PM'
            ],
            investment: [
                { label: 'Inscripción Básico', price: '50 €' },
                { label: 'Mensualidad Básico', price: '140 €' },
                { label: 'Kit de Estudio', price: '90 €', note: '*Incluye filipina, gorro, delantal. Financiamiento 2 cuotas' }
            ]
        },
        syllabus: [
            'Principios Básicos de Panificación',
            'Clases de Harina y Fórmulas Panaderas',
            'Matemáticas Panaderas',
            'Pan Campesino, Canilla, Piñita',
            'Cinnamon, Pizza, Bagels, Golfeados',
            'Cachitos, Pan de Jamón, Donas',
            'Hojaldre, Pan de Coco, Pan de Queso',
            'Ciabatta, Focaccia, Masa Madre',
            'Técnicas de Emplatado',
            'Etiqueta y Protocolo'
        ]
    },
    {
        id: 'pastelero',
        title: 'Chef Pastelero',
        subtitle: 'ESPECIALIZACIÓN',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80',
        description: 'Precisión y dulzura. Especialízate en las técnicas de la pastelería francesa, chocolatería fina y arte del emplatado.',
        details: {
            duration: 'Niveles Progresivos',
            start: '25-26 Febrero 2026',
            schedule: [
                'Mié/Jue: 8:00 AM - 12:30 PM',
                'Mié/Jue: 2:00 PM - 5:30 PM',
                'Sábados: 8:00 AM - 12:30 PM (28 Feb)',
                'Nocturno Lunes: 6:00 PM - 9:30 PM (23 Feb)'
            ],
            investment: [
                { label: 'Inscripción Básico', price: '50 €' },
                { label: 'Mensualidad Básico', price: '140 €' },
                { label: 'Kit de Estudio', price: '90 €', note: '*Incluye filipina, gorro, delantal. Financiamiento 2 cuotas' }
            ]
        },
        syllabus: [
            'Mangueado y Merengues',
            'Bizcochos y Masas Livianas',
            'Sablé, Cakes, Masas Quebradas',
            'Pastelería Clásica y Comercial',
            'Butter Cream y Fondant',
            'Petit Four Variados',
            'Masas Choux, Brioche, Croissant',
            'Bombonería I y II',
            'Pastelería Francesa, Alemana, Italiana',
            'Técnicas de Emplatado y Maridaje'
        ]
    },
    {
        id: 'gerencia',
        title: 'Diplomado en Gerencia Gastronómica',
        subtitle: 'NEGOCIOS',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
        description: 'Formación integral para chefs, emprendedores y profesionales del sector alimentario. Visión estratégica para gestionar negocios gastronómicos rentables.',
        details: {
            duration: '4 Meses Intensivos',
            start: 'Martes 3 de Febrero 2026',
            schedule: [
                'Martes (Tarde): 2:00 PM - 6:00 PM',
                'Sábados: 8:00 AM - 12:30 PM (28 Feb)'
            ],
            investment: [
                { label: 'Inscripción', price: '50 €' },
                { label: 'Mensualidad', price: '130 €' },
                { label: 'Material Digital', price: 'Incluido' }
            ]
        },
        syllabus: [
            'Emprendimiento y Modelo Canvas',
            'Marketing Gastronómico',
            'Neuromarketing y Neurogastronomía',
            'Capital Humano, Liderazgo y Coaching',
            'Ingeniería del Menú y Catering',
            'Manejo y Control Gastronómico',
            'Higiene y Salud Ocupacional',
            'Plan de Negocios Final'
        ]
    }
];

// --- COMPONENTES ---

const CourseCard = ({ course, index }) => {
    const isEven = index % 2 === 0;

    return (
        <article className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} border-b border-black last:border-0`}>
            {/* Imagen */}
            <div className="md:w-1/2 relative min-h-[450px] border-b md:border-b-0 md:border-r border-black overflow-hidden group">
                <div className="absolute inset-0 bg-gray-900 z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-all duration-1000 scale-100 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 z-20 bg-white px-4 py-1 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-xs font-serif font-bold tracking-[0.2em] uppercase">{course.subtitle}</span>
                </div>
            </div>

            {/* Contenido */}
            <div className={`md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white ${!isEven ? 'md:border-r border-black' : ''}`}>
                <h3 className="text-4xl lg:text-5xl font-serif mb-4 leading-tight">{course.title}</h3>
                <p className="text-gray-600 font-serif italic mb-8 text-base md:text-lg border-l-2 border-black pl-4">
                    "{course.description}"
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div>
                        <div className="flex items-center mb-4 border-b border-gray-200 pb-2">
                            <Clock className="w-4 h-4 mr-2" />
                            <h4 className="font-bold text-sm uppercase tracking-widest">Horarios y Fechas</h4>
                        </div>
                        <ul className="space-y-3 text-base">
                            <li className="font-bold text-black flex items-center">
                                <Calendar className="w-3 h-3 mr-2" /> Inicio: {course.details.start}
                            </li>
                            {course.details.schedule.map((s, i) => (
                                <li key={i} className="text-gray-600 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-black">
                                    {s}
                                </li>
                            ))}
                            <li className="text-sm text-gray-400 mt-2 italic">Duración: {course.details.duration}</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center mb-4 border-b border-gray-200 pb-2">
                            <Star className="w-4 h-4 mr-2" />
                            <h4 className="font-bold text-sm uppercase tracking-widest">Inversión</h4>
                        </div>
                        <ul className="space-y-2 text-base">
                            {course.details.investment.map((inv, i) => (
                                <li key={i} className="flex flex-col">
                                    <div className="flex justify-between border-b border-dotted border-gray-300 pb-1">
                                        <span className="text-gray-600">{inv.label}</span>
                                        <span className="font-bold">{inv.price}</span>
                                    </div>
                                    {inv.note && <span className="text-xs text-gray-500 mt-0.5">{inv.note}</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-3">Contenido Académico (Resumen)</h4>
                    <div className="flex flex-wrap gap-2">
                        {course.syllabus.map((topic, i) => (
                            <span key={i} className="px-3 py-1.5 bg-neutral-100 text-sm text-gray-700 rounded-sm">
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default function Brochure() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">

            {/* --- PORTADA / HEADER --- */}
            <header className="border-b-4 border-black relative bg-white">
                <div className="container mx-auto px-6 py-16 md:py-24 text-center">

                    {/* Logo oficial */}
                    <img
                        src="/logo.png"
                        alt="La New Cuisine"
                        className="mx-auto mb-8 animate-in fade-in duration-1000"
                        style={{ width: '480px', maxWidth: '90%', height: 'auto' }}
                    />
                    <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tighter leading-none mb-12 text-gray-600">
                        Escuela de Alta Cocina
                    </h2>

                    <div className="max-w-5xl mx-auto border-y border-black py-8 bg-neutral-50">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-black">
                            <div className="text-center pt-4 md:pt-0">
                                <p className="text-xs font-bold uppercase text-gray-500 mb-1">Temporada Académica</p>
                                <p className="text-xl font-serif font-bold">Enero / Febrero 2026</p>
                            </div>
                            <div className="text-center pt-4 md:pt-0">
                                <p className="text-xs font-bold uppercase text-gray-500 mb-1">Estado de Admisión</p>
                                <div className="inline-flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
                                    </span>
                                    <p className="text-xl font-serif font-bold">Inscripciones Abiertas</p>
                                </div>
                            </div>
                            <div className="text-center pt-4 md:pt-0 pb-4 md:pb-0">
                                <p className="text-xs font-bold uppercase text-gray-500 mb-1">Registro Ministerio</p>
                                <p className="text-xl font-serif font-bold">No. R-0129-08</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- MANIFIESTO --- */}
            <section className="bg-white py-20 px-6 border-b border-black">
                <div className="max-w-3xl mx-auto text-center">
                    <Quote className="w-12 h-12 mx-auto mb-8 text-black opacity-20 rotate-180" />
                    <p className="text-3xl md:text-5xl font-serif leading-tight text-gray-900 mb-8">
                        "Formamos artistas culinarios desde 2002. No solo enseñamos recetas, enseñamos a <span className="bg-black text-white px-2 italic">entender</span> el alimento, respetar la técnica y gestionar el negocio."
                    </p>
                    <div className="flex justify-center gap-1">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-black text-black" />)}
                    </div>
                </div>
            </section>

            {/* --- CUERPO DEL BROCHURE --- */}
            <main>
                {courses.map((course, idx) => (
                    <CourseCard key={course.id} course={course} index={idx} />
                ))}
            </main>

            {/* --- SECCIÓN EXTRA: TALLERES Y JOVENES --- */}
            <section className="grid grid-cols-1 md:grid-cols-2 border-b border-black">
                {/* Junior Chef */}
                <div className="p-12 lg:p-16 border-b md:border-b-0 md:border-r border-black bg-neutral-100 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-5xl font-serif">Junior Chef</h3>
                            <span className="border border-black text-black text-xs px-3 py-1 font-bold uppercase tracking-widest">Jóvenes</span>
                        </div>
                        <p className="mb-8 text-gray-600 text-xl">Programa especial y continuo diseñado exclusivamente para el desarrollo de nuevos talentos gastronómicos.</p>
                    </div>
                    <div className="bg-white p-6 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <h4 className="font-bold text-base uppercase mb-3">Ficha Técnica</h4>
                        <div className="space-y-2 text-base text-gray-700">
                            <p className="flex justify-between border-b border-gray-100 pb-1">
                                <span>Horario:</span> <span className="font-bold">Viernes 2:00 PM - 5:30 PM</span>
                            </p>
                            <p className="flex justify-between pt-1">
                                <span>Requisito:</span> <span className="font-bold">Pasión por la cocina</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Molecular */}
                <div className="p-12 lg:p-16 bg-black text-white flex flex-col justify-between relative overflow-hidden">
                    {/* Decoración de fondo simple con círculos */}
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Scissors className="w-40 h-40 text-white" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-5xl font-serif">Cocina Molecular</h3>
                            <span className="bg-white text-black text-xs px-3 py-1 font-bold uppercase tracking-widest">Masterclass</span>
                        </div>
                        <p className="mb-8 text-gray-400 text-xl">El ABC de la vanguardia con el Chef Jesús Gil. Aprende esferificaciones que estallan, aires y geles.</p>
                    </div>

                    <div className="relative z-10 border border-white/30 p-6 bg-white/5 backdrop-blur-sm">
                        <div className="grid grid-cols-2 gap-4 text-base">
                            <div>
                                <p className="text-gray-400 text-xs uppercase mb-1">Fecha</p>
                                <p className="font-bold text-lg">3 de Febrero</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase mb-1">Inversión</p>
                                <p className="font-bold text-lg">40 €</p>
                            </div>
                            <div className="col-span-2 pt-4 border-t border-white/20">
                                <p className="flex items-center text-gray-300">
                                    <Check className="w-4 h-4 mr-2" /> Incluye Certificado e Insumos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PROTOCOLO DE PREINSCRIPCIÓN --- */}
            <section className="bg-neutral-100 py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">Proceso Oficial</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Protocolo de Preinscripción</h2>
                        <p className="text-gray-600">Formalización de Inscripción Administrativa y Académica</p>
                    </div>

                    <div className="space-y-6">
                        {/* Paso 1 */}
                        <div className="bg-white p-6 border-l-4 border-black shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Enviar Datos de Preinscripción</h3>
                                    <p className="text-gray-600 mb-3">Envía los datos del aspirante preinscrito junto con el soporte de pago a los siguientes correos:</p>
                                    <div className="space-y-1 text-sm">
                                        <p><strong>📧 Administración:</strong> <a href="mailto:administracion@lanewcuisine.com.ve" className="text-blue-600 hover:underline">administracion@lanewcuisine.com.ve</a></p>
                                        <p><strong>📧 Gerencia:</strong> <a href="mailto:gerencia.escuela@gmail.com" className="text-blue-600 hover:underline">gerencia.escuela@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Paso 2 */}
                        <div className="bg-white p-6 border-l-4 border-black shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Formalizar Inscripción</h3>
                                    <div className="space-y-3 text-gray-600">
                                        <div className="pl-4 border-l-2 border-gray-200">
                                            <p className="font-semibold text-black">2.1 Inscripción Administrativa</p>
                                            <p className="text-sm">Administración valida el pago, registra en el sistema y remite listado a la gerencia de escuela.</p>
                                        </div>
                                        <div className="pl-4 border-l-2 border-gray-200">
                                            <p className="font-semibold text-black">2.2 Inscripción Académica</p>
                                            <p className="text-sm">Se cargan datos en el sistema, se crea el usuario dentro del sistema LNC y el aula virtual, se coloca en estatus activo después de completar el proceso de admisión.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Paso 3 */}
                        <div className="bg-white p-6 border-l-4 border-black shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Acudir a la Escuela</h3>
                                    <p className="text-gray-600 mb-3">Los aspirantes deben acudir a la escuela para formalizar el proceso de admisión:</p>
                                    <div className="space-y-2 text-sm">
                                        <p className="flex items-center gap-2">
                                            <span className="text-lg">🕐</span>
                                            <strong>Horario:</strong> Lunes a Viernes de 9:00 a 11:00 am y de 2:00 a 4:00 pm
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="text-lg">📄</span>
                                            <strong>Documentos:</strong> Copia de cédula de identidad
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="text-lg">✍️</span>
                                            <strong>Firmar:</strong> Planilla de inscripción
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Botón de descarga */}
                    <div className="text-center mt-10">
                        <a
                            href="/planilla-inscripcion-2026.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors shadow-lg"
                            style={{ boxShadow: '5px 5px 0px rgba(0,0,0,0.3)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Descargar Planilla de Inscripción 2026
                        </a>
                        <p className="text-gray-500 text-xs mt-3">Formato PDF • Imprimir y llenar antes de acudir</p>
                    </div>
                </div>
            </section>

            {/* --- FOOTER / CONTRAPORTADA --- */}
            <footer className="bg-white py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">Comienza tu Legado</h2>
                    <p className="text-gray-600 mb-16 text-xl max-w-2xl mx-auto">
                        Estamos listos para recibirte. Agenda una visita guiada a nuestras instalaciones o formaliza tu inscripción hoy mismo.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-left md:text-center">

                        {/* WhatsApp */}
                        <div className="group cursor-default flex flex-col items-center">
                            <div className="inline-block border-2 border-black p-4 mb-4 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <p className="font-bold text-sm uppercase tracking-widest mb-3">WhatsApp</p>
                            <div className="text-base text-gray-500 space-y-1">
                                <p className="text-lg font-semibold text-black">+58 424-4635196</p>
                            </div>
                        </div>

                        {/* Dirección */}
                        <div className="group cursor-default flex flex-col items-center">
                            <div className="inline-block border-2 border-black p-4 mb-4 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <p className="font-bold text-sm uppercase tracking-widest mb-3">Visítanos</p>
                            <div className="text-base text-gray-500 max-w-xs mx-auto">
                                <p className="font-semibold text-black mb-1">Urb. Sabana Larga</p>
                                <p>Av. 107, Casa 128-11</p>
                                <p>Frente al C.C. Mediterranean Plaza</p>
                                <p>Valencia, Edo. Carabobo</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="group cursor-default flex flex-col items-center">
                            <div className="inline-block border-2 border-black p-4 mb-4 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <p className="font-bold text-sm uppercase tracking-widest mb-3">Escríbenos</p>
                            <p className="text-base text-gray-500 mb-2">info@lanewcuisine.com</p>
                            <div className="border-t border-gray-200 w-16 mx-auto my-2"></div>
                            <p className="text-xs text-gray-400">Reg. Ministerio de Educación No. R-0129-08</p>
                        </div>
                    </div>

                    {/* Mapa de ubicación */}
                    <div className="mt-12 mb-8">
                        <h3 className="text-center font-bold text-lg uppercase tracking-widest mb-6">📍 Nuestra Ubicación</h3>
                        <div style={{
                            width: '100%',
                            minHeight: '250px',
                            height: '350px',
                            maxHeight: '50vh',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '3px solid #000',
                            boxShadow: '8px 8px 0px rgba(0,0,0,1)'
                        }}>
                            <iframe
                                src="https://maps.google.com/maps?q=La+New+Cuisine+Valencia+Venezuela&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Ubicación La New Cuisine"
                            ></iframe>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-4">
                            Av. 107, Casa 128-11, Urb. Sabana Larga • Frente al C.C. Mediterranean Plaza
                        </p>
                    </div>

                    <div className="border-t border-black pt-8 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest font-bold text-gray-500">
                        <p>© 2026 La New Cuisine</p>
                        <p className="mt-2 md:mt-0 flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Escuela de Arte Culinario del Año
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
