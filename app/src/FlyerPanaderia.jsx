import React, { useState } from 'react';
import {
    GraduationCap,
    Calendar,
    Clock,
    ClipboardText,
    Bread,
    ListChecks,
    Star,
    Money,
    WhatsappLogo
} from '@phosphor-icons/react';
import EditableText from './components/EditableText';

// Tag para estados
const StatusBadge = ({ children, dark = false }) => (
    <span style={{
        display: 'inline-block',
        fontSize: '10px',
        background: dark ? '#000' : '#eee',
        color: dark ? '#fff' : '#000',
        padding: '2px 6px',
        borderRadius: '4px',
        marginLeft: 'auto',
        fontFamily: "'Azeret Mono', monospace",
        textTransform: 'uppercase'
    }}>
        {children}
    </span>
);

// Level Tab Component - Black/White style
const LevelTab = ({ level, title, active, onClick }) => (
    <button
        onClick={onClick}
        style={{
            flex: 1,
            padding: '15px 20px',
            backgroundColor: active ? '#000' : '#f5f5f5',
            color: active ? '#fff' : '#333',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '14px',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
            fontFamily: "'Arimo', sans-serif",
            borderBottom: active ? 'none' : '2px solid #000'
        }}
    >
        <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '4px' }}>{level}</div>
        {title}
    </button>
);

// Content Item - Black style
const ContentItem = ({ number, children }) => (
    <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        padding: '12px 0',
        borderBottom: '1px solid #eee',
        fontSize: '13px',
        lineHeight: 1.5
    }}>
        <span style={{
            minWidth: '28px',
            height: '28px',
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            fontWeight: 700,
            fontFamily: "'Azeret Mono', monospace"
        }}>
            {number}
        </span>
        <span style={{ paddingTop: '4px' }}>{children}</span>
    </div>
);

// Feature Card - Black/White with Phosphor icon
const FeatureCard = ({ icon: Icon, value, label }) => (
    <div style={{
        textAlign: 'center',
        padding: '20px 15px',
        backgroundColor: '#fff',
        border: '1px solid #000'
    }}>
        <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>
            <Icon size={28} weight="light" color="#000" />
        </div>
        <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>{value}</div>
        <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', marginTop: '4px' }}>{label}</div>
    </div>
);

