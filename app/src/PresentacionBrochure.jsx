import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChefHat, Clock, MapPin, Phone, Mail, ArrowRight, ArrowLeft, Printer, ChevronDown, Maximize, Minimize, X, Quote, Camera, History, Star, Users, Award, Building } from 'lucide-react';

// ============================================
// PRESENTACIÓN BROCHURE - LA NEW CUISINE
// Diseño: Moderno, Minimalista, Impactante
// Versión 2.0 - Con animaciones y mejoras UX
// ============================================

// Componente para números animados
const AnimatedCounter = ({ target, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, target, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

// Slide names para mini preview
const slideNames = [
    'Portada', 'Quiénes Somos', 'Carreras', 'Intensivo', 'Programas Cortos',
    'Diplomado', 'ABC Molecular', 'Servicios', 'Talleres', 'Syllabus Cocina', 'Syllabus Pastelería',
    'Syllabus Panadería', 'Asistente Chef', 'Junior Chef', 'Por Qué Elegirnos', 'Calendario 2026',
    'Testimonios', 'Galería', 'Timeline', 'Contacto'
];

export default function PresentacionBrochure() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef(null);

    const totalSlides = 20; // Incluye Syllabus Panadería

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
        setTimeout(() => setIsAnimating(false), 700);
    }, [isAnimating, totalSlides]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
        setTimeout(() => setIsAnimating(false), 700);
    }, [isAnimating]);

    const goToSlide = (index) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 700);
    };

    // Navegación con teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'Escape') {
                if (isFullscreen) toggleFullscreen();
                if (showPreview) setShowPreview(false);
            } else if (e.key === 'f' || e.key === 'F') {
                toggleFullscreen();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, isFullscreen, showPreview]);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen?.();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen?.();
            setIsFullscreen(false);
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    const handlePrint = () => {
        window.print();
    };

    const progress = ((currentSlide + 1) / totalSlides) * 100;

    return (
        <>
            {/* Print Styles + Animations */}
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
        
        /* Slide Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fade-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-scale {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        
        /* Parallax effect */
        .parallax-slow {
          transition: transform 0.5s ease-out;
        }
        
        /* Hover effects */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }
      `}</style>

            {/* Navigation Controls - No Print */}
            <div className="no-print fixed top-6 right-6 z-50 flex items-center gap-3">
                <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="flex items-center gap-2 bg-white border border-black px-4 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                    title="Ver todas las slides (P)"
                >
                    <Camera className="w-4 h-4" />
                </button>
                <button
                    onClick={toggleFullscreen}
                    className="flex items-center gap-2 bg-white border border-black px-4 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                    title="Pantalla completa (F)"
                >
                    {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                </button>
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all"
                >
                    <Printer className="w-4 h-4" />
                    PDF
                </button>
            </div>

            {/* Progress Bar - No Print */}
            <div className="no-print fixed top-0 left-0 right-0 z-40 h-1 bg-gray-200">
                <div
                    className="h-full bg-black transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Mini Preview Panel - No Print */}
            {showPreview && (
                <div className="no-print fixed inset-0 z-[100] bg-black/90 backdrop-blur-lg overflow-auto p-8">
                    <button
                        onClick={() => setShowPreview(false)}
                        className="fixed top-6 right-6 p-3 bg-white text-black hover:bg-gray-200 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <h2 className="text-white text-3xl font-serif font-bold mb-8 text-center">Vista Previa de Slides</h2>
                    <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {slideNames.map((name, i) => (
                            <button
                                key={i}
                                onClick={() => { goToSlide(i); setShowPreview(false); }}
                                className={`p-4 text-left transition-all ${currentSlide === i
                                    ? 'bg-white text-black scale-105'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                <span className="text-xs font-mono opacity-60">{String(i + 1).padStart(2, '0')}</span>
                                <p className="font-bold mt-1">{name}</p>
                            </button>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 mt-8 text-sm">
                        Usa ← → para navegar • F para fullscreen • ESC para cerrar
                    </p>
                </div>
            )}

            {/* Slide Navigation - No Print */}
            <div className="no-print fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 bg-white/95 backdrop-blur-lg px-8 py-4 border border-black/10 shadow-2xl">
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0 || isAnimating}
                    className="p-2 hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-1.5">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === i
                                ? 'bg-black scale-150'
                                : 'bg-gray-300 hover:bg-gray-500'
                                }`}
                            title={slideNames[i]}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    disabled={currentSlide === totalSlides - 1 || isAnimating}
                    className="p-2 hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ArrowRight className="w-5 h-5" />
                </button>

                <div className="border-l border-gray-300 pl-4 ml-2">
                    <span className="text-sm font-mono text-gray-500">
                        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                    </span>
                </div>
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
                                className="mx-auto mb-12 w-[400px] max-w-[80vw] animate-scale"
                            />
                            <div className="flex items-center justify-center gap-8 animate-fade-up delay-200">
                                <div className="text-right text-black pr-8 border-r-2 border-black">
                                    <p className="text-6xl font-serif font-bold">
                                        <AnimatedCounter target={22} suffix="+" />
                                    </p>
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

                    {/* ========== SLIDE 2: QUIÉNES SOMOS ========== */}
                    <section className="print-page h-screen flex bg-white">
                        <div className="w-2/5 bg-black text-white p-16 flex flex-col justify-center">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Desde 2002</p>
                            <h2 className="text-5xl font-serif font-bold leading-tight mb-8">
                                Formando<br />Artistas<br /><span className="italic">Culinarios</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Centro de Capacitación Gastronómica reconocido por el Ministerio de Educación bajo el registro No. R-0129-08.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-auto">
                                <div className="text-center p-4 border border-white/20">
                                    <p className="text-3xl font-bold">22+</p>
                                    <p className="text-xs text-gray-400 uppercase">Años</p>
                                </div>
                                <div className="text-center p-4 border border-white/20">
                                    <p className="text-3xl font-bold">4</p>
                                    <p className="text-xs text-gray-400 uppercase">Carreras</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/5 p-16 flex flex-col justify-center">
                            <div className="grid grid-cols-2 gap-8 mb-12">
                                {/* Misión */}
                                <div className="p-8 border border-black">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Misión</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Formar profesionales de la gastronomía con competencias para la industria gastronómica y el turismo, aplicando métodos y tecnología de vanguardia.
                                    </p>
                                </div>
                                {/* Visión */}
                                <div className="p-8 bg-black text-white">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Visión</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Ser el centro de capacitación gastronómico líder en Venezuela y Latino América en la formación de cocineros, panaderos y pasteleros.
                                    </p>
                                </div>
                            </div>

                            {/* Valores */}
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Nuestros Valores</p>
                                <div className="flex flex-wrap gap-3">
                                    {['Responsabilidad', 'Honestidad', 'Compromiso', 'Lealtad', 'Ética', 'Innovación'].map((valor, i) => (
                                        <span key={i} className="px-4 py-2 bg-neutral-100 text-sm font-bold uppercase tracking-wider">
                                            {valor}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 3: CARRERAS ========== */}
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
                                <h2 className="text-5xl font-serif font-bold mb-12">Servicios Adicionales</h2>

                                <div className="grid grid-cols-3 gap-8">
                                    <div className="p-8 bg-white border-l-4 border-black">
                                        <h3 className="text-xl font-bold mb-4">Asesorías Gastronómicas</h3>
                                        <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                            <li>• Formulación de productos</li>
                                            <li>• Maquila de productos</li>
                                            <li>• Consultoría operativa</li>
                                            <li>• Desarrollo de menús</li>
                                            <li>• Fichas técnicas</li>
                                        </ul>
                                        <p className="text-xs text-gray-400 italic">Cotización personalizada</p>
                                    </div>

                                    <div className="p-8 bg-white border-l-4 border-black">
                                        <h3 className="text-xl font-bold mb-4">Celebración de Cumpleaños</h3>
                                        <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                            <li>• Experiencia de cocina grupal</li>
                                            <li>• Espacio exclusivo</li>
                                            <li>• Menú personalizado</li>
                                            <li>• Certificado participación</li>
                                        </ul>
                                        <p className="text-xs text-gray-400 italic">Consulta disponibilidad</p>
                                    </div>

                                    <div className="p-8 bg-white border-l-4 border-black">
                                        <h3 className="text-xl font-bold mb-4">Chef at Home</h3>
                                        <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                            <li>• Planificación de menú</li>
                                            <li>• Compra de ingredientes</li>
                                            <li>• Servicio a domicilio</li>
                                            <li>• Eventos privados</li>
                                        </ul>
                                        <p className="text-xs text-gray-400 italic">Servicio premium</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-8 mt-8">
                                    <div className="p-8 bg-white border-l-4 border-black">
                                        <h3 className="text-xl font-bold mb-4">Catering</h3>
                                        <ul className="text-sm text-gray-600 space-y-2">
                                            <li>• Eventos corporativos</li>
                                            <li>• Pasapalos & postres</li>
                                            <li>• Buffets & mesas temáticas</li>
                                        </ul>
                                    </div>

                                    <div className="p-8 bg-white border-l-4 border-black">
                                        <h3 className="text-xl font-bold mb-4">Alquiler de Espacios</h3>
                                        <ul className="text-sm text-gray-600 space-y-2">
                                            <li>• Cocina para producción</li>
                                            <li>• Espacios para eventos</li>
                                            <li>• Colocación de talento</li>
                                        </ul>
                                    </div>

                                    <div className="p-8 bg-black text-white">
                                        <h3 className="text-xl font-bold mb-4">Pasantías</h3>
                                        <ul className="text-sm text-gray-300 space-y-2">
                                            <li>• Restaurantes aliados</li>
                                            <li>• Hoteles 5 estrellas</li>
                                            <li>• Experiencia real</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 8: TALLERES ========== */}
                    <section className="print-page h-screen flex bg-white">
                        <div className="w-2/5 bg-black text-white p-16 flex flex-col justify-center">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">07</p>
                            <h2 className="text-5xl font-serif font-bold leading-tight mb-8">
                                Talleres<br /><span className="italic">Gastronómicos</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Capacitación intensiva en talleres prácticos de un día. Incluye certificado e insumos.
                            </p>
                            <div className="text-center p-6 border border-white/20">
                                <p className="text-4xl font-bold">18+</p>
                                <p className="text-xs text-gray-400 uppercase mt-2">Talleres disponibles</p>
                            </div>
                        </div>

                        <div className="w-3/5 p-12 flex flex-col justify-center">
                            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
                                <div className="mb-6">
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-bold">Cocina Internacional</p>
                                    <ul className="space-y-1 text-gray-600">
                                        <li>• Italiana</li>
                                        <li>• Asiática</li>
                                        <li>• Sushi</li>
                                        <li>• China</li>
                                        <li>• Tailandesa</li>
                                        <li>• Mediterránea</li>
                                        <li>• Española</li>
                                        <li>• Mexicana</li>
                                        <li>• Árabe</li>
                                    </ul>
                                </div>
                                <div className="mb-6">
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-bold">Panadería & Repostería</p>
                                    <ul className="space-y-1 text-gray-600">
                                        <li>• Panadería artesanal</li>
                                        <li>• Repostería francesa</li>
                                    </ul>
                                </div>
                                <div className="mb-6">
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-bold">Cocina Latinoamericana</p>
                                    <ul className="space-y-1 text-gray-600">
                                        <li>• Venezolana</li>
                                        <li>• Navideña</li>
                                    </ul>
                                </div>
                                <div className="mb-6">
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-bold">Especialidades</p>
                                    <ul className="space-y-1 text-gray-600">
                                        <li>• Pasapalos</li>
                                        <li>• Conservas</li>
                                        <li>• Molecular</li>
                                        <li>• Emplatados</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-bold">Programa Juvenil</p>
                                    <ul className="space-y-1 text-gray-600">
                                        <li>• Mini Chef (niños y adolescentes)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 9: SYLLABUS COCINA ========== */}
                    <section className="print-page h-screen flex bg-neutral-50">
                        <div className="w-full p-16 flex flex-col justify-center">
                            <div className="max-w-6xl mx-auto">
                                <div className="flex justify-between items-start mb-12">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">08</p>
                                        <h2 className="text-4xl font-serif font-bold">Chef Cocina Internacional</h2>
                                        <p className="text-gray-500 mt-2">15 meses • 3 niveles + pasantía</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-8">
                                    <div className="p-6 bg-white border-t-4 border-black">
                                        <span className="bg-black text-white text-xs px-3 py-1 font-bold">BÁSICO</span>
                                        <ul className="mt-4 text-sm text-gray-600 space-y-1">
                                            <li>• Técnicas de Cortes</li>
                                            <li>• Fondos, Caldos, Sopas</li>
                                            <li>• Salsas Madres</li>
                                            <li>• Cereales, Hortalizas</li>
                                            <li>• Setas, Hierbas, Especias</li>
                                            <li>• Lácteos, Grasas, Pastas</li>
                                            <li>• Técnicas de Emplatado</li>
                                            <li>• Etiqueta y Protocolo</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 bg-white border-t-4 border-gray-400">
                                        <span className="bg-gray-600 text-white text-xs px-3 py-1 font-bold">INTERMEDIO</span>
                                        <ul className="mt-4 text-sm text-gray-600 space-y-1">
                                            <li>• Aves I y II</li>
                                            <li>• Pato y Pavo</li>
                                            <li>• Conejo, Cordero, Chivo</li>
                                            <li>• Cerdo y Bovino</li>
                                            <li>• Pescados (blancos, azules)</li>
                                            <li>• Mariscos I y II</li>
                                            <li>• Costos II</li>
                                            <li>• Inglés Gastronómico</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 bg-black text-white">
                                        <span className="bg-white text-black text-xs px-3 py-1 font-bold">AVANZADO</span>
                                        <ul className="mt-4 text-sm text-gray-300 space-y-1">
                                            <li>• Charcutería</li>
                                            <li>• Panadería</li>
                                            <li>• Postres I y II</li>
                                            <li>• Cocina Molecular</li>
                                            <li>• Chocolate</li>
                                            <li>• Cocina Internacional</li>
                                            <li>• Cocina Venezolana</li>
                                            <li>• Nutrición y Dietética</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 10: SYLLABUS PASTELERÍA ========== */}
                    <section className="print-page h-screen flex bg-white">
                        <div className="w-full p-16 flex flex-col justify-center">
                            <div className="max-w-6xl mx-auto">
                                <div className="grid grid-cols-2 gap-16">
                                    {/* Chef Pastelero */}
                                    <div>
                                        <h3 className="text-3xl font-serif font-bold mb-2">Chef Pastelero</h3>
                                        <p className="text-gray-500 mb-6">3 Niveles + Pasantía</p>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-neutral-50 border-l-4 border-black">
                                                <span className="text-xs font-bold uppercase">Básico</span>
                                                <p className="text-sm text-gray-600 mt-1">Pastelería base, Cremas, Decoración, Brownies, Cheesecake</p>
                                            </div>
                                            <div className="p-4 bg-neutral-50 border-l-4 border-gray-400">
                                                <span className="text-xs font-bold uppercase">Intermedio</span>
                                                <p className="text-sm text-gray-600 mt-1">Hojaldre, Bombonería, Chocolate, Tortas clásicas</p>
                                            </div>
                                            <div className="p-4 bg-black text-white">
                                                <span className="text-xs font-bold uppercase">Avanzado</span>
                                                <p className="text-sm text-gray-300 mt-1">Pastelería Internacional, Entremets, Técnicas avanzadas</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chef Panadero */}
                                    <div>
                                        <h3 className="text-3xl font-serif font-bold mb-2">Chef Panadero</h3>
                                        <p className="text-gray-500 mb-6">2 Niveles</p>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-neutral-50 border-l-4 border-black">
                                                <span className="text-xs font-bold uppercase">Básico</span>
                                                <p className="text-sm text-gray-600 mt-1">Principios de panificación, Harinas, Pan canilla, Ciabatta, Croissants</p>
                                            </div>
                                            <div className="p-4 bg-neutral-50 border-l-4 border-gray-400">
                                                <span className="text-xs font-bold uppercase">Intermedio</span>
                                                <p className="text-sm text-gray-600 mt-1">Masa madre, Focaccia, Brioche, Panes especiales, Pan de ajo</p>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-serif font-bold mb-2 mt-10">Diplomado Gerencia</h3>
                                        <p className="text-gray-500 mb-4">4 meses • 3 niveles</p>
                                        <div className="flex flex-wrap gap-2 text-xs">
                                            {['Canvas', 'Marketing', 'Neuromarketing', 'Liderazgo', 'Ingeniería Menú', 'Higiene'].map((item, i) => (
                                                <span key={i} className="px-2 py-1 bg-neutral-100">{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 12: SYLLABUS PANADERÍA ========== */}
                    <section className="print-page h-screen flex bg-white">
                        <div className="w-2/5 bg-black text-white p-16 flex flex-col justify-center">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">12</p>
                            <h2 className="text-5xl font-serif font-bold leading-tight mb-8">
                                Chef<br /><span className="italic">Panadero</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Domina el arte de la panificación artesanal. Desde técnicas básicas hasta masas madres y fermentación natural.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 border border-white/20">
                                    <p className="text-3xl font-bold">2</p>
                                    <p className="text-xs text-gray-400 uppercase">Niveles</p>
                                </div>
                                <div className="text-center p-4 border border-white/20">
                                    <p className="text-3xl font-bold">10</p>
                                    <p className="text-xs text-gray-400 uppercase">Meses</p>
                                </div>
                                <div className="text-center p-4 border border-white/20">
                                    <p className="text-3xl font-bold">240h</p>
                                    <p className="text-xs text-gray-400 uppercase">Pasantías</p>
                                </div>
                                <div className="text-center p-4 border border-white/20">
                                    <p className="text-3xl font-bold">42</p>
                                    <p className="text-xs text-gray-400 uppercase">Temas</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/5 p-12 flex flex-col justify-center overflow-hidden">
                            <div className="grid grid-cols-2 gap-8">
                                {/* Nivel Básico */}
                                <div>
                                    <h3 className="text-xl font-bold uppercase mb-4 pb-2 border-b-2 border-black">Nivel Básico</h3>
                                    <p className="text-xs text-gray-500 mb-4">20 temas • 5 meses</p>
                                    <div className="space-y-1 text-xs text-gray-600">
                                        {[
                                            'Principios de panificación',
                                            'Métodos de masas con levadura',
                                            'Fórmulas panaderas',
                                            'Pan campesino y canilla',
                                            'Pan piñita y lácteo',
                                            'Tortas y ponqués comerciales',
                                            'Cachitos y derivados',
                                            'Masas Choux y Brioche',
                                            'Cinnamon y variaciones',
                                            'Croissant y hojaldrado'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 py-0.5">
                                                <span className="w-1 h-1 bg-black rounded-full flex-shrink-0"></span>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Nivel Avanzado */}
                                <div>
                                    <h3 className="text-xl font-bold uppercase mb-4 pb-2 border-b-2 border-black">Nivel Avanzado</h3>
                                    <p className="text-xs text-gray-500 mb-4">22 temas • 5 meses</p>
                                    <div className="space-y-1 text-xs text-gray-600">
                                        {[
                                            'Hojaldre y aplicaciones',
                                            'Pizzas y focaccias',
                                            'Pan de coco y jamón',
                                            'Pan de queso y guayaba',
                                            'Pan hamburguesa y hot dog',
                                            'Pan francés tradicional',
                                            'Pan sin amasar',
                                            'Pan Ciabatta',
                                            'Masas madres y fermentación',
                                            'Fine Dining y pasantías'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 py-0.5">
                                                <span className="w-1 h-1 bg-black rounded-full flex-shrink-0"></span>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-gray-200">
                                <div className="text-center p-3 bg-black text-white">
                                    <p className="text-xl font-bold">50€</p>
                                    <p className="text-xs uppercase">Inscripción</p>
                                </div>
                                <div className="text-center p-3 border border-black">
                                    <p className="text-xl font-bold">140€</p>
                                    <p className="text-xs uppercase">Mensualidad</p>
                                </div>
                                <div className="text-center p-3 border border-black">
                                    <p className="text-xl font-bold">90€</p>
                                    <p className="text-xs uppercase">Kit</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 13: ASISTENTE DE CHEF ========== */}
                    <section className="print-page h-screen flex bg-white">
                        <div className="w-2/5 bg-black text-white p-16 flex flex-col justify-center">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">13</p>
                            <h2 className="text-5xl font-serif font-bold leading-tight mb-8">
                                Asistente<br />de <span className="italic">Chef</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Tu primer paso hacia la excelencia culinaria. Formación práctica intensiva de 5 meses.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 border border-white/20">
                                    <p className="text-3xl font-bold">5</p>
                                    <p className="text-xs text-gray-400 uppercase">Meses</p>
                                </div>
                                <div className="text-center p-4 border border-white/20">
                                    <p className="text-3xl font-bold">15</p>
                                    <p className="text-xs text-gray-400 uppercase">Temas</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/5 p-12 flex flex-col justify-center">
                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-bold">Contenido del Programa</p>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600 mb-8">
                                {[
                                    'Buenas Prácticas en Manipulación',
                                    'Cortes de precisión',
                                    'Fondos, sopas y cremas',
                                    'Huevos y sus técnicas',
                                    'Salsas madres',
                                    'Pollo: diferentes preparaciones',
                                    'Ensaladas y vinagretas',
                                    'Pasta fresca y salsas',
                                    'Masas quebradas',
                                    'Verduras y hortalizas',
                                    'Carnes rojas',
                                    'Charcutería',
                                    'Pescados y mariscos',
                                    'Pastelería básica',
                                    'Evaluación final'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 py-1">
                                        <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                                <div className="text-center p-4 bg-black text-white">
                                    <p className="text-2xl font-bold">35€</p>
                                    <p className="text-xs uppercase">Inscripción</p>
                                </div>
                                <div className="text-center p-4 border border-black">
                                    <p className="text-2xl font-bold">110€</p>
                                    <p className="text-xs uppercase">Mensualidad</p>
                                </div>
                                <div className="text-center p-4 border border-black">
                                    <p className="text-2xl font-bold">70€</p>
                                    <p className="text-xs uppercase">Kit</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 14: JUNIOR CHEF ========== */}
                    <section className="print-page h-screen flex bg-neutral-50">
                        <div className="w-full p-16 flex flex-col justify-center">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-12">
                                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">14</p>
                                    <h2 className="text-5xl font-serif font-bold">Junior Chef</h2>
                                    <p className="text-xl text-gray-500 mt-4">Cocina para Niños y Adolescentes</p>
                                </div>

                                <div className="grid grid-cols-2 gap-12">
                                    {/* Niños */}
                                    <div className="bg-white p-10 border-l-4 border-black">
                                        <h3 className="text-3xl font-serif font-bold mb-2">Niños</h3>
                                        <p className="text-gray-500 mb-6">7 a 12 años</p>

                                        <div className="space-y-3 text-sm text-gray-600 mb-6">
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                                                Introducción a la cocina segura
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                                                Recetas divertidas y saludables
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                                                Postres y decoración
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                                                Trabajo en equipo
                                            </div>
                                        </div>

                                        <div className="flex items-baseline gap-2 pt-4 border-t">
                                            <span className="text-3xl font-bold">80€</span>
                                            <span className="text-gray-400">/mes</span>
                                        </div>
                                    </div>

                                    {/* Adolescentes */}
                                    <div className="bg-black text-white p-10">
                                        <h3 className="text-3xl font-serif font-bold mb-2">Adolescentes</h3>
                                        <p className="text-gray-400 mb-6">13 a 16 años</p>

                                        <div className="space-y-3 text-sm text-gray-300 mb-6">
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                                Técnicas culinarias avanzadas
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                                Cocina internacional
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                                Presentación de platos
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                                Proyecto final familiar
                                            </div>
                                        </div>

                                        <div className="flex items-baseline gap-2 pt-4 border-t border-white/20">
                                            <span className="text-3xl font-bold">80€</span>
                                            <span className="text-gray-400">/mes</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 text-center text-sm text-gray-500">
                                    <p>Duración: 4 meses • Viernes en la tarde • Inscripción: 30€ (incluye uniforme)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 15: POR QUÉ ELEGIRNOS ========== */}
                    <section className="print-page h-screen flex bg-black text-white">
                        <div className="w-1/2 p-20 flex flex-col justify-center">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">15</p>
                            <h2 className="text-6xl font-serif font-bold leading-tight mb-8">
                                ¿Por qué<br /><span className="italic">elegirnos?</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                Capital humano incomparable, instructores con experiencia real e instalaciones diseñadas para formar profesionales.
                            </p>
                        </div>

                        <div className="w-1/2 bg-white text-black p-16 flex flex-col justify-center">
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="text-center p-8 border border-black">
                                    <p className="text-5xl font-bold mb-2">
                                        <AnimatedCounter target={22} suffix="+" />
                                    </p>
                                    <p className="text-sm text-gray-500 uppercase">Años de Experiencia</p>
                                </div>
                                <div className="text-center p-8 border border-black">
                                    <p className="text-5xl font-bold mb-2">4</p>
                                    <p className="text-sm text-gray-500 uppercase">Carreras Profesionales</p>
                                </div>
                                <div className="text-center p-8 border border-black">
                                    <p className="text-5xl font-bold mb-2">18+</p>
                                    <p className="text-sm text-gray-500 uppercase">Talleres Prácticos</p>
                                </div>
                                <div className="text-center p-8 bg-black text-white">
                                    <p className="text-5xl font-bold mb-2">∞</p>
                                    <p className="text-sm text-gray-400 uppercase">Pasión por Enseñar</p>
                                </div>
                            </div>

                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3 p-3 bg-neutral-100">
                                    <span className="w-2 h-2 bg-black rounded-full"></span>
                                    Certificación oficial MPPE No. R-0129-08
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-neutral-100">
                                    <span className="w-2 h-2 bg-black rounded-full"></span>
                                    Pasantías en hoteles y restaurantes
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-neutral-100">
                                    <span className="w-2 h-2 bg-black rounded-full"></span>
                                    Instructores con experiencia internacional
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 16: CALENDARIO 2026 ========== */}
                    <section className="print-page h-screen flex bg-white">
                        <div className="w-full p-16 flex flex-col justify-center">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-12">
                                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">16</p>
                                    <h2 className="text-5xl font-serif font-bold">Calendario 2026</h2>
                                    <p className="text-gray-500 mt-4">Próximas fechas de inicio</p>
                                </div>

                                <div className="grid grid-cols-3 gap-8">
                                    {/* Cocina Internacional */}
                                    <div className="border border-black">
                                        <div className="bg-black text-white p-4">
                                            <h3 className="font-bold text-lg">Chef Cocina Internacional</h3>
                                        </div>
                                        <div className="p-6 space-y-3 text-sm">
                                            <div className="flex justify-between">
                                                <span>Lunes Tarde</span>
                                                <span className="font-bold">2 Feb</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Martes Tarde</span>
                                                <span className="font-bold">27 Ene</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Intensivo (Mar-Vie)</span>
                                                <span className="font-bold">24 Feb</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pastelería */}
                                    <div className="border border-black">
                                        <div className="bg-black text-white p-4">
                                            <h3 className="font-bold text-lg">Chef Pastelero</h3>
                                        </div>
                                        <div className="p-6 space-y-3 text-sm">
                                            <div className="flex justify-between">
                                                <span>Mié/Jue Mañana</span>
                                                <span className="font-bold">25-26 Feb</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Sábado Mañana</span>
                                                <span className="font-bold">28 Feb</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Lunes Nocturno</span>
                                                <span className="font-bold">23 Feb</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Otros Programas */}
                                    <div className="border border-black">
                                        <div className="bg-black text-white p-4">
                                            <h3 className="font-bold text-lg">Otros Programas</h3>
                                        </div>
                                        <div className="p-6 space-y-3 text-sm">
                                            <div className="flex justify-between">
                                                <span>Diplomado Gerencia</span>
                                                <span className="font-bold">3 Feb</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Chef Panadero</span>
                                                <span className="font-bold">9 Feb</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Junior Chef</span>
                                                <span className="font-bold">20 Feb</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-center text-sm text-gray-400 mt-8">
                                    * Fechas estimadas sujetas a confirmación. Consulta disponibilidad por WhatsApp.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 17: TESTIMONIOS ========== */}
                    <section className="print-page h-screen flex bg-neutral-50">
                        <div className="w-full p-16 flex flex-col justify-center">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-16">
                                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">17</p>
                                    <h2 className="text-5xl font-serif font-bold">Lo que dicen nuestros egresados</h2>
                                </div>

                                <div className="grid grid-cols-3 gap-8">
                                    {[
                                        {
                                            quote: "La New Cuisine me dio las bases sólidas para emprender mi propio restaurante. Los instructores son excelentes profesionales.",
                                            name: "Carlos Mendoza",
                                            role: "Chef Ejecutivo",
                                            year: "Egresado 2019"
                                        },
                                        {
                                            quote: "La formación práctica y la pasantía fueron fundamentales para mi desarrollo profesional. Hoy trabajo en un hotel 5 estrellas.",
                                            name: "María González",
                                            role: "Chef Pastelera",
                                            year: "Egresada 2021"
                                        },
                                        {
                                            quote: "El diplomado en gerencia me ayudó a entender el negocio gastronómico desde una perspectiva empresarial.",
                                            name: "Andrés Ramírez",
                                            role: "Empresario Gastronómico",
                                            year: "Egresado 2020"
                                        }
                                    ].map((testimonial, i) => (
                                        <div key={i} className="bg-white p-8 border-l-4 border-black relative">
                                            <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200" />
                                            <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                            <div className="border-t pt-4">
                                                <p className="font-bold">{testimonial.name}</p>
                                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                                                <p className="text-xs text-gray-400 mt-1">{testimonial.year}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 18: GALERÍA ========== */}
                    <section className="print-page h-screen flex bg-black text-white">
                        <div className="w-2/5 p-16 flex flex-col justify-center">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">18</p>
                            <h2 className="text-5xl font-serif font-bold leading-tight mb-8">
                                Nuestras<br /><span className="italic">Instalaciones</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Espacios diseñados especialmente para la formación de profesionales culinarios, equipados con tecnología de vanguardia.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 border border-white/20">
                                    <p className="text-3xl font-bold">3</p>
                                    <p className="text-xs text-gray-400 uppercase">Cocinas profesionales</p>
                                </div>
                                <div className="text-center p-4 border border-white/20">
                                    <p className="text-3xl font-bold">1</p>
                                    <p className="text-xs text-gray-400 uppercase">Aula teórica</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/5 grid grid-cols-2 gap-1 p-1">
                            {[
                                { title: 'Cocina Principal', desc: 'Estaciones individuales' },
                                { title: 'Área de Pastelería', desc: 'Equipos especializados' },
                                { title: 'Zona de Panadería', desc: 'Hornos profesionales' },
                                { title: 'Aula de Clases', desc: 'Formación teórica' }
                            ].map((area, i) => (
                                <div key={i} className="bg-neutral-800 p-8 flex flex-col justify-end hover:bg-neutral-700 transition-colors">
                                    <Camera className="w-8 h-8 mb-4 opacity-30" />
                                    <h3 className="font-bold text-lg">{area.title}</h3>
                                    <p className="text-sm text-gray-400">{area.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ========== SLIDE 19: TIMELINE ========== */}
                    <section className="print-page h-screen flex bg-white">
                        <div className="w-full p-16 flex flex-col justify-center">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-16">
                                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">19</p>
                                    <h2 className="text-5xl font-serif font-bold">Nuestra Historia</h2>
                                    <p className="text-gray-500 mt-4">Más de dos décadas formando artistas culinarios</p>
                                </div>

                                <div className="relative">
                                    {/* Timeline line */}
                                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black" />

                                    <div className="grid grid-cols-2 gap-8">
                                        {[
                                            { year: '2002', title: 'Fundación', desc: 'Nace La New Cuisine en Valencia, Venezuela' },
                                            { year: '2008', title: 'Certificación MPPE', desc: 'Registro oficial No. R-0129-08' },
                                            { year: '2012', title: 'Expansión', desc: 'Nuevas instalaciones y programas' },
                                            { year: '2018', title: 'Internacionalización', desc: 'Alianzas con hoteles y restaurantes' },
                                            { year: '2022', title: '20 Años', desc: 'Celebración de dos décadas de excelencia' },
                                            { year: '2026', title: 'Innovación', desc: 'Nuevos programas y tecnología' }
                                        ].map((event, i) => (
                                            <div key={i} className={`flex items-center gap-4 ${i % 2 === 0 ? 'pr-12 justify-end text-right' : 'pl-12'}`}>
                                                {i % 2 === 0 && (
                                                    <>
                                                        <div>
                                                            <p className="text-2xl font-bold">{event.year}</p>
                                                            <p className="font-bold text-lg">{event.title}</p>
                                                            <p className="text-sm text-gray-500">{event.desc}</p>
                                                        </div>
                                                        <div className="w-4 h-4 bg-black rounded-full flex-shrink-0 relative z-10" />
                                                    </>
                                                )}
                                                {i % 2 === 1 && (
                                                    <>
                                                        <div className="w-4 h-4 bg-black rounded-full flex-shrink-0 relative z-10" />
                                                        <div>
                                                            <p className="text-2xl font-bold">{event.year}</p>
                                                            <p className="font-bold text-lg">{event.title}</p>
                                                            <p className="text-sm text-gray-500">{event.desc}</p>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ========== SLIDE 20: CONTACTO ========== */}
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
