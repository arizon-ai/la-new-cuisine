import React from 'react';
import {
    GraduationCap,
    Calendar,
    Clock,
    ClipboardText,
    Cake,
    ListChecks,
    Star,
    Money,
    WhatsappLogo,
    User,
    Users
} from '@phosphor-icons/react';
import EditableText from './components/EditableText';

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
        <div style={{ fontSize: '18px', fontWeight: 700, color: '#000' }}>{value}</div>
        <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', marginTop: '4px' }}>{label}</div>
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

// Benefit Card
const BenefitCard = ({ icon: Icon, title }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #000'
    }}>
        <Icon size={24} weight="light" color="#000" />
        <span style={{ fontWeight: 700, fontSize: '14px' }}>{title}</span>
    </div>
);

export default function FlyerCocinaNinos() {
    const contenido = [
        "Introducción a la cocina y normas de seguridad",
        "Utensilios y equipos básicos de cocina",
        "Técnicas de corte seguras para niños",
        "Preparación de desayunos saludables",
        "Recetas con frutas y verduras",
        "Pasta fresca casera",
        "Pizzas y panes artesanales",
        "Postres fáciles y divertidos",
        "Galletas y decoración",
        "Batidos y bebidas saludables",
        "Recetas de diferentes culturas",
        "Trabajo en equipo en la cocina",
        "Presentación de platos",
        "Menú sorpresa para la familia",
        "Proyecto final con presentación"
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
                        src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=2574&auto=format&fit=crop"
                        alt="Cocina para Niños"
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
                            id="flyer-ninos-hero-title"
                            defaultValue="COCINA PARA NIÑOS Y\nADOLESCENTES"
                            tag="h2"
                            style={{ fontSize: '22px', color: '#333', fontWeight: 400, marginTop: 0, letterSpacing: '2px', fontFamily: "'Arimo', sans-serif", textTransform: 'uppercase' }}
                            multiline={true}
                        />
                        <hr style={{ border: 0, height: '2px', background: '#000', margin: '25px auto', width: '60px' }} />
                        <EditableText
                            id="flyer-ninos-hero-subtitle"
                            defaultValue="¡Descubre el mundo fascinante de la cocina!"
                            tag="p"
                            style={{ fontSize: '13px', fontFamily: "'Azeret Mono'", color: '#000', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}
                        />
                    </div>
                </div>

                {/* CONTENT */}
                <div className="flyer-content" style={{ padding: '30px' }}>
                    <EditableText
                        id="flyer-ninos-main-title"
                        defaultValue="Curso de Cocina para\nNiños y Adolescentes"
                        tag="h1"
                        style={{ fontSize: '28px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px', lineHeight: 1.1 }}
                        multiline={true}
                    />
                    <EditableText
                        id="flyer-ninos-content-subtitle"
                        defaultValue="Transformamos la diversión en habilidades prácticas"
                        tag="span"
                        style={{ fontFamily: "'Azeret Mono', monospace", fontSize: '13px', color: '#555', marginBottom: '25px', display: 'block', borderLeft: '3px solid #000', paddingLeft: '10px' }}
                    />

                    {/* DESCRIPCIÓN */}
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        marginBottom: '25px',
                        border: '1px solid #000'
                    }}>
                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#333', margin: 0 }}>
                            ¡Descubre el mundo fascinante de la cocina con nuestro <strong>Curso de Cocina para Niños y Adolescentes</strong> en La New Cuisine! Este programa transforma la diversión en habilidades prácticas, fomentando <strong>creatividad, trabajo en equipo y hábitos saludables</strong> a través de recetas sencillas y deliciosas.
                        </p>
                    </div>

                    {/* GRUPOS DE EDAD */}
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Users size={20} weight="light" color="#000" /> Grupos de Edad
                    </h3>
                    <div className="flyer-grid-2" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '15px',
                        marginBottom: '25px'
                    }}>
                        <FeatureCard icon={User} value="7 - 12 años" label="Niños" />
                        <FeatureCard icon={User} value="13 - 16 años" label="Adolescentes" />
                    </div>

                    <div className="flyer-grid-2" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
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
                            <Calendar size={28} weight="light" color="#fff" />
                            <div>
                                <EditableText id="flyer-ninos-duracion-label" defaultValue="Duración" tag="div" style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase' }} />
                                <EditableText id="flyer-ninos-duracion-valor" defaultValue="4 Meses" tag="div" style={{ fontSize: '18px', fontWeight: 700 }} />
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
                            <Clock size={28} weight="light" color="#fff" />
                            <div>
                                <EditableText id="flyer-ninos-horario-label" defaultValue="Horario" tag="div" style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase' }} />
                                <EditableText id="flyer-ninos-horario-valor" defaultValue="Viernes en la tarde" tag="div" style={{ fontSize: '18px', fontWeight: 700 }} />
                            </div>
                        </div>
                    </div>

                    {/* CONTENIDO DEL CURSO */}
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
                            <ClipboardText size={20} weight="light" color="#000" /> Contenido del Curso (15 Sesiones)
                        </h3>
                        <div className="flyer-grid-2" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '0 20px'
                        }}>
                            {contenido.map((item, index) => (
                                <ContentItem key={index}>{item}</ContentItem>
                            ))}
                        </div>
                    </div>

                    {/* BENEFICIOS */}
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Star size={20} weight="light" color="#000" /> Beneficios
                    </h3>
                    <div className="flyer-investment-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '15px',
                        marginBottom: '25px'
                    }}>
                        <BenefitCard icon={Star} title="Creatividad" />
                        <BenefitCard icon={Users} title="Trabajo en equipo" />
                        <BenefitCard icon={Cake} title="Hábitos saludables" />
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
                            <Money size={20} weight="light" color="#000" /> <EditableText id="flyer-ninos-inversion-title" defaultValue="Inversión" tag="span" />
                        </div>
                        <div className="flyer-investment-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <EditableText id="flyer-ninos-precio-inscripcion" defaultValue="30 €" tag="div" style={{ fontSize: '20px', fontWeight: 700, color: '#000' }} />
                                <EditableText id="flyer-ninos-label-inscripcion" defaultValue="Inscripción" tag="div" style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }} />
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <EditableText id="flyer-ninos-precio-mensualidad" defaultValue="80 €" tag="div" style={{ fontSize: '20px', fontWeight: 700, color: '#000' }} />
                                <EditableText id="flyer-ninos-label-mensualidad" defaultValue="Mensualidad" tag="div" style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }} />
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <EditableText id="flyer-ninos-precio-kit" defaultValue="50 €" tag="div" style={{ fontSize: '20px', fontWeight: 700, color: '#000' }} />
                                <EditableText id="flyer-ninos-label-kit" defaultValue="Kit Estudio" tag="div" style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }} />
                            </div>
                        </div>
                        <EditableText id="flyer-ninos-nota" defaultValue="*Kit incluye delantal, gorro y materiales básicos." tag="p" style={{ fontSize: '10px', color: '#666', marginTop: '10px', marginBottom: 0 }} />
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
                        <EditableText id="flyer-ninos-cta-button" defaultValue="¡INSCRIBE A TUS HIJOS HOY!" tag="span" />
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
                        <WhatsappLogo size={16} weight="light" color="#fff" /> <EditableText id="flyer-ninos-footer-contact" defaultValue="+58 424-4635196 | Valencia, Vzla." tag="span" />
                    </div>
                </div>

            </div>
        </div>
    );
}