export default function FlyerPanaderia() {
    const [activeLevel, setActiveLevel] = useState('basico');

    const nivelBasico = [
        "Principios básicos de panificación",
        "Métodos de elaboración de masas con levadura",
        "Clases de harina",
        "Métodos y fórmulas panaderas",
        "1era evaluación teórico-práctica",
        "Oratoria y expresión corporal",
        "Pan campesino",
        "Pan canilla y derivados",
        "Pan piñita y otras formas",
        "Pan lácteo, variaciones",
        "2da evaluación teórico-práctica",
        "Costos I",
        "Tortas y ponqués comerciales",
        "Cachitos y derivados",
        "Masas Choux",
        "Masa Brioche",
        "Cinnamon y variaciones",
        "Croissant y técnicas de hojaldrado",
        "Etiqueta y protocolo",
        "Evaluación final del nivel"
    ];

    const nivelAvanzado = [
        "Hojaldre base y aplicaciones",
        "Pizzas y focaccias",
        "Pan de coco",
        "Pan de jamón",
        "1era evaluación teórico-práctica",
        "Nutrición y dietética",
        "Pan de queso y variaciones",
        "Pan de guayaba",
        "Pan de hamburguesa y hot dog",
        "Pan francés tradicional",
        "2da evaluación teórico-práctica",
        "Inglés gastronómico",
        "Pan sin amasar",
        "Pan de mantequilla",
        "Pan Ciabatta",
        "Focaccia italiana",
        "Francés gastronómico",
        "Masas madres y fermentación natural",
        "Costos II",
        "Electiva",
        "Evaluación técnica individual final",
        "Fine Dining",
        "Entrega del informe final e informe de pasantías"
    ];

    const getActiveContent = () => {
        switch (activeLevel) {
            case 'basico': return nivelBasico;
            case 'avanzado': return nivelAvanzado;
            default: return nivelBasico;
        }
    };

    const getLevelDescription = () => {
        switch (activeLevel) {
            case 'basico':
                return "Este nivel establece los principios fundamentales de la panificación, métodos de elaboración, fórmulas panaderas y técnicas esenciales para construir habilidades operativas básicas. Incluye preparación de panes tradicionales y masas especiales.";
            case 'avanzado':
                return "Domina técnicas avanzadas de panadería artesanal: masas madres, fermentación natural, panes internacionales y preparación para el examen técnico final, Fine Dining y 240 horas de pasantías.";
            default:
                return "";
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#fff',
            fontFamily: "'Arimo', sans-serif"
        }}>
            {/* Importar fuentes */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;700;800&family=Azeret+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

            <div className="responsive-container" style={{
                maxWidth: '1280px',
                margin: '0 auto',
                backgroundColor: '#fff'
            }}>

                <div className="responsive-hero" style={{
                    position: 'relative',
                    height: '720px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}>
                    {/* Barra superior negra */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '12px',
                        backgroundColor: '#000',
                        zIndex: 20
                    }} />

                    {/* Imagen de fondo */}
                    <img
                        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2672&auto=format&fit=crop"
                        alt="Chef Panadero"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            top: 0,
                            left: 0
                        }}
                    />

                    {/* Cuadro central */}
                    <div className="responsive-card" style={{
                        position: 'relative',
                        zIndex: 10,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '40px 60px',
                        width: '540px',
                        textAlign: 'center',
                        border: '2px solid #000',
                        boxShadow: '15px 15px 0px rgba(0,0,0,1)'
                    }}>
                        <img
                            src="/logo.png"
                            alt="La New Cuisine"
                            className="responsive-logo"
                            style={{ width: '320px', maxWidth: '80%', height: 'auto', margin: '0 auto 15px' }}
                        />
                        <EditableText
                            id="flyer-panaderia-hero-title"
                            defaultValue="CARRERA CHEF PANADERO"
                            tag="h2"
                            style={{ fontSize: '22px', color: '#333', fontWeight: 400, marginTop: 0, letterSpacing: '2px', fontFamily: "'Arimo', sans-serif", textTransform: 'uppercase' }}
                        />
                        <hr style={{ border: 0, height: '2px', background: '#000', margin: '25px auto', width: '60px' }} />
                        <EditableText
                            id="flyer-panaderia-hero-subtitle"
                            defaultValue="2 Niveles • 10 Meses • 240 Horas de Pasantías"
                            tag="p"
                            style={{ fontSize: '13px', fontFamily: "'Azeret Mono'", color: '#000', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}
                        />
                    </div>
                </div>

                {/* CONTENT */}
                <div className="flyer-content" style={{ padding: '30px' }}>
                    <EditableText
                        id="flyer-panaderia-main-title"
                        defaultValue="Carrera de\nChef Panadero 2026"
                        tag="h1"
                        style={{ fontSize: '28px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px', lineHeight: 1.1 }}
                        multiline={true}
                    />
                    <EditableText
                        id="flyer-panaderia-content-subtitle"
                        defaultValue="Formación profesional en panadería artesanal"
                        tag="span"
                        style={{ fontFamily: "'Azeret Mono', monospace", fontSize: '13px', color: '#555', marginBottom: '25px', display: 'block', borderLeft: '3px solid #000', paddingLeft: '10px' }}
                    />

                    {/* ESTRUCTURA DE LA CARRERA */}
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        marginBottom: '25px',
                        border: '1px solid #000'
                    }}>
                        <h3 style={{
                            fontSize: '14px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            marginBottom: '15px',
                            marginTop: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <GraduationCap size={20} weight="light" color="#000" /> <EditableText id="flyer-panaderia-estructura-title" defaultValue="Estructura de la Carrera" tag="span" />
                        </h3>
                        <EditableText
                            id="flyer-panaderia-estructura-desc"
                            defaultValue="La New Cuisine ofrece programas de formación en panadería adaptados a nivel básico y avanzado. Cada nivel tiene una duración de 20 semanas (5 meses). Las clases son teórico-prácticas con evaluación continua, 3 evaluaciones por nivel. En el nivel avanzado: examen técnico, presentación del Fine Dining, y cumplimiento de 240 horas de pasantías."
                            tag="p"
                            style={{ fontSize: '14px', lineHeight: 1.7, color: '#333', margin: 0 }}
                            multiline={true}
                        />
                    </div>

                    {/* CARACTERÍSTICAS */}
                    <div className="flyer-grid-4" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '10px',
                        marginBottom: '25px'
                    }}>
                        <FeatureCard icon={Bread} value="2" label="Niveles" />
                        <FeatureCard icon={Calendar} value="10" label="Meses Total" />
                        <FeatureCard icon={Clock} value="240h" label="Pasantías" />
                        <FeatureCard icon={GraduationCap} value="6" label="Evaluaciones" />
                    </div>

                    {/* TABS DE NIVELES */}
                    <div style={{ marginBottom: '25px' }}>
                        <div className="flyer-tabs" style={{ display: 'flex', border: '2px solid #000', borderBottom: 'none' }}>
                            <LevelTab
                                level="Nivel 1"
                                title="Básico"
                                active={activeLevel === 'basico'}
                                onClick={() => setActiveLevel('basico')}
                            />
                            <LevelTab
                                level="Nivel 2"
                                title="Avanzado"
                                active={activeLevel === 'avanzado'}
                                onClick={() => setActiveLevel('avanzado')}
                            />
                        </div>

                        {/* Contenido del nivel activo */}
                        <div style={{
                            border: '2px solid #000',
                            borderTop: '4px solid #000',
                            padding: '25px'
                        }}>
                            {/* Duración del nivel */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#000',
                                color: '#fff'
                            }}>
                                <Clock size={28} weight="light" color="#fff" />
                                <div>
                                    <EditableText id="flyer-panaderia-duracion-label" defaultValue="Duración del nivel" tag="div" style={{ fontSize: '12px', opacity: 0.9 }} />
                                    <EditableText id="flyer-panaderia-duracion-valor" defaultValue="5 Meses (20 semanas)" tag="div" style={{ fontSize: '18px', fontWeight: 700 }} />
                                </div>
                            </div>

                            {/* Descripción del nivel */}
                            <div style={{
                                fontSize: '14px',
                                lineHeight: 1.7,
                                color: '#333',
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#f9f9f9',
                                borderLeft: '4px solid #000'
                            }}>
                                <EditableText
                                    id={`flyer-panaderia-${activeLevel}-desc`}
                                    defaultValue={getLevelDescription()}
                                    tag="p"
                                    style={{ margin: 0 }}
                                />
                            </div>

                            {/* Lista de contenido */}
                            <h4 style={{
                                fontSize: '14px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                marginBottom: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <ClipboardText size={20} weight="light" color="#000" /> Detalle del Contenido
                            </h4>
                            <div>
                                {getActiveContent().map((item, index) => (
                                    <ContentItem key={index} number={index + 1}>
                                        <EditableText
                                            id={`flyer-panaderia-${activeLevel}-${index}`}
                                            defaultValue={item}
                                            tag="span"
                                        />
                                    </ContentItem>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* REQUISITOS NIVEL AVANZADO */}
                    {activeLevel === 'avanzado' && (
                        <div style={{
                            backgroundColor: '#f5f5f5',
                            padding: '20px',
                            marginBottom: '25px',
                            border: '2px solid #000'
                        }}>
                            <h4 style={{
                                fontSize: '14px',
                                fontWeight: 700,
                                marginTop: 0,
                                marginBottom: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <Star size={18} weight="light" color="#000" /> Requisitos para Graduación
                            </h4>
                            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', lineHeight: 1.8 }}>
                                <li><EditableText id="flyer-panaderia-req-1" defaultValue="Aprobación del examen técnico individual" tag="span" /></li>
                                <li><EditableText id="flyer-panaderia-req-2" defaultValue="Presentación del Fine Dining" tag="span" /></li>
                                <li><EditableText id="flyer-panaderia-req-3" defaultValue="Cumplimiento de 240 horas de pasantías" tag="span" /></li>
                                <li><EditableText id="flyer-panaderia-req-4" defaultValue="Entrega del informe final" tag="span" /></li>
                            </ul>
                        </div>
                    )}

                    {/* INVERSIÓN */}
                    <div style={{
                        marginTop: '25px',
                        backgroundColor: '#f9f9f9',
                        padding: '20px',
                        border: '1px solid #000'
                    }}>
                        <div style={{
                            fontSize: '14px',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            marginBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <Money size={20} weight="light" color="#000" /> <EditableText id="flyer-panaderia-inversion-title" defaultValue="Inversión por Nivel" tag="span" />
                        </div>
                        <div className="flyer-investment-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <EditableText id="flyer-panaderia-precio-inscripcion" defaultValue="50 €" tag="div" style={{ fontSize: '20px', fontWeight: 700, color: '#000' }} />
                                <EditableText id="flyer-panaderia-label-inscripcion" defaultValue="Inscripción" tag="div" style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }} />
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <EditableText id="flyer-panaderia-precio-mensualidad" defaultValue="140 €" tag="div" style={{ fontSize: '20px', fontWeight: 700, color: '#000' }} />
                                <EditableText id="flyer-panaderia-label-mensualidad" defaultValue="Mensualidad" tag="div" style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }} />
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <EditableText id="flyer-panaderia-precio-kit" defaultValue="90 €" tag="div" style={{ fontSize: '20px', fontWeight: 700, color: '#000' }} />
                                <EditableText id="flyer-panaderia-label-kit" defaultValue="Kit Estudio" tag="div" style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }} />
                            </div>
                        </div>
                        <EditableText id="flyer-panaderia-kit-nota" defaultValue="*Kit: filipina, gorro, delantal. Financiamiento disponible en 2 cuotas." tag="p" style={{ fontSize: '10px', color: '#666', marginTop: '10px', marginBottom: 0 }} />
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flyer-footer" style={{
                    backgroundColor: '#000',
                    color: '#fff',
                    padding: '25px',
                    textAlign: 'center',
                    marginTop: 'auto'
                }}>
                    <a
                        href="https://wa.me/584244635196"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: '#fff',
                            color: '#000',
                            display: 'inline-block',
                            padding: '12px 25px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            fontFamily: "'Azeret Mono', monospace",
                            fontSize: '14px',
                            marginBottom: '15px',
                            boxShadow: '4px 4px 0px #333',
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }}
                    >
                        <EditableText id="flyer-panaderia-cta-button" defaultValue="¡DOMINA EL ARTE DEL PAN!" tag="span" />
                    </a>
                    <div style={{
                        fontSize: '12px',
                        opacity: 0.8,
                        fontFamily: "'Azeret Mono', monospace",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        <WhatsappLogo size={16} weight="light" color="#fff" /> <EditableText id="flyer-panaderia-footer-contact" defaultValue="+58 424-4635196 | Valencia, Vzla." tag="span" />
                    </div>
                </div>

            </div>
        </div>
    );
}
