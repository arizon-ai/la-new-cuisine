import React, { useState } from 'react';

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
                🕐 {time}
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

// Feature Card - Black/White with phosphore emoji
const FeatureCard = ({ icon, value, label }) => (
    <div style={{
        textAlign: 'center',
        padding: '20px 15px',
        backgroundColor: '#fff',
        border: '1px solid #000'
    }}>
        <div style={{
            fontSize: '24px',
            marginBottom: '8px',
            filter: 'drop-shadow(0 0 8px #00ff88) drop-shadow(0 0 15px #00ff88)',
            textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88'
        }}>{icon}</div>
        <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>{value}</div>
        <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', marginTop: '4px' }}>{label}</div>
    </div>
);

export default function FlyerPasteleria() {
    const [activeLevel, setActiveLevel] = useState('basico');

    const nivelBasico = [
        "Merengues y tipos de mangueo",
        "Técnicas de ponqués y bizcochos",
        "Técnicas de Masas sablée holandés",
        "Cake y sus tipos. Técnicas de elaboración de cake",
        "1era evaluación teórico-práctica",
        "Oratoria y expresión corporal",
        "Masas de tartas, brisee, quebrada I y sucree",
        "Masas quebradas II. Técnicas en tartas saladas con masas quebradas",
        "Técnicas de postres con mousse y cremas clásicas. Pastelería Clásicas y técnicas de bizcochos clásicos e italianos",
        "Técnicas de fondant Butter Cream",
        "2da evaluación teórico-práctica",
        "Costos I",
        "Dulcería y Magdalenas",
        "Tortas y ponqués comerciales",
        "Pastelería comercial",
        "Técnicas de emplatado",
        "Masas choux, brioche croissant",
        "Masas hojaldradas y técnicas del mejor croissant",
        "Etiqueta y protocolo",
        "Evaluación final del nivel"
    ];

    const nivelIntermedio = [
        "Panadería saludable I",
        "Hojaldre I",
        "Hojaldre II",
        "Técnicas de precisión. Profundización en el templado de chocolate, mousses de aireación perfecta",
        "1era evaluación teórico-práctica",
        "Inglés gastronómico I",
        "Postres de vitrina",
        "Bombonería I",
        "Bombonería II",
        "Bombonería III",
        "2da evaluación teórico-práctica",
        "Técnicas de Maridaje",
        "Panadería I",
        "Panadería II",
        "Masas madres",
        "Francés gastronómico I",
        "Evaluación final del nivel"
    ];

    const nivelAvanzado = [
        "Pastelería francesa I",
        "Pastelería francesa II",
        "Pastelería alemana, Austriaca",
        "Pastelería italiana, medio Oriente",
        "1era evaluación teórico-práctica",
        "Nutrición y dietética",
        "Mousse avanzado",
        "Pastelería saludable",
        "Pastelería Latinoamérica, Argentina, Estados Unidos",
        "Nutrición y dietética aplicada",
        "2da evaluación teórico-práctica",
        "Pastelería venezolana",
        "Inglés gastronómico II",
        "Técnicas avanzadas de pastelería I",
        "Banana cream pie, devil's food chocolate cake, coconut cream cake, pumpkin pie",
        "Gestión de Texturas y Gelificantes",
        "Costos II",
        "Electiva",
        "Pasantía",
        "Evaluación final del nivel e informe final"
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
                return "Este nivel establece los fundamentos de la pastelería: técnicas de merengues, masas, bizcochos, tartas y decoración. Aprenderás las bases que definen a un chef pastelero profesional.";
            case 'intermedio':
                return "El puente entre el aficionado y el profesional. Aquí la precisión se convierte en arte y la técnica en instinto. El estudiante deja de seguir recetas para empezar a comprender la arquitectura del dulce.";
            case 'avanzado':
                return "Culmina con pastelería internacional de alto nivel, técnicas avanzadas, gestión de texturas y preparación para el examen técnico final, Fine Dining y 240 horas de pasantías.";
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
                        src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=2565&auto=format&fit=crop"
                        alt="Pastelería Gourmet"
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
                            CARRERA CHEF PASTELERO
                        </h2>
                        <hr style={{ border: 0, height: '2px', background: '#000', margin: '25px auto', width: '60px' }} />
                        <p style={{ fontSize: '13px', fontFamily: "'Azeret Mono'", color: '#333', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}>
                            3 Niveles • 15 Meses • 240 Horas de Pasantías
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
                        Carrera de<br />Chef Pastelero 2026
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
                        La alquimia perfecta entre la ciencia exacta y la creatividad sin límites
                    </span>

                    {/* DESCRIPCIÓN */}
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        marginBottom: '25px',
                        border: '1px solid #000'
                    }}>
                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#333', margin: 0 }}>
                            La pastelería no es solo cocina; es la <strong>alquimia perfecta entre la ciencia exacta y la creatividad sin límites</strong>. En la carrera de Chef Pastelero de La New Cuisine, formamos profesionales capaces de dominar el rigor de las temperaturas, las texturas y los sabores que definen la <strong>alta repostería contemporánea</strong>.
                        </p>
                    </div>

                    {/* ESTRUCTURA */}
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
                            🎓 Estructura de la Carrera
                        </h3>
                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#333', margin: 0 }}>
                            La carrera consta de <strong>tres niveles</strong> (Básico, Intermedio y Avanzado), cada uno con duración de <strong>5 meses (20 semanas)</strong>. Las clases son <strong>teórico-prácticas</strong> con evaluación continua, 3 evaluaciones por nivel. En el nivel avanzado: examen técnico, presentación del <em>Fine Dining</em>, y cumplimiento de <strong>240 horas de pasantías</strong>.
                        </p>
                    </div>

                    {/* CARACTERÍSTICAS */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '10px',
                        marginBottom: '25px'
                    }}>
                        <FeatureCard icon="🎂" value="3" label="Niveles" />
                        <FeatureCard icon="📅" value="15" label="Meses Total" />
                        <FeatureCard icon="⏱️" value="240h" label="Pasantías" />
                        <FeatureCard icon="🎓" value="9" label="Evaluaciones" />
                    </div>

                    {/* TABS DE NIVELES */}
                    <div style={{ marginBottom: '25px' }}>
                        <div style={{ display: 'flex', border: '2px solid #000', borderBottom: 'none' }}>
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
                                <span style={{ fontSize: '24px' }}>🕐</span>
                                <div>
                                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Duración del nivel</div>
                                    <div style={{ fontSize: '18px', fontWeight: 700 }}>5 Meses (20 semanas)</div>
                                </div>
                            </div>

                            {/* Descripción del nivel */}
                            <p style={{
                                fontSize: '14px',
                                lineHeight: 1.7,
                                color: '#333',
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#f9f9f9',
                                borderLeft: '4px solid #000'
                            }}>
                                {getLevelDescription()}
                            </p>

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
                                📋 Detalle del Contenido
                            </h4>
                            <div>
                                {getActiveContent().map((item, index) => (
                                    <ContentItem key={index} number={index + 1}>{item}</ContentItem>
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
                                marginBottom: '10px'
                            }}>
                                ⭐ Requisitos para Graduación
                            </h4>
                            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', lineHeight: 1.8 }}>
                                <li>Aprobación del examen técnico individual</li>
                                <li>Presentación del Fine Dining</li>
                                <li>Cumplimiento de 240 horas de pasantías</li>
                                <li>Entrega del informe final</li>
                            </ul>
                        </div>
                    )}

                    {/* DATES GRID */}
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        📅 Próximas Fechas
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <DateCard
                            month="Feb"
                            schedule="Miércoles / Jueves"
                            time="8:00 am - 12:30 pm / 2:00 - 5:30 pm"
                            startDate="Por confirmar"
                            status="ABIERTO"
                        />
                        <DateCard
                            month="Feb"
                            schedule="Sábados (Mañana)"
                            time="8:00 am - 12:30 pm"
                            startDate="Por confirmar"
                            status="ABIERTO"
                        />
                        <DateCard
                            month="Feb"
                            schedule="Lunes Nocturno"
                            time="6:00 pm - 9:30 pm"
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
                            💰 Inversión por Nivel
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>50 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Inscripción</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>140 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Mensualidad</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>90 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Kit Estudio</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '10px', color: '#666', marginTop: '10px', marginBottom: 0 }}>
                            *Kit: filipina, gorro, delantal. Financiamiento disponible en 2 cuotas.
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
                        ¡DOMINA EL ARTE DE LA PASTELERÍA!
                    </div>
                    <div style={{
                        fontSize: '12px',
                        opacity: 0.95,
                        fontFamily: "'Azeret Mono', monospace"
                    }}>
                        <i className="fa-brands fa-whatsapp"></i> +1 786-302-8728 &nbsp;|&nbsp; Valencia, Vzla.
                    </div>
                </div>

            </div>
        </div>
    );
}
