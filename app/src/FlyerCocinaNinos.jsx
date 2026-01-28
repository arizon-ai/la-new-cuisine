import React from 'react';

// Feature Card - Black/White with phosphore emoji
const FeatureCard = ({ icon, value, label, bgColor = '#fff' }) => (
    <div style={{
        textAlign: 'center',
        padding: '20px 15px',
        backgroundColor: bgColor,
        border: '1px solid #000'
    }}>
        <div style={{
            fontSize: '28px',
            marginBottom: '8px',
            filter: 'drop-shadow(0 0 8px #00ff88) drop-shadow(0 0 15px #00ff88)',
            textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88'
        }}>{icon}</div>
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

// Benefit Card with phosphore emoji
const BenefitCard = ({ icon, title }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #000'
    }}>
        <span style={{
            fontSize: '24px',
            filter: 'drop-shadow(0 0 8px #00ff88) drop-shadow(0 0 15px #00ff88)',
            textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88'
        }}>{icon}</span>
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

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
                        <h2 style={{ fontSize: '22px', color: '#333', fontWeight: 400, marginTop: 0, letterSpacing: '2px', fontFamily: "'Arimo', sans-serif", textTransform: 'uppercase' }}>
                            COCINA PARA NIÑOS Y<br />ADOLESCENTES
                        </h2>
                        <hr style={{ border: 0, height: '2px', background: '#000', margin: '25px auto', width: '60px' }} />
                        <p style={{ fontSize: '13px', fontFamily: "'Azeret Mono'", color: '#000', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}>
                            ¡Descubre el mundo fascinante de la cocina!
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
                        Curso de Cocina para<br />Niños y Adolescentes
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
                        Transformamos la diversión en habilidades prácticas
                    </span>

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
                        👧 Grupos de Edad
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '15px',
                        marginBottom: '25px'
                    }}>
                        <FeatureCard icon="👧" value="7 - 12 años" label="Niños" />
                        <FeatureCard icon="🧑" value="13 - 16 años" label="Adolescentes" />
                    </div>

                    {/* CARACTERÍSTICAS */}
                    <div style={{
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
                            <span style={{ fontSize: '24px' }}>📅</span>
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
                            <span style={{ fontSize: '24px' }}>🕐</span>
                            <div>
                                <div style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase' }}>Horario</div>
                                <div style={{ fontSize: '18px', fontWeight: 700 }}>Viernes en la tarde</div>
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
                            📋 Contenido del Curso (15 Sesiones)
                        </h3>
                        <div style={{
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
                        ⭐ Beneficios
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '15px',
                        marginBottom: '25px'
                    }}>
                        <BenefitCard icon="🎨" title="Creatividad" />
                        <BenefitCard icon="🤝" title="Trabajo en equipo" />
                        <BenefitCard icon="🥗" title="Hábitos saludables" />
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
                            💰 Inversión
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>30 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Inscripción</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>80 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Mensualidad</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>50 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Kit Estudio</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '10px', color: '#666', marginTop: '10px', marginBottom: 0 }}>
                            *Kit incluye delantal, gorro y materiales básicos.
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
                        ¡INSCRIBE A TUS HIJOS HOY!
                    </div>
                    <div style={{
                        fontSize: '12px',
                        opacity: 0.8,
                        fontFamily: "'Azeret Mono', monospace"
                    }}>
                        <i className="fa-brands fa-whatsapp"></i> +1 786-302-8728 &nbsp;|&nbsp; Valencia, Vzla.
                    </div>
                </div>

            </div>
        </div>
    );
}
