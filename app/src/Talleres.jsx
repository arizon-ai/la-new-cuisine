import React from 'react';
import { ChefHat, Cake, Globe, Utensils, FlameKindling, Users, Sparkles } from 'lucide-react';
import EditableText from './components/EditableText';

export default function Talleres() {
    const categorias = [
        {
            titulo: 'Panadería & Repostería',
            icono: Cake,
            talleres: [
                { nombre: 'Taller de Panadería', descripcion: 'Aprende las bases de la panificación artesanal' },
                { nombre: 'Taller de Repostería', descripcion: 'Técnicas de pastelería básica y decoración' }
            ]
        },
        {
            titulo: 'Cocina Internacional',
            icono: Globe,
            talleres: [
                { nombre: 'Taller de Cocina Italiana', descripcion: 'Pastas frescas, risottos y salsas tradicionales' },
                { nombre: 'Taller de Cocina Asiática', descripcion: 'Técnicas y sabores del Lejano Oriente' },
                { nombre: 'Taller de comida Japonesa', descripcion: 'Arte japonés del sushi y sashimi' },
                { nombre: 'Taller de Cocina China', descripcion: 'Wok, dim sum y técnicas orientales' },
                { nombre: 'Taller de Cocina Tailandesa', descripcion: 'Curry, pad thai y sabores exóticos' },
                { nombre: 'Taller de Cocina Mediterránea', descripcion: 'Sabores del mar y la tierra mediterránea' },
                { nombre: 'Taller de Cocina Española', descripcion: 'Paellas, tapas y cocina ibérica' },
                { nombre: 'Taller de Cocina Mexicana', descripcion: 'Tacos, moles y sabores picantes' },
                { nombre: 'Taller de Cocina Árabe', descripcion: 'Especias y técnicas del Medio Oriente' }
            ]
        },
        {
            titulo: 'Cocina Latinoamericana',
            icono: Utensils,
            talleres: [
                { nombre: 'Taller de Cocina Venezolana', descripcion: 'Arepas, pabellón y tradiciones locales' },
                { nombre: 'Taller de Cocina Navideña', descripcion: 'Hallacas, pan de jamón y delicias decembrinas' }
            ]
        },
        {
            titulo: 'Especialidades',
            icono: FlameKindling,
            talleres: [
                { nombre: 'Taller de Pasapalos', descripcion: 'Bocadillos perfectos para eventos' },
                { nombre: 'Taller de Alimentos en Conserva', descripcion: 'Técnicas de preservación y envasado' },
                { nombre: 'Taller de Cocina Molecular', descripcion: 'Esferificaciones, espumas y geles' },
                { nombre: 'Taller de Emplatados', descripcion: 'Arte visual y presentación gourmet' }
            ]
        },
        {
            titulo: 'Programa Juvenil',
            icono: Users,
            talleres: [
                { nombre: 'Cocina para Niños y Adolescentes', descripcion: 'Cocina divertida para niños de 7 a 16 años' }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white text-black font-sans">
            {/* Hero Section */}
            <section className="relative bg-black text-white py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6">Formación Práctica</p>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
                        Talleres<br /><span className="italic">Gastronómicos</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Capacitación intensiva en talleres prácticos. Aprende técnicas específicas de
                        cocina internacional, repostería, panadería y mucho más.
                    </p>
                </div>
            </section>

            {/* Talleres por Categoría */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {categorias.map((categoria, catIndex) => {
                        const IconComponent = categoria.icono;
                        return (
                            <div key={catIndex} className="mb-16 last:mb-0">
                                {/* Categoría Header */}
                                <div className="flex items-center gap-4 mb-8 border-b-2 border-black pb-4">
                                    <div className="p-3 rounded-full bg-black text-white">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold">{categoria.titulo}</h2>
                                    <span className="ml-auto text-sm text-gray-500 uppercase tracking-wider">
                                        {categoria.talleres.length} {categoria.talleres.length === 1 ? 'taller' : 'talleres'}
                                    </span>
                                </div>

                                {/* Grid de Talleres */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categoria.talleres.map((taller, tallerIndex) => (
                                        <div
                                            key={tallerIndex}
                                            className="p-6 bg-white border-l-4 border-black hover:bg-neutral-50 hover:shadow-lg transition-all duration-300"
                                        >
                                            <h3 className="font-bold text-lg mb-2">{taller.nombre}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{taller.descripcion}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6 bg-neutral-100 border-t border-gray-200">
                <div className="max-w-3xl mx-auto text-center">
                    <Sparkles className="w-12 h-12 mx-auto mb-6" />
                    <h3 className="text-3xl font-serif font-bold mb-4">¿Interesado en algún taller?</h3>
                    <p className="text-gray-600 mb-8 text-lg">
                        Contáctanos para conocer fechas disponibles, precios y contenido de cada taller.
                    </p>
                    <a
                        href="https://wa.me/584244635196"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors"
                    >
                        Consultar Disponibilidad
                    </a>
                </div>
            </section>

            {/* Nota */}
            <section className="py-8 px-6 bg-black text-white text-center">
                <p className="text-sm text-gray-400">
                    Los talleres incluyen certificado de asistencia e insumos. Consulta por talleres personalizados para grupos.
                </p>
            </section>
        </div>
    );
}
