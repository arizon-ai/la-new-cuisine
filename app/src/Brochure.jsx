import React from 'react';
import {
    Calendar, Clock, MapPin, Star, Phone, Mail, Quote, Check, Award, Scissors, Facebook, Instagram, Video
} from 'lucide-react';
import EditableText from './components/EditableText';

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
            start: 'Lunes 2 Feb / Martes 10 Feb 2026',
            schedule: [
                'Lunes y Martes: 2:00 PM - 5:30 PM',
                'Sábados: 8:00 AM - 12:30 PM',
                'Nocturno Lunes: 6:00 PM - 9:30 PM (23 Feb)'
            ],
            investment: [
                { label: 'Inscripción Básico', price: '50 €' },
                { label: 'Mensualidad Básico', price: '130 €' },
                { label: 'Kit de Estudio', price: '100 €', note: '*Incluye filipina, gorro, delantal, set de 2 cuchillos (puntilla y cebollero). Financiamiento 2 cuotas' }
            ]
        },
        syllabusBasico: [
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
        ],
        syllabusIntermedio: [
            'Aves I y II',
            'Pato y Pavo',
            'Conejo, Cordero y Chivo',
            'Cerdo',
            'Bovino I y II',
            'Pescados I (blancos)',
            'Pescados II (azules)',
            'Pescados III (rosados y cartilaginosos)',
            'Mariscos I y II',
            'Costos II',
            'Inglés Gastronómico I',
            'Francés Gastronómico I'
        ],
        syllabusAvanzado: [
            'Charcutería',
            'Panadería',
            'Postres I y II',
            'Masas II',
            'Cocina Molecular',
            'Chocolate',
            'Cocina Internacional I y II',
            'Cocina Venezolana',
            'Cocina Mediterránea',
            'Nutrición y Dietética',
            'Inglés Gastronómico II',
            'Francés Gastronómico II'
        ]
    },
    {
        id: 'panadero',
        title: 'Chef Panadero',
        subtitle: 'ESPECIALIZACIÓN',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80',
        description: 'Transforma tu pasión por el pan en una profesión con aroma a éxito. Formación integral para chefs, emprendedores y profesionales del sector alimentario.',
        details: {
            duration: '2 Niveles',
            start: 'Lunes 9 Febrero 2026',
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
        syllabusBasico: [
            'Principios Básicos de Panificación',
            'Clases de Harina',
            'Fórmulas Panaderas',
            'Ingredientes',
            'Oratoria y Expresión Corporal',
            'Matemáticas Panaderas',
            'Pan Campesino, Canilla, Piñita',
            'Cinnamon, Pizza, Bagels, Golfeados',
            'Cachitos, Pan de Jamón, Pan Dulce',
            'Donas, Hojaldre, Pan de Coco',
            'Pan de Queso y Tocineta',
            'Técnicas de Emplatado',
            'Etiqueta y Protocolo',
            'Costos I'
        ],
        syllabusIntermedio: [
            'Pan Guayaba',
            'Pan de Hamburguesa',
            'Pan de Sándwich',
            'Pan Francés',
            'Pan sin Amasar',
            'Pan de Mantequilla',
            'Ciabatta',
            'Focaccia',
            'Masa Madre',
            'Costos II',
            'Nutrición y Dietética',
            'Inglés Gastronómico II',
            'Francés Gastronómico II',
            'Pasantía',
            'Fine Dining',
            'Informe Final'
        ]
    },
    {
        id: 'pastelero',
        title: 'Chef Pastelero',
        subtitle: 'ESPECIALIZACIÓN',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80',
        description: 'Precisión y dulzura. Especialízate en las técnicas de la pastelería francesa, chocolatería fina y arte del emplatado.',
        details: {
            duration: '3 Niveles + Pasantía',
            start: 'Mié/Jue 25-26 Feb 2026',
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
        syllabusBasico: [
            'Mangueado y Merengues',
            'Bizcochos y Masas Livianas',
            'Sablé, Cakes',
            'Masas Quebradas I y II',
            'Oratoria y Expresión Corporal',
            'Etiqueta y Protocolo',
            'Pastelería Clásica',
            'Butter Cream y Fondant',
            'Pastelería Comercial',
            'Petit Four Variados',
            'Masas Choux, Brioche, Croissant',
            'Costos I',
            'Técnicas de Emplatado'
        ],
        syllabusIntermedio: [
            'Panadería Saludable I',
            'Inglés Gastronómico I',
            'Francés Gastronómico I',
            'Hojaldre I y II',
            'Postres de Vitrina',
            'Costos I',
            'Bombonería I',
            'Bombonería II',
            'Técnicas de Maridaje',
            'Panadería I y II'
        ],
        syllabusAvanzado: [
            'Pastelería Francesa I y II',
            'Pastelería Alemana y Austríaca',
            'Pastelería Italiana',
            'Pastelería Medio Oriente',
            'Costos II',
            'Nutrición y Dietética',
            'Mousse',
            'Pastelería Latinoamericana',
            'Pastelería Argentina y Estados Unidos',
            'Inglés Gastronómico II',
            'Pastelería Venezolana',
            'Francés Gastronómico II',
            'Pasantía',
            'Fine Dining',
            'Informe Final'
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
            start: 'Martes 3 Feb / Sábado 28 Feb 2026',
            schedule: [
                'Martes (Tarde): 2:00 PM - 6:00 PM',
                'Sábados: 8:00 AM - 12:30 PM'
            ],
            investment: [
                { label: 'Inscripción', price: '50 €' },
                { label: 'Mensualidad', price: '130 €' },
                { label: 'Material Digital', price: 'Incluido' }
            ]
        },
        syllabusBasico: [
            'Emprendimiento del Modelo de Negocios Gastronómico',
            'Lienzo Canvas',
            'Marketing Gastronómico'
        ],
        syllabusIntermedio: [
            'Neuromarketing y Neurogastronomía',
            'Capital Humano, Liderazgo y Coaching Organizacional',
            'Ingeniería del Menú y Catering'
        ],
        syllabusAvanzado: [
            'Manejo y Control Gastronómico',
            'Educación Gastronómica en Higiene y Salud Ocupacional',
            'Manipulación de Alimentos',
            'Plan de Negocios Final'
        ]
    },
    {
        id: 'diplomado-online',
        title: 'Diplomado Online en Gerencia Gastronómica',
        subtitle: 'ONLINE • PROMOCIÓN',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
        description: 'Formación 100% virtual en gestión estratégica de negocios gastronómicos. Accede desde cualquier lugar con clases en vivo y material digital.',
        details: {
            duration: '4 Meses',
            start: 'Próximamente',
            schedule: [
                'Clases en vivo online',
                'Material digital disponible 24/7'
            ],
            investment: [
                { label: 'Inscripción', price: '30 €' },
                { label: 'Mensualidad (4 cuotas)', price: '80 €' },
                { label: 'Kit', price: 'N/A' }
            ]
        },
        syllabusBasico: [
            'Emprendimiento del Modelo de Negocios Gastronómico',
            'Lienzo Canvas',
            'Marketing Gastronómico Digital'
        ],
        syllabusIntermedio: [
            'Neuromarketing y Neurogastronomía',
            'Capital Humano, Liderazgo y Coaching Organizacional',
            'Ingeniería del Menú y Catering'
        ],
        syllabusAvanzado: [
            'Manejo y Control Gastronómico',
            'Gestión de Redes Sociales para Restaurantes',
            'Plan de Negocios Final'
        ]
    }
];


// --- COMPONENTES ---

const CourseCard = ({ course, index }) => {
    const isEven = index % 2 === 0;
    const id = course.id;

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
                    <EditableText
                        id={`course-${id}-subtitle`}
                        defaultValue={course.subtitle}
                        tag="span"
                        className="text-xs font-serif font-bold tracking-[0.2em] uppercase"
                    />
                </div>
            </div>

            {/* Contenido */}
            <div className={`md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white ${!isEven ? 'md:border-r border-black' : ''}`}>
                <EditableText
                    id={`course-${id}-title`}
                    defaultValue={course.title}
                    tag="h3"
                    className="text-4xl lg:text-5xl font-serif mb-4 leading-tight"
                />
                <div className="text-gray-600 font-serif italic mb-8 text-base md:text-lg border-l-2 border-black pl-4">
                    <EditableText
                        id={`course-${id}-desc`}
                        defaultValue={`"${course.description}"`}
                        tag="p"
                        multiline={true}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div>
                        <div className="flex items-center mb-4 border-b border-gray-200 pb-2">
                            <Clock className="w-4 h-4 mr-2" />
                            <EditableText id="brochure-horarios-titulo" defaultValue="Horarios y Fechas" tag="h4" className="font-bold text-sm uppercase tracking-widest" />
                        </div>
                        <ul className="space-y-3 text-base">
                            <li className="font-bold text-black flex items-center">
                                <Calendar className="w-3 h-3 mr-2" /> Inicio:
                                <EditableText
                                    id={`course-${id}-start`}
                                    defaultValue={course.details.start}
                                    tag="span"
                                    className="ml-1"
                                />
                            </li>
                            {course.details.schedule.map((s, i) => (
                                <li key={i} className="text-gray-600 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-black">
                                    <EditableText
                                        id={`course-${id}-schedule-${i}`}
                                        defaultValue={s}
                                        tag="span"
                                    />
                                </li>
                            ))}
                            <li className="text-sm text-gray-400 mt-2 italic">
                                Duración: <EditableText
                                    id={`course-${id}-duration`}
                                    defaultValue={course.details.duration}
                                    tag="span"
                                />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center mb-4 border-b border-gray-200 pb-2">
                            <Star className="w-4 h-4 mr-2" />
                            <EditableText id="brochure-inversion-titulo" defaultValue="Inversión" tag="h4" className="font-bold text-sm uppercase tracking-widest" />
                        </div>
                        <ul className="space-y-2 text-base">
                            {course.details.investment.map((inv, i) => (
                                <li key={i} className="flex flex-col">
                                    <div className="flex justify-between border-b border-dotted border-gray-300 pb-1">
                                        <EditableText
                                            id={`course-${id}-inv-${i}-label`}
                                            defaultValue={inv.label}
                                            tag="span"
                                            className="text-gray-600"
                                        />
                                        <EditableText
                                            id={`course-${id}-inv-${i}-price`}
                                            defaultValue={inv.price}
                                            tag="span"
                                            className="font-bold"
                                        />
                                    </div>
                                    {inv.note && (
                                        <EditableText
                                            id={`course-${id}-inv-${i}-note`}
                                            defaultValue={inv.note}
                                            tag="span"
                                            className="text-xs text-gray-500 mt-0.5"
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <EditableText id="brochure-contenido-titulo" defaultValue="Contenido Académico por Nivel" tag="h4" className="font-bold text-sm uppercase tracking-widest mb-3" />

                    {/* Nivel Básico */}
                    {course.syllabusBasico && (
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-black text-white text-xs px-2 py-1 font-bold">BÁSICO</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {course.syllabusBasico.map((topic, i) => (
                                    <EditableText
                                        key={i}
                                        id={`course-${id}-basico-${i}`}
                                        defaultValue={topic}
                                        tag="span"
                                        className="px-3 py-1.5 bg-neutral-100 text-sm text-gray-700 rounded-sm"
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Nivel Intermedio */}
                    {course.syllabusIntermedio && (
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-gray-600 text-white text-xs px-2 py-1 font-bold">INTERMEDIO</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {course.syllabusIntermedio.map((topic, i) => (
                                    <EditableText
                                        key={i}
                                        id={`course-${id}-intermedio-${i}`}
                                        defaultValue={topic}
                                        tag="span"
                                        className="px-3 py-1.5 bg-gray-200 text-sm text-gray-700 rounded-sm"
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Nivel Avanzado */}
                    {course.syllabusAvanzado && (
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-neutral-800 text-white text-xs px-2 py-1 font-bold">AVANZADO</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {course.syllabusAvanzado.map((topic, i) => (
                                    <EditableText
                                        key={i}
                                        id={`course-${id}-avanzado-${i}`}
                                        defaultValue={topic}
                                        tag="span"
                                        className="px-3 py-1.5 bg-gray-300 text-sm text-gray-700 rounded-sm"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
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
                    <EditableText
                        id="brochure-subtitle"
                        defaultValue="Escuela de Alta Cocina"
                        tag="h2"
                        className="text-2xl md:text-3xl font-serif font-bold tracking-tighter leading-none mb-12 text-gray-600"
                    />

                    <div className="max-w-5xl mx-auto border-y border-black py-8 bg-neutral-50">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-black">
                            <div className="text-center pt-4 md:pt-0">
                                <EditableText id="header-temporada-label" defaultValue="Temporada Académica" tag="p" className="text-xs font-bold uppercase text-gray-500 mb-1" />
                                <EditableText id="header-temporada-value" defaultValue="Enero / Febrero 2026" tag="p" className="text-xl font-serif font-bold" />
                            </div>
                            <div className="text-center pt-4 md:pt-0">
                                <EditableText id="header-admision-label" defaultValue="Estado de Admisión" tag="p" className="text-xs font-bold uppercase text-gray-500 mb-1" />
                                <div className="inline-flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
                                    </span>
                                    <EditableText id="header-admision-value" defaultValue="Inscripciones Abiertas" tag="p" className="text-xl font-serif font-bold" />
                                </div>
                            </div>
                            <div className="text-center pt-4 md:pt-0 pb-4 md:pb-0">
                                <EditableText id="header-registro-label" defaultValue="Registro Ministerio" tag="p" className="text-xs font-bold uppercase text-gray-500 mb-1" />
                                <EditableText id="header-registro-value" defaultValue="No. R-0129-08" tag="p" className="text-xl font-serif font-bold" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- MANIFIESTO --- */}
            <section className="bg-white py-20 px-6 border-b border-black">
                <div className="max-w-3xl mx-auto text-center">
                    <Quote className="w-12 h-12 mx-auto mb-8 text-black opacity-20 rotate-180" />
                    <EditableText
                        id="brochure-manifiesto"
                        defaultValue='"Formamos artistas culinarios desde 2002. No solo enseñamos recetas, enseñamos a entender el alimento, respetar la técnica y gestionar el negocio."'
                        tag="p"
                        className="text-3xl md:text-5xl font-serif leading-tight text-gray-900 mb-8"
                        multiline={true}
                    />
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
                {/* Junior Chef - Cocina para Niños y Adolescentes */}
                <div className="p-12 lg:p-16 border-b md:border-b-0 md:border-r border-black bg-neutral-100 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <EditableText id="junior-title" defaultValue="Junior Chef" tag="h3" className="text-5xl font-serif" />
                            <EditableText id="junior-badge" defaultValue="Niños y Jóvenes" tag="span" className="border border-black text-black text-xs px-3 py-1 font-bold uppercase tracking-widest" />
                        </div>
                        <EditableText id="junior-desc" defaultValue="Programa especial diseñado para el desarrollo de nuevos talentos gastronómicos." tag="p" className="mb-4 text-gray-600 text-xl" multiline={true} />
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2 py-1 bg-white text-xs text-gray-700 rounded-sm">Técnicas de cortes</span>
                            <span className="px-2 py-1 bg-white text-xs text-gray-700 rounded-sm">Salsas</span>
                            <span className="px-2 py-1 bg-white text-xs text-gray-700 rounded-sm">Pastas</span>
                            <span className="px-2 py-1 bg-white text-xs text-gray-700 rounded-sm">Cocina Italiana</span>
                            <span className="px-2 py-1 bg-white text-xs text-gray-700 rounded-sm">Japonesa</span>
                            <span className="px-2 py-1 bg-white text-xs text-gray-700 rounded-sm">Venezolana</span>
                            <span className="px-2 py-1 bg-white text-xs text-gray-700 rounded-sm">Arroz Chino</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <EditableText id="brochure-ficha-titulo" defaultValue="Ficha Técnica" tag="h4" className="font-bold text-base uppercase mb-3" />
                        <div className="space-y-2 text-base text-gray-700">
                            <p className="flex justify-between border-b border-gray-100 pb-1">
                                <span>Inicio:</span> <EditableText id="junior-inicio" defaultValue="Viernes 20 de Febrero 2026" tag="span" className="font-bold" />
                            </p>
                            <p className="flex justify-between border-b border-gray-100 pb-1">
                                <span>Horario:</span> <EditableText id="junior-horario" defaultValue="Viernes 2:00 PM - 6:00 PM" tag="span" className="font-bold" />
                            </p>
                            <p className="flex justify-between border-b border-gray-100 pb-1">
                                <span>Duración:</span> <EditableText id="junior-duracion" defaultValue="4 meses" tag="span" className="font-bold" />
                            </p>
                            <p className="flex justify-between border-b border-gray-100 pb-1">
                                <span>Inscripción:</span> <EditableText id="junior-inscripcion" defaultValue="50 € (incluye uniforme)" tag="span" className="font-bold" />
                            </p>
                            <p className="flex justify-between border-b border-gray-100 pb-1">
                                <span>Mensualidad:</span> <EditableText id="junior-mensualidad" defaultValue="150 €" tag="span" className="font-bold" />
                            </p>
                            <p className="text-xs text-gray-500 pt-2 italic">
                                *Incluye ingredientes, recetas y certificado. 2 platos salados + 1 postre por clase.
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
                            <EditableText id="molecular-title" defaultValue="Cocina Molecular" tag="h3" className="text-5xl font-serif" />
                            <EditableText id="molecular-badge" defaultValue="Masterclass" tag="span" className="bg-white text-black text-xs px-3 py-1 font-bold uppercase tracking-widest" />
                        </div>
                        <EditableText id="molecular-desc" defaultValue="El ABC de la vanguardia con el Chef Jesús Gil. Aprende esferificaciones que estallan, aires y geles." tag="p" className="mb-8 text-gray-400 text-xl" multiline={true} />
                    </div>

                    <div className="relative z-10 border border-white/30 p-6 bg-white/5 backdrop-blur-sm">
                        <div className="grid grid-cols-2 gap-4 text-base">
                            <div>
                                <p className="text-gray-400 text-xs uppercase mb-1">Fecha</p>
                                <EditableText id="molecular-fecha" defaultValue="3 de Febrero 2026" tag="p" className="font-bold text-lg" />
                                <EditableText id="molecular-horario" defaultValue="2:00 PM - 6:00 PM" tag="p" className="text-gray-400 text-sm" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase mb-1">Inversión</p>
                                <EditableText id="molecular-precio" defaultValue="40 €" tag="p" className="font-bold text-lg" />
                            </div>
                            <div className="col-span-2 pt-4 border-t border-white/20">
                                <p className="flex items-center text-gray-300">
                                    <Check className="w-4 h-4 mr-2" /> <EditableText id="molecular-nota" defaultValue="Incluye Certificado e Insumos" tag="span" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN EXTRA: ASISTENTE CHEF E INTENSIVO --- */}
            <section className="grid grid-cols-1 md:grid-cols-2 border-b border-black">
                {/* Asistente de Chef */}
                <div className="p-12 lg:p-16 border-b md:border-b-0 md:border-r border-black bg-white flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <EditableText id="asistente-title" defaultValue="Asistente de Chef" tag="h3" className="text-4xl font-serif" />
                            <EditableText id="asistente-badge" defaultValue="4 Meses" tag="span" className="border border-black text-black text-xs px-3 py-1 font-bold uppercase tracking-widest" />
                        </div>
                        <EditableText id="asistente-desc" defaultValue="Programa práctico para quienes desean iniciarse en el mundo culinario profesional." tag="p" className="mb-4 text-gray-600 text-lg" multiline={true} />
                    </div>
                    <div className="bg-neutral-50 p-6 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <EditableText id="asistente-ficha-title" defaultValue="Ficha Técnica" tag="h4" className="font-bold text-base uppercase mb-3" />
                        <div className="space-y-2 text-base text-gray-700">
                            <p className="flex justify-between border-b border-gray-100 pb-1">
                                <span>Inicio:</span> <EditableText id="asistente-inicio" defaultValue="Viernes 18 de Febrero 2026" tag="span" className="font-bold" />
                            </p>
                            <p className="flex justify-between border-b border-gray-100 pb-1">
                                <span>Horario:</span> <EditableText id="asistente-horario" defaultValue="Viernes 6:00 PM - 9:30 PM" tag="span" className="font-bold" />
                            </p>
                            <p className="flex justify-between border-b border-gray-100 pb-1">
                                <span>Inscripción:</span> <EditableText id="asistente-inscripcion" defaultValue="50 €" tag="span" className="font-bold" />
                            </p>
                            <p className="flex justify-between border-b border-gray-100 pb-1">
                                <span>Mensualidad:</span> <EditableText id="asistente-mensualidad" defaultValue="120 €" tag="span" className="font-bold" />
                            </p>
                            <p className="flex justify-between border-b border-gray-100 pb-1">
                                <span>Kit de Estudio:</span> <EditableText id="asistente-kit" defaultValue="130 €" tag="span" className="font-bold" />
                            </p>
                            <EditableText id="asistente-nota" defaultValue="*Kit incluye filipina, gorro, delantal, set de 2 cuchillos. Financiamiento 2 cuotas." tag="p" className="text-xs text-gray-500 pt-2 italic" />
                        </div>
                    </div>
                </div>

                {/* Intensivo Cocina Internacional */}
                <div className="p-12 lg:p-16 bg-neutral-900 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Award className="w-40 h-40 text-white" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <EditableText id="intensivo-title" defaultValue="Cocina Internacional Intensivo" tag="h3" className="text-4xl font-serif" />
                            <EditableText id="intensivo-badge" defaultValue="Intensivo" tag="span" className="bg-white text-black text-xs px-3 py-1 font-bold uppercase tracking-widest" />
                        </div>
                        <EditableText id="intensivo-desc" defaultValue="Formación acelerada de martes a viernes. Ideal para quienes buscan una inmersión total en las artes culinarias." tag="p" className="mb-8 text-gray-400 text-lg" multiline={true} />
                    </div>

                    <div className="relative z-10 border border-white/30 p-6 bg-white/5 backdrop-blur-sm">
                        <div className="grid grid-cols-2 gap-4 text-base">
                            <div>
                                <EditableText id="intensivo-inicio-label" defaultValue="Inicio" tag="p" className="text-gray-400 text-xs uppercase mb-1" />
                                <EditableText id="intensivo-inicio-fecha" defaultValue="24 de Febrero 2026" tag="p" className="font-bold text-lg" />
                                <EditableText id="intensivo-horario" defaultValue="Mar-Vie 6:00 PM - 9:30 PM" tag="p" className="text-gray-400 text-sm" />
                            </div>
                            <div>
                                <EditableText id="intensivo-inversion-label" defaultValue="Inversión" tag="p" className="text-gray-400 text-xs uppercase mb-1" />
                                <EditableText id="intensivo-inscripcion" defaultValue="100 € Inscripción" tag="p" className="font-bold text-lg" />
                                <EditableText id="intensivo-cuotas" defaultValue="2 cuotas de 1.320 €" tag="p" className="text-gray-400 text-sm" />
                            </div>
                            <div className="col-span-2 pt-4 border-t border-white/20">
                                <p className="flex items-center text-gray-300">
                                    <Check className="w-4 h-4 mr-2" /> <EditableText id="intensivo-nota" defaultValue="Programa completo: Básico + Intermedio + Avanzado" tag="span" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SERVICIOS ADICIONALES --- */}
            <section className="grid grid-cols-1 md:grid-cols-2 border-b border-black">
                {/* Asesorías Gastronómicas */}
                <div className="p-12 lg:p-16 border-b md:border-b-0 md:border-r border-black bg-white flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <EditableText id="asesorias-title" defaultValue="Asesorías Gastronómicas" tag="h3" className="text-4xl font-serif" />
                            <EditableText id="asesorias-badge" defaultValue="Servicios" tag="span" className="border border-black text-black text-xs px-3 py-1 font-bold uppercase tracking-widest" />
                        </div>
                        <EditableText id="asesorias-desc" defaultValue="Potencia tu negocio gastronómico con nuestra asesoría especializada." tag="p" className="mb-6 text-gray-600 text-lg" multiline={true} />
                    </div>
                    <div className="bg-neutral-50 p-6 border border-black">
                        <EditableText id="asesorias-servicios-title" defaultValue="Nuestros Servicios" tag="h4" className="font-bold text-base uppercase mb-4" />
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 mt-0.5 text-black flex-shrink-0" />
                                <EditableText id="asesorias-servicio-1" defaultValue="Formulación de Productos: Desarrollo de recetas y fichas técnicas" tag="span" />
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 mt-0.5 text-black flex-shrink-0" />
                                <EditableText id="asesorias-servicio-2" defaultValue="Maquila de Productos: Producción a escala de tus creaciones" tag="span" />
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 mt-0.5 text-black flex-shrink-0" />
                                <EditableText id="asesorias-servicio-3" defaultValue="Consultoría: Optimización de operaciones y menús" tag="span" />
                            </li>
                        </ul>
                        <EditableText id="asesorias-cta" defaultValue="Contáctanos para cotización personalizada" tag="p" className="text-sm text-gray-500 mt-4 italic" />
                    </div>
                </div>

                {/* Celebración de Cumpleaños */}
                <div className="p-12 lg:p-16 bg-neutral-100 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-6xl opacity-10">🎂</div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <EditableText id="cumple-title" defaultValue="Celebración de Cumpleaños" tag="h3" className="text-4xl font-serif" />
                            <EditableText id="cumple-badge" defaultValue="Eventos" tag="span" className="bg-black text-white text-xs px-3 py-1 font-bold uppercase tracking-widest" />
                        </div>
                        <EditableText id="cumple-desc" defaultValue="Celebra tu día especial en nuestras instalaciones con una experiencia culinaria única." tag="p" className="mb-6 text-gray-600 text-lg" multiline={true} />
                    </div>
                    <div className="relative z-10 bg-white p-6 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <EditableText id="cumple-incluye-title" defaultValue="¿Qué incluye?" tag="h4" className="font-bold text-base uppercase mb-4" />
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="text-lg">👨‍🍳</span>
                                <EditableText id="cumple-item-1" defaultValue="Experiencia de cocina grupal" tag="span" />
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-lg">🎉</span>
                                <EditableText id="cumple-item-2" defaultValue="Espacio exclusivo para tu evento" tag="span" />
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-lg">🍽️</span>
                                <EditableText id="cumple-item-3" defaultValue="Menú personalizado" tag="span" />
                            </li>
                        </ul>
                        <EditableText id="cumple-cta" defaultValue="Consulta disponibilidad y paquetes" tag="p" className="text-sm text-gray-500 mt-4 italic" />
                    </div>
                </div>
            </section>

            {/* --- PROTOCOLO DE PREINSCRIPCIÓN --- */}
            <section className="bg-neutral-100 py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <EditableText id="protocolo-label" defaultValue="Proceso Oficial" tag="span" className="text-xs uppercase tracking-widest text-gray-500 mb-4 block" />
                        <EditableText id="protocolo-title" defaultValue="Protocolo de Preinscripción" tag="h2" className="text-3xl md:text-4xl font-serif font-bold mb-4" />
                        <EditableText id="protocolo-subtitle" defaultValue="Formalización de Inscripción Administrativa y Académica" tag="p" className="text-gray-600" />
                    </div>

                    <div className="space-y-6">
                        {/* Paso 1 */}
                        <div className="bg-white p-6 border-l-4 border-black shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                <div>
                                    <EditableText id="protocolo-paso1-title" defaultValue="Enviar Datos de Preinscripción" tag="h3" className="font-bold text-lg mb-2" />
                                    <EditableText id="protocolo-paso1-desc" defaultValue="Envía los datos del aspirante preinscrito junto con el soporte de pago a los siguientes correos:" tag="p" className="text-gray-600 mb-3" />
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
                                    <EditableText id="protocolo-paso2-title" defaultValue="Formalizar Inscripción" tag="h3" className="font-bold text-lg mb-2" />
                                    <div className="space-y-3 text-gray-600">
                                        <div className="pl-4 border-l-2 border-gray-200">
                                            <EditableText id="protocolo-paso2-1-title" defaultValue="2.1 Inscripción Administrativa" tag="p" className="font-semibold text-black" />
                                            <EditableText id="protocolo-paso2-1-desc" defaultValue="Administración valida el pago, registra en el sistema y remite listado a la gerencia de escuela." tag="p" className="text-sm" />
                                        </div>
                                        <div className="pl-4 border-l-2 border-gray-200">
                                            <EditableText id="protocolo-paso2-2-title" defaultValue="2.2 Inscripción Académica" tag="p" className="font-semibold text-black" />
                                            <EditableText id="protocolo-paso2-2-desc" defaultValue="Se cargan datos en el sistema, se crea el usuario dentro del sistema LNC y el aula virtual, se coloca en estatus activo después de completar el proceso de admisión." tag="p" className="text-sm" multiline={true} />
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
                                    <EditableText id="protocolo-paso3-title" defaultValue="Acudir a la Escuela" tag="h3" className="font-bold text-lg mb-2" />
                                    <EditableText id="protocolo-paso3-desc" defaultValue="Los aspirantes deben acudir a la escuela para formalizar el proceso de admisión:" tag="p" className="text-gray-600 mb-3" />
                                    <div className="space-y-2 text-sm">
                                        <p className="flex items-center gap-2">
                                            <span className="text-lg">🕐</span>
                                            <span><strong>Horario:</strong> <EditableText id="protocolo-horario" defaultValue="Lunes a Viernes de 9:00 a 11:00 am y de 2:00 a 4:00 pm" tag="span" /></span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="text-lg">📄</span>
                                            <span><strong>Documentos:</strong> <EditableText id="protocolo-documentos" defaultValue="Copia de cédula de identidad" tag="span" /></span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="text-lg">✍️</span>
                                            <span><strong>Firmar:</strong> <EditableText id="protocolo-firmar" defaultValue="Planilla de inscripción" tag="span" /></span>
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
                    <EditableText
                        id="brochure-footer-title"
                        defaultValue="Comienza tu Legado"
                        tag="h2"
                        className="text-5xl md:text-6xl font-serif font-bold mb-8"
                    />
                    <EditableText
                        id="footer-desc"
                        defaultValue="Estamos listos para recibirte. Agenda una visita guiada a nuestras instalaciones o formaliza tu inscripción hoy mismo."
                        tag="p"
                        className="text-gray-600 mb-16 text-xl max-w-2xl mx-auto"
                        multiline={true}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-left md:text-center">

                        {/* WhatsApp */}
                        <div className="group cursor-default flex flex-col items-center">
                            <div className="inline-block border-2 border-black p-4 mb-4 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <EditableText id="footer-whatsapp-label" defaultValue="WhatsApp" tag="p" className="font-bold text-sm uppercase tracking-widest mb-3" />
                            <div className="text-base text-gray-500 space-y-1">
                                <EditableText id="footer-whatsapp-number" defaultValue="+58 424-4635196" tag="p" className="text-lg font-semibold text-black" />
                            </div>
                        </div>

                        {/* Dirección */}
                        <div className="group cursor-default flex flex-col items-center">
                            <div className="inline-block border-2 border-black p-4 mb-4 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <EditableText id="footer-visitanos-label" defaultValue="Visítanos" tag="p" className="font-bold text-sm uppercase tracking-widest mb-3" />
                            <div className="text-base text-gray-500 max-w-xs mx-auto">
                                <EditableText id="footer-direccion-1" defaultValue="Urb. Sabana Larga" tag="p" className="font-semibold text-black mb-1" />
                                <EditableText id="footer-direccion-2" defaultValue="Av. 107, Casa 128-11" tag="p" />
                                <EditableText id="footer-direccion-3" defaultValue="Frente al C.C. Mediterranean Plaza" tag="p" />
                                <EditableText id="footer-direccion-4" defaultValue="Valencia, Edo. Carabobo" tag="p" />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="group cursor-default flex flex-col items-center">
                            <div className="inline-block border-2 border-black p-4 mb-4 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <EditableText id="footer-email-label" defaultValue="Escríbenos" tag="p" className="font-bold text-sm uppercase tracking-widest mb-3" />
                            <EditableText id="footer-email" defaultValue="info@lanewcuisine.com" tag="p" className="text-base text-gray-500 mb-2" />
                            <div className="border-t border-gray-200 w-16 mx-auto my-2"></div>
                            <EditableText id="footer-registro" defaultValue="Reg. Ministerio de Educación No. R-0129-08" tag="p" className="text-xs text-gray-400" />
                        </div>
                    </div>

                    {/* Redes Sociales */}
                    <div className="flex justify-center gap-8 mb-12">
                        <a href="#" className="group flex flex-col items-center" title="Facebook">
                            <div className="border-2 border-black p-4 rounded-full group-hover:bg-black group-hover:text-white transition-colors mb-2">
                                <Facebook className="w-6 h-6" />
                            </div>
                            <span className="text-xs uppercase tracking-wider">Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/lanewcuisine" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center" title="Instagram">
                            <div className="border-2 border-black p-4 rounded-full group-hover:bg-black group-hover:text-white transition-colors mb-2">
                                <Instagram className="w-6 h-6" />
                            </div>
                            <span className="text-xs uppercase tracking-wider">Instagram</span>
                        </a>
                        <a href="#" className="group flex flex-col items-center" title="TikTok">
                            <div className="border-2 border-black p-4 rounded-full group-hover:bg-black group-hover:text-white transition-colors mb-2">
                                <Video className="w-6 h-6" />
                            </div>
                            <span className="text-xs uppercase tracking-wider">TikTok</span>
                        </a>
                    </div>

                    {/* Mapa de ubicación */}
                    <div className="mt-12 mb-8">
                        <EditableText id="footer-ubicacion-title" defaultValue="📍 Nuestra Ubicación" tag="h3" className="text-center font-bold text-lg uppercase tracking-widest mb-6" />
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
                        <EditableText id="footer-direccion" defaultValue="Av. 107, Casa 128-11, Urb. Sabana Larga • Frente al C.C. Mediterranean Plaza" tag="p" className="text-center text-sm text-gray-500 mt-4" />
                    </div>

                    <div className="border-t border-black pt-8 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest font-bold text-gray-500">
                        <EditableText id="footer-copyright" defaultValue="© 2026 La New Cuisine" tag="p" />
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
