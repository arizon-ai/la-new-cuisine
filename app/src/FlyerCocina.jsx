import React, { useState } from 'react';
import {
    GraduationCap,
    Calendar,
    Clock,
    ClipboardText,
    CookingPot,
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

export default function FlyerCocina() {
    const [activeLevel, setActiveLevel] = useState('basico');

    const nivelBasico = [
        "Técnicas generales de cortes y buenas prácticas de manipulación de alimentos",
        "Técnicas de preparación de fondos y caldos",
        "Técnicas de Preparación sopas y cremas",
        "Salsa madres y aderezos",
        "1era evaluación teórico-práctica",
        "Oratoria y expresión corporal",
        "Uso de hierbas y especias",
        "Las verduras y hortalizas",
        "Hongos y tubérculos",
        "Arroces y cereales",
        "2da. evaluación teórico-práctica",
        "Costos I",
        "Masas y fórmulas panaderas",
        "Lácteos y quesos",
        "Técnicas de emplatados",
        "Grupos de grasas",
        "El huevo y sus usos en la gastronomía",
        "Etiqueta y protocolo",
        "La pasta y sus tipos",
        "Evaluación final del nivel"
    ];

    const nivelIntermedio = [
        "Técnicas de troceado y deshuesado de carnes de aves y sus preparaciones",
        "El deshuesado del pollo y la proteína del pollo",
        "El pato otra proteína perfecta y sus preparaciones",
        "El conejo como proteínas",
        "1era evaluación teórico-práctica",
        "La carne caprina y ovina",
        "Costos II",
        "La carne cerda, su posteo y preparaciones",
        "Carne de res y su preparación",
        "Otras aplicaciones y preparaciones con carne de res",
        "2da. evaluación teórico-práctica",
        "Los pescados como proteína especial, su estructura y preparaciones",
        "Preparaciones variadas con pescados y diferentes técnicas",
        "Otras preparaciones con pescados y variadas técnicas",
        "Preparaciones asiáticas con la técnica para la elaboración de Sushi",
        "Inglés técnico gastronómico I",
        "Los mariscos y sus preparaciones I",
        "Los mariscos en la gastronomía y sus técnicas aplicables II",
        "Francés técnico gastronómico I",
        "Evaluación final del nivel"
    ];

    const nivelAvanzado = [
        "Masas y cremas dulces",
        "Muffins y panes",
        "Bizcochos, postres dulces y pasta Choux",
        "Bombones y chocolatería",
        "1era evaluación de evaluación teórica práctica",
        "Inglés gastronómico II",
        "Preparación de charcutería artesanal",
        "Alta Cocina Italiana, preparaciones y sus técnicas",
        "Alta cocina francesa",
        "Paseo por la comida árabe, técnicas y preparaciones",
        "2da Evaluación teórico – Práctica",
        "Nutrición y dietética",
        "Alta cocina latinoamericana",
        "La cocina venezolana y sus preparaciones tradicionales",
        "Francés técnico gastronómico II",
        "La comida hindú y sus preparaciones",
        "El placer de la comida asiática, alta gastronomía",
        "Técnicas Cocina molecular",
        "Electiva",
        "Cata de vino y servicios en sala",
        "Evaluación técnica individual final nivel avanzado",
        "Fine Dining",
        "Entrega del informe final e informe de pasantías"
    ];

    const getActiveContent = () => {
        switch (activeLevel) {
            case 'basico': return nivelBasico;
            case 'intermedio': return nivelIntermedio;
            case 'avanzado': return nivelAvanzado;
            default: return nivelBasico;
        }
    };

    const getLevelDescription = () => {
        switch (activeLevel) {
            case 'basico':
                return "Este nivel establece fundamentos culinarios esenciales, se enfatiza el manejo inicial de utensilios y procesos para construir habilidades operativas básicas.";
            case 'intermedio':
                return "Progresa en técnicas intermedias con platos de cocinas regionales (europea, asiática, etc.), procesamiento de proteínas, vegetales, cocciones complejas y presentaciones creativas.";
            case 'avanzado':
                return "Culmina con alta cocina internacional, menús degustación, técnicas vanguardistas, liderazgo en cocina: \"el ser, el saber y el saber hacer\" del chef profesional.";
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
                        src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2574&auto=format&fit=crop"
                        alt="Chef de Cocina Internacional"
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
                        width: '560px',
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
                            id="flyer-cocina-hero-title"
                            defaultValue="Carrera de Chef de\nCocina Internacional"
                            tag="h2"
                            className=""
                            style={{ fontSize: '22px', color: '#333', fontWeight: 400, marginTop: 0, letterSpacing: '2px', fontFamily: "'Arimo', sans-serif", textTransform: 'uppercase' }}
                            multiline={true}
                        />
                        <hr style={{ border: 0, height: '2px', background: '#000', margin: '25px auto', width: '60px' }} />
                        <EditableText
                            id="flyer-cocina-hero-subtitle"
                            defaultValue="3 Niveles • 15 Meses • 240 Horas de Pasantías"
                            tag="p"
                            style={{ fontSize: '13px', fontFamily: "'Azeret Mono'", color: '#000', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}
                        />
                    </div>
                </div>

                {/* CONTENT */}
                <div className="flyer-content" style={{ padding: '30px' }}>
                    <EditableText
                        id="flyer-cocina-main-title"
                        defaultValue="Carrera de Chef de\nCocina Internacional 2026"
                        tag="h1"
                        style={{
                            fontSize: '28px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            marginBottom: '10px',
                            lineHeight: 1.1
                        }}
                        multiline={true}
                    />
                    <EditableText
                        id="flyer-cocina-content-subtitle"
                        defaultValue="Formación profesional integral en tres niveles"
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
                            <GraduationCap size={20} weight="light" color="#000" /> <EditableText id="flyer-cocina-estructura-title" defaultValue="Estructura de la Carrera" tag="span" />
                        </h3>
                        <EditableText
                            id="flyer-cocina-estructura-desc"
                            defaultValue="La carrera consta de tres niveles (Básico, Intermedio y Avanzado), cada uno con duración de 5 meses (20 semanas). Las clases son teórico-prácticas con evaluación continua, 3 evaluaciones por nivel, y en el nivel avanzado: examen técnico, presentación del Fine Dining, y cumplimiento de 240 horas de pasantías."
                            tag="p"
                            className=""
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
                        <FeatureCard icon={ListChecks} value="3" label="Niveles" />
                        <FeatureCard icon={Calendar} value="15" label="Meses Total" />
                        <FeatureCard icon={Clock} value="240h" label="Pasantías" />
                        <FeatureCard icon={GraduationCap} value="9" label="Evaluaciones" />
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
                                title="Intermedio"
                                active={activeLevel === 'intermedio'}
                                onClick={() => setActiveLevel('intermedio')}
                            />
                            <LevelTab
                                level="Nivel 3"
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
                                    <EditableText id="flyer-cocina-duracion-label" defaultValue="Duración del nivel" tag="div" style={{ fontSize: '12px', opacity: 0.9 }} />
                                    <EditableText id="flyer-cocina-duracion-valor" defaultValue="5 Meses (20 semanas)" tag="div" style={{ fontSize: '18px', fontWeight: 700 }} />
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
                                    id={`flyer-cocina-${activeLevel}-desc`}
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
                                            id={`flyer-cocina-${activeLevel}-${index}`}
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
                                <li><EditableText id="flyer-cocina-req-1" defaultValue="Aprobación del examen técnico individual" tag="span" /></li>
                                <li><EditableText id="flyer-cocina-req-2" defaultValue="Presentación del Fine Dining" tag="span" /></li>
                                <li><EditableText id="flyer-cocina-req-3" defaultValue="Cumplimiento de 240 horas de pasantías" tag="span" /></li>
                                <li><EditableText id="flyer-cocina-req-4" defaultValue="Entrega del informe final de pasantías" tag="span" /></li>
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
                            <Money size={20} weight="light" color="#000" /> <EditableText id="flyer-cocina-inversion-title" defaultValue="Inversión por Nivel" tag="span" />
                        </div>
                        <div className="flyer-investment-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <EditableText id="flyer-cocina-precio-inscripcion" defaultValue="50 €" tag="div" style={{ fontSize: '20px', fontWeight: 700, color: '#000' }} />
                                <EditableText id="flyer-cocina-label-inscripcion" defaultValue="Inscripción" tag="div" style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }} />
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <EditableText id="flyer-cocina-precio-mensualidad" defaultValue="130 €" tag="div" style={{ fontSize: '20px', fontWeight: 700, color: '#000' }} />
                                <EditableText id="flyer-cocina-label-mensualidad" defaultValue="Mensualidad" tag="div" style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }} />
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <EditableText id="flyer-cocina-precio-kit" defaultValue="100 €" tag="div" style={{ fontSize: '20px', fontWeight: 700, color: '#000' }} />
                                <EditableText id="flyer-cocina-label-kit" defaultValue="Kit Estudio" tag="div" style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }} />
                            </div>
                        </div>
                        <EditableText id="flyer-cocina-kit-nota" defaultValue="*Kit: filipina, gorro, delantal. Financiamiento disponible en 2 cuotas." tag="p" style={{ fontSize: '10px', color: '#666', marginTop: '10px', marginBottom: 0 }} />
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
                        <EditableText id="flyer-cocina-cta-button" defaultValue="¡INICIA TU CARRERA PROFESIONAL!" tag="span" />
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
                        <WhatsappLogo size={16} weight="light" color="#fff" /> <EditableText id="flyer-cocina-footer-contact" defaultValue="+58 424-4635196 | Valencia, Vzla." tag="span" />
                    </div>
                </div>

            </div>
        </div>
    );
}
