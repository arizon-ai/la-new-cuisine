import React from 'react';
import { Award, Target, Eye, Heart, Users, Sparkles, History, Building } from 'lucide-react';
import EditableText from './components/EditableText';

export default function QuienesSomos() {
    const valores = [
        { nombre: 'Responsabilidad', icono: Award },
        { nombre: 'Honestidad', icono: Heart },
        { nombre: 'Compromiso', icono: Target },
        { nombre: 'Lealtad', icono: Users },
        { nombre: 'Ética', icono: Building },
        { nombre: 'Innovación', icono: Sparkles }
    ];

    return (
        <div className="min-h-screen bg-white text-black font-sans">
            {/* Hero Section */}
            <section className="relative bg-black text-white py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <EditableText
                        id="qs-hero-year"
                        defaultValue="Desde 2002"
                        tag="p"
                        className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6"
                    />
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
                        <EditableText
                            id="qs-hero-title"
                            defaultValue="Formando Artistas Culinarios"
                            tag="span"
                        />
                    </h1>
                    <EditableText
                        id="qs-hero-subtitle"
                        defaultValue="El Centro de Capacitación Gastronómica La New Cuisine es una institución reconocida por el Ministerio de Educación bajo el registro No. R-0129-08."
                        tag="p"
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    />
                </div>
            </section>

            {/* Quiénes Somos */}
            <section className="py-20 px-6 border-b border-gray-200">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <EditableText id="qs-quienes-title" defaultValue="Quiénes Somos" tag="h2" className="text-4xl font-serif font-bold mb-6" />
                            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                <EditableText id="qs-quienes-p1" defaultValue="El Centro de Capacitación Gastronómica La New Cuisine es una empresa fundada en el año 2002 la cual ofrece estudios especializados de Chef de Cocina Internacional, Chef Pastelero, Panadería y Diplomados en Gerencia Gastronómica." tag="p" multiline={true} />
                                <EditableText id="qs-quienes-p2" defaultValue="También ofrece capacitación en talleres prácticos de cocina asiática, mediterránea, appetizers, italiana, tailandesa, mexicana, árabe, light, navideña, panadería, pastelería y para niños el curso de mini-chef, entre otros." tag="p" multiline={true} />
                                <EditableText id="qs-quienes-p3" defaultValue="Contamos con amplios espacios y equipos de alta tecnología en cocina para realizar nuestras clases prácticas y teóricas." tag="p" multiline={true} />
                            </div>
                        </div>
                        <div className="bg-neutral-100 p-8 border-l-4 border-black">
                            <History className="w-12 h-12 mb-6" />
                            <EditableText id="qs-historia-title" defaultValue="Nuestra Historia" tag="h3" className="text-2xl font-serif font-bold mb-4" />
                            <EditableText id="qs-historia-desc" defaultValue="Cada día estamos en búsqueda de mejoras continuas para optimizar los procesos operativos y garantizar el mejor funcionamiento como centro de capacitación gastronómica de cocina nacional e internacional, y así continuar formando artistas culinarios." tag="p" className="text-gray-600 leading-relaxed" multiline={true} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Misión y Visión */}
            <section className="py-20 px-6 bg-neutral-50 border-b border-gray-200">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Misión */}
                        <div className="bg-white p-10 border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-black text-white p-3 rounded-full">
                                    <Target className="w-6 h-6" />
                                </div>
                                <EditableText id="qs-mision-titulo" defaultValue="Misión" tag="h3" className="text-3xl font-serif font-bold" />
                            </div>
                            <EditableText
                                id="qs-mision"
                                defaultValue="Formar a profesionales de la gastronomía con competencias para la industria gastronómica y el turismo, aplicando métodos y tecnología de vanguardia orientados hacia la excelencia y manteniendo estándares de calidad."
                                tag="p"
                                className="text-gray-600 leading-relaxed text-lg"
                                multiline={true}
                            />
                        </div>

                        {/* Visión */}
                        <div className="bg-black text-white p-10 shadow-[8px_8px_0px_0px_rgba(100,100,100,0.3)]">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-white text-black p-3 rounded-full">
                                    <Eye className="w-6 h-6" />
                                </div>
                                <EditableText id="qs-vision-titulo" defaultValue="Visión" tag="h3" className="text-3xl font-serif font-bold" />
                            </div>
                            <EditableText
                                id="qs-vision"
                                defaultValue="Ser el centro de capacitación gastronómico líder en Venezuela y Latino América en la formación de cocineros, panaderos y pasteleros para el desarrollo de la industria."
                                tag="p"
                                className="text-gray-300 leading-relaxed text-lg"
                                multiline={true}
                            />
                            <EditableText
                                id="qs-slogan"
                                defaultValue='"FORMANDO ARTISTAS CULINARIOS"'
                                tag="p"
                                className="mt-6 text-xl font-serif italic text-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-20 px-6 border-b border-gray-200">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <EditableText id="qs-valores-label" defaultValue="Lo que nos define" tag="p" className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4" />
                        <EditableText id="qs-valores-title" defaultValue="Nuestros Valores" tag="h2" className="text-4xl font-serif font-bold" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {valores.map((valor, index) => {
                            const IconComponent = valor.icono;
                            return (
                                <div
                                    key={index}
                                    className="text-center p-8 bg-white border border-gray-200 hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
                                >
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-neutral-100 rounded-full mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <p className="font-bold text-sm uppercase tracking-wider">{valor.nombre}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Diferenciación */}
            <section className="py-20 px-6 bg-black text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <EditableText id="qs-diferencia-label" defaultValue="¿Por qué elegirnos?" tag="p" className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4" />
                            <EditableText id="qs-diferencia-title" defaultValue="Nuestra Diferenciación" tag="h2" className="text-4xl font-serif font-bold mb-6" />
                            <EditableText id="qs-diferencia-desc" defaultValue="Podemos mencionar que contamos con un capital humano incomparable, un staff de instructores con gran experiencia en el área culinaria y en el área de la docencia, y sobre todo, unas instalaciones diseñadas especialmente para formar profesionales." tag="p" className="text-gray-400 leading-relaxed text-lg" multiline={true} />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-8 border border-white/20">
                                <EditableText id="qs-stat-1-value" defaultValue="22+" tag="p" className="text-5xl font-bold mb-2" />
                                <EditableText id="qs-stat-1-label" defaultValue="Años de Experiencia" tag="p" className="text-sm text-gray-400 uppercase tracking-wider" />
                            </div>
                            <div className="text-center p-8 border border-white/20">
                                <EditableText id="qs-stat-2-value" defaultValue="4" tag="p" className="text-5xl font-bold mb-2" />
                                <EditableText id="qs-stat-2-label" defaultValue="Carreras Profesionales" tag="p" className="text-sm text-gray-400 uppercase tracking-wider" />
                            </div>
                            <div className="text-center p-8 border border-white/20">
                                <EditableText id="qs-stat-3-value" defaultValue="15+" tag="p" className="text-5xl font-bold mb-2" />
                                <EditableText id="qs-stat-3-label" defaultValue="Talleres Prácticos" tag="p" className="text-sm text-gray-400 uppercase tracking-wider" />
                            </div>
                            <div className="text-center p-8 border border-white/20">
                                <EditableText id="qs-stat-4-value" defaultValue="∞" tag="p" className="text-5xl font-bold mb-2" />
                                <EditableText id="qs-stat-4-label" defaultValue="Pasión por Enseñar" tag="p" className="text-sm text-gray-400 uppercase tracking-wider" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registro Oficial */}
            <section className="py-16 px-6 bg-neutral-100">
                <div className="max-w-3xl mx-auto text-center">
                    <Award className="w-16 h-16 mx-auto mb-6 text-black" />
                    <EditableText id="qs-registro-label" defaultValue="Institución Certificada" tag="p" className="text-sm uppercase tracking-widest text-gray-500 mb-4" />
                    <EditableText id="qs-registro-title" defaultValue="Registro Ministerio de Educación y Deportes" tag="h3" className="text-2xl font-serif font-bold mb-4" />
                    <EditableText id="qs-registro-number" defaultValue="No. R-0129-08" tag="p" className="text-4xl font-mono font-bold" />
                </div>
            </section>
        </div>
    );
}
