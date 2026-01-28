import React from 'react';
import {
    Clock,
    Calendar,
    ClipboardText,
    Check,
    GraduationCap,
    Money,
    WhatsappLogo
} from '@phosphor-icons/react';

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

// Tarjeta de fecha
const DateCard = ({ month, schedule, time, startDate, status, code }) => (
    <div style={{
        border: '1px solid #000',
        display: 'flex',
        alignItems: 'stretch'
    }}>
        <div style={{
            backgroundColor: '#000',
            color: '#fff',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            padding: '10px',
            fontFamily: "'Azeret Mono', monospace",
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: '12px',
            letterSpacing: '2px',
            minWidth: '40px'
        }}>
            {month}
        </div>
        <div style={{ padding: '15px', flexGrow: 1 }}>
            <span style={{
                fontSize: '16px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '5px',
                display: 'block'
            }}>
                {schedule}
            </span>
            <div style={{
                fontSize: '14px',
                color: '#444',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
            }}>
                <Clock size={14} weight="light" color="#000" /> {time}
            </div>
            <div style={{ marginTop: '8px', fontSize: '12px', display: 'flex', justifyContent: 'space-between' }}>
                <span><strong>Inicio:</strong> {startDate}</span>
                {code ? (
                    <StatusBadge dark>CÓD. {code}</StatusBadge>
                ) : (
                    <StatusBadge>{status}</StatusBadge>
                )}
            </div>
        </div>
    </div>
);

// Contenido Item
const ContentItem = ({ children }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 0',
        borderBottom: '1px solid #eee',
        fontSize: '14px'
    }}>
        <Check size={14} weight="bold" style={{ color: '#000' }} />
        <span>{children}</span>
    </div>
);

export default function FlyerAsistenteChef() {
    const contenido = [
        "Buenas Prácticas en la Manipulación de alimentos",
        "Cortes de precisión",
        "Fondos, sopas y cremas",
        "Huevos",
        "Salsas madres",
        "Pollo diferentes preparaciones",
        "Ensaladas y vinagretas",
        "Pasta fresca y salsas",
        "Masas quebradas",
        "Verduras y hortalizas",
        "Carnes grasas rojas",
        "Charcutería",
        "Pescados y mariscos",
        "Pastelería básica",
        "Evaluación final"
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
                        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2670&auto=format&fit=crop"
                        alt="Asistente de Chef"
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
                            CURSO ASISTENTE DE CHEF
                        </h2>
                        <hr style={{ border: 0, height: '2px', background: '#000', margin: '25px auto', width: '60px' }} />
                        <p style={{ fontSize: '13px', fontFamily: "'Azeret Mono'", color: '#000', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}>
                            5 Meses • Formación Práctica Intensiva
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
                        Curso de<br />Asistente de Chef 2026
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
                        Tu primer paso hacia la excelencia culinaria
                    </span>

                    {/* DESCRIPCIÓN */}
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        marginBottom: '25px',
                        border: '1px solid #000'
                    }}>
                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#333', margin: 0 }}>
                            El <strong>Curso de Asistente de Chef</strong> es el punto de partida ideal para quienes desean ingresar al mundo de la gastronomía profesional. Durante <strong>5 meses</strong> de formación teórico-práctica, desarrollarás las habilidades esenciales que te convertirán en el apoyo fundamental de cualquier cocina profesional.
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
                            <Calendar size={28} weight="light" color="#fff" />
                            <div>
                                <div style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase' }}>Duración</div>
                                <div style={{ fontSize: '18px', fontWeight: 700 }}>5 Meses</div>
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
                            <GraduationCap size={28} weight="light" color="#fff" />
                            <div>
                                <div style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase' }}>Metodología</div>
                                <div style={{ fontSize: '18px', fontWeight: 700 }}>Teórico-Práctico</div>
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
                            <ClipboardText size={20} weight="light" color="#000" /> Detalle del Contenido
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

                    {/* PRÓXIMAS FECHAS */}
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Calendar size={20} weight="light" color="#000" /> Próximas Fechas
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <DateCard
                            month="Feb"
                            schedule="Martes y Viernes"
                            time="8:00 am - 12:30 pm"
                            startDate="Por confirmar"
                            status="ABIERTO"
                        />
                        <DateCard
                            month="Feb"
                            schedule="Sábados"
                            time="8:00 am - 12:30 pm"
                            startDate="Por confirmar"
                            status="ABIERTO"
                        />
                    </div>

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
                            <Money size={20} weight="light" color="#000" /> Inversión
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>35 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Inscripción</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>110 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Mensualidad</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>70 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Kit Estudio</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '10px', color: '#666', marginTop: '10px', marginBottom: 0 }}>
                            *Kit: filipina, gorro, delantal. Financiamiento disponible.
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
                        ¡COMIENZA TU CARRERA HOY!
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
                        <WhatsappLogo size={16} weight="light" color="#fff" /> +58 424-4635196 &nbsp;|&nbsp; Valencia, Vzla.
                    </div>
                </div>

            </div>
        </div>
    );
}
