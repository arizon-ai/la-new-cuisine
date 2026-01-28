import React from 'react';
import {
    Briefcase,
    TrendingUp,
    Globe,
    ClipboardText,
    GraduationCap,
    Star,
    Money,
    WhatsappLogo,
    Calendar,
    Clock,
    Target,
    ChartPie,
    Handshake,
    Certificate
} from '@phosphor-icons/react';

// Module Card - Black/White with Phosphor icon
const ModuleCard = ({ icon: Icon, title, description }) => (
    <div style={{
        padding: '25px',
        backgroundColor: '#fff',
        border: '1px solid #000'
    }}>
        <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'flex-start' }}>
            <Icon size={32} weight="light" />
        </div>
        <h4 style={{
            fontSize: '16px',
            fontWeight: 700,
            marginTop: 0,
            marginBottom: '10px',
            textTransform: 'uppercase'
        }}>
            {title}
        </h4>
        <p style={{ fontSize: '13px', color: '#666', margin: 0, lineHeight: 1.6 }}>
            {description}
        </p>
    </div>
);

// Content Item - Black style
const ContentItem = ({ children }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 0',
        borderBottom: '1px solid #eee',
        fontSize: '14px'
    }}>
        <span style={{ color: '#000' }}>✓</span>
        <span>{children}</span>
    </div>
);

export default function FlyerGerencia() {
    const contenidoModulos = [
        {
            icon: Target,
            title: "Visión Estratégica",
            description: "Planificación y dirección de negocios gastronómicos"
        },
        {
            icon: TrendingUp,
            title: "Rentabilidad",
            description: "Optimización de costos y maximización de beneficios"
        },
        {
            icon: Globe,
            title: "Tendencias Globales",
            description: "Sostenibilidad y marketing digital aplicado"
        }
    ];

    const temasPrincipales = [
        "Planificación estratégica de negocios gastronómicos",
        "Control de costos y presupuesto",
        "Marketing gastronómico y branding",
        "Gestión de personal y liderazgo",
        "Diseño de menús rentables",
        "Control de inventarios",
        "Normativas sanitarias y de seguridad",
        "Tendencias de sostenibilidad",
        "Fidelización de clientes",
        "Análisis financiero y proyecciones",
        "Negociación con proveedores",
        "Innovación en servicios gastronómicos"
    ];

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
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2574&auto=format&fit=crop"
                        alt="Gerencia Gastronómica"
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
                        <h2 style={{ fontSize: '22px', color: '#333', fontWeight: 400, marginTop: 0, letterSpacing: '2px', fontFamily: "'Arimo', sans-serif", textTransform: 'uppercase' }}>
                            DIPLOMADO EN<br />GERENCIA GASTRONÓMICA
                        </h2>
                        <hr style={{ border: 0, height: '2px', background: '#000', margin: '25px auto', width: '60px' }} />
                        <p style={{ fontSize: '13px', fontFamily: "'Azeret Mono'", color: '#000', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}>
                            4 Meses • Visión Estratégica • Liderazgo
                        </p>
                    </div>
                </div>

                {/* CONTENT */}
                <div style={{ padding: '30px' }}>
                    <h1 style={{
                        fontSize: '28px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                        lineHeight: 1.1
                    }}>
                        Diplomado en<br />Gerencia Gastronómica 2026
                    </h1>
                    <span style={{
                        fontFamily: "'Azeret Mono', monospace",
                        fontSize: '13px',
                        color: '#555',
                        marginBottom: '25px',
                        display: 'block',
                        borderLeft: '3px solid #000',
                        paddingLeft: '10px'
                    }}>
                        Lidera y transforma el negocio gastronómico del futuro
                    </span>

                    {/* DESCRIPCIÓN */}
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        marginBottom: '25px',
                        border: '1px solid #000'
                    }}>
                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#333', margin: 0 }}>
                            El <strong>Diplomado en Gerencia Gastronómica</strong> de La New Cuisine está diseñado para profesionales que buscan <strong>liderar y transformar</strong> el negocio gastronómico. A través de módulos especializados, desarrollarás habilidades de <strong>gestión estratégica, control financiero y liderazgo</strong> para maximizar la rentabilidad de cualquier establecimiento.
                        </p>
                    </div>

                    {/* CARACTERÍSTICAS */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '15px',
                        marginBottom: '25px'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '15px 20px',
                            backgroundColor: '#000',
                            color: '#fff'
                        }}>
                            <Calendar size={28} weight="light" />
                            <div>
                                <div style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase' }}>Duración</div>
                                <div style={{ fontSize: '18px', fontWeight: 700 }}>4 Meses</div>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '15px 20px',
                            backgroundColor: '#000',
                            color: '#fff'
                        }}>
                            <Certificate size={28} weight="light" />
                            <div>
                                <div style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase' }}>Certificación</div>
                                <div style={{ fontSize: '18px', fontWeight: 700 }}>Diplomado Profesional</div>
                            </div>
                        </div>
                    </div>

                    {/* MÓDULOS PRINCIPALES */}
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Briefcase size={20} weight="light" /> Áreas de Enfoque
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '15px',
                        marginBottom: '25px'
                    }}>
                        {contenidoModulos.map((modulo, index) => (
                            <ModuleCard
                                key={index}
                                icon={modulo.icon}
                                title={modulo.title}
                                description={modulo.description}
                            />
                        ))}
                    </div>

                    {/* CONTENIDO DETALLADO */}
                    <div style={{ marginBottom: '25px' }}>
                        <h3 style={{
                            fontSize: '16px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            marginBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <ClipboardText size={20} weight="light" /> Temas Principales
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '0 20px'
                        }}>
                            {temasPrincipales.map((item, index) => (
                                <ContentItem key={index}>{item}</ContentItem>
                            ))}
                        </div>
                    </div>

                    {/* PERFIL DEL EGRESADO */}
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
                            marginBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <GraduationCap size={20} weight="light" /> Perfil del Egresado
                        </h4>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '15px'
                        }}>
                            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <ChartPie size={28} weight="light" style={{ margin: '0 auto 8px' }} />
                                <div style={{ fontSize: '12px', fontWeight: 700 }}>Análisis Financiero</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <Handshake size={28} weight="light" style={{ margin: '0 auto 8px' }} />
                                <div style={{ fontSize: '12px', fontWeight: 700 }}>Liderazgo</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <Star size={28} weight="light" style={{ margin: '0 auto 8px' }} />
                                <div style={{ fontSize: '12px', fontWeight: 700 }}>Innovación</div>
                            </div>
                        </div>
                    </div>

                    {/* INVERSIÓN */}
                    <div style={{
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
                            <Money size={20} weight="light" /> Inversión
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>50 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Inscripción</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>100 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Mensualidad</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '10px', color: '#666', marginTop: '10px', marginBottom: 0 }}>
                            *Incluye material de estudio digital y certificación.
                        </p>
                    </div>
                </div>

                {/* FOOTER */}
                <div style={{
                    backgroundColor: '#000',
                    color: '#fff',
                    padding: '25px',
                    textAlign: 'center',
                    marginTop: 'auto'
                }}>
                    <div style={{
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
                        cursor: 'pointer'
                    }}>
                        ¡LIDERA EL ÉXITO GASTRONÓMICO!
                    </div>
                    <div style={{
                        fontSize: '12px',
                        opacity: 0.8,
                        fontFamily: "'Azeret Mono', monospace",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        <WhatsappLogo size={16} weight="light" /> +1 786-302-8728 &nbsp;|&nbsp; Valencia, Vzla.
                    </div>
                </div>

            </div>
        </div>
    );
}
