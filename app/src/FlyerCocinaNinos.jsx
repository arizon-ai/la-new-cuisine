import React from 'react';

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
                <i className="fa-regular fa-clock" style={{ color: '#444' }}></i> {time}
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

// Age Group Card
const AgeGroupCard = ({ ageRange, label, icon, color }) => (
    <div style={{
        flex: 1,
        padding: '20px',
        backgroundColor: color,
        borderRadius: '8px',
        textAlign: 'center',
        border: '2px solid #000'
    }}>
        <div style={{ fontSize: '32px', marginBottom: '10px' }}>{icon}</div>
        <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '5px' }}>{ageRange}</div>
        <div style={{ fontSize: '12px', color: '#555', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</div>
    </div>
);

// Contenido Item
const ContentItem = ({ children }) => (
    <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        padding: '10px 0',
        borderBottom: '1px solid #eee',
        fontSize: '13px',
        lineHeight: 1.5
    }}>
        <i className="fa-solid fa-utensils" style={{ color: '#e76f51', fontSize: '12px', marginTop: '3px' }}></i>
        <span>{children}</span>
    </div>
);

export default function FlyerCocinaNinos() {
    const contenido = [
        "Técnicas de Cortes",
        "Chopsuey de vegetales, arroz chino y salsa agridulce",
        "Caldos de hortalizas, crema de apio, fumet de pescado, bisque de camarones",
        "Chicken finger, mayonesa, ensalada César",
        "Tortitas de vegetales, tortilla de papa",
        "Babagunush, hummus, muhammara, pan árabe",
        "Masa de pizza, baguette, pan de molde, salsa para pizza",
        "Masa para panquecas, crepes, muffin de banana, tartaleta de ricota y queso azul",
        "Pan de hamburguesas, carne para hamburguesa, papas francesas y rústicas, cinamonroll",
        "Pollo al horno, puré de papas, torta tres leches",
        "Chile de carne, pollo y lomito saltado, fajitas y tacos, arroz con leche",
        "Tequeños, tostones, temperaturas de vegetales, ceviche de pescado",
        "Perico andino, arepas, quesillo",
        "Asado negro, sopa de caraotas negras, tajadas de plátano maduro, arroz blanco",
        "Ñoquis de papa, pasta casera, salsa Alfredo, salsa boloñesa, bechamel"
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
                    {/* Barra superior colorida */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '12px',
                        background: 'linear-gradient(90deg, #f94144, #f3722c, #f9c74f, #90be6d, #43aa8b, #577590)',
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

                    {/* Overlay suave */}
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.2)',
                        top: 0,
                        left: 0
                    }} />

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
                            Cocina para Niños y Adolescentes
                        </h2>
                        <hr style={{ border: 0, height: '2px', background: 'linear-gradient(90deg, #f94144, #f9c74f, #43aa8b)', margin: '25px auto', width: '80px' }} />
                        <p style={{ fontSize: '14px', fontFamily: "'Azeret Mono'", color: '#000', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}>
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
                        borderLeft: '3px solid #f9c74f',
                        paddingLeft: '10px'
                    }}>
                        Transformamos la diversión en habilidades prácticas
                    </span>

                    {/* DESCRIPCIÓN */}
                    <div style={{
                        backgroundColor: '#fff9e6',
                        padding: '20px',
                        marginBottom: '25px',
                        border: '1px solid #f9c74f',
                        borderRadius: '8px'
                    }}>
                        <p style={{
                            fontSize: '14px',
                            color: '#333',
                            lineHeight: 1.7,
                            margin: 0
                        }}>
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
                        <i className="fa-solid fa-users" style={{ color: '#43aa8b' }}></i>
                        Grupos de Edad
                    </h3>
                    <div style={{
                        display: 'flex',
                        gap: '15px',
                        marginBottom: '25px'
                    }}>
                        <AgeGroupCard
                            ageRange="7 - 12 años"
                            label="Niños"
                            icon="👧"
                            color="#ffe5d9"
                        />
                        <AgeGroupCard
                            ageRange="13 - 16 años"
                            label="Adolescentes"
                            icon="🧑"
                            color="#d8f3dc"
                        />
                    </div>

                    {/* DURACIÓN Y HORARIO */}
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
                            <i className="fa-regular fa-calendar" style={{ fontSize: '24px' }}></i>
                            <div>
                                <div style={{ fontSize: '12px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>Duración</div>
                                <div style={{ fontSize: '20px', fontWeight: 700 }}>4 Meses</div>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '15px 20px',
                            backgroundColor: '#f3722c',
                            color: '#fff'
                        }}>
                            <i className="fa-regular fa-clock" style={{ fontSize: '24px' }}></i>
                            <div>
                                <div style={{ fontSize: '12px', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '1px' }}>Horario</div>
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
                            <i className="fa-solid fa-list-check" style={{ color: '#f9c74f' }}></i>
                            Detalle del Contenido
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(1, 1fr)',
                            gap: '0'
                        }}>
                            {contenido.map((item, index) => (
                                <ContentItem key={index}>{item}</ContentItem>
                            ))}
                        </div>
                    </div>

                    {/* BENEFICIOS */}
                    <div style={{
                        backgroundColor: '#e8f5e9',
                        padding: '20px',
                        marginBottom: '25px',
                        border: '1px solid #43aa8b',
                        borderRadius: '8px'
                    }}>
                        <h4 style={{
                            fontSize: '14px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            marginBottom: '12px',
                            color: '#2d6a4f'
                        }}>
                            <i className="fa-solid fa-star" style={{ marginRight: '8px' }}></i>
                            Lo que aprenderán
                        </h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                            <div style={{ textAlign: 'center', padding: '10px' }}>
                                <div style={{ fontSize: '24px', marginBottom: '5px' }}>🎨</div>
                                <div style={{ fontSize: '12px', fontWeight: 600 }}>Creatividad</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '10px' }}>
                                <div style={{ fontSize: '24px', marginBottom: '5px' }}>🤝</div>
                                <div style={{ fontSize: '12px', fontWeight: 600 }}>Trabajo en Equipo</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '10px' }}>
                                <div style={{ fontSize: '24px', marginBottom: '5px' }}>🥗</div>
                                <div style={{ fontSize: '12px', fontWeight: 600 }}>Hábitos Saludables</div>
                            </div>
                        </div>
                    </div>

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
                        <i className="fa-regular fa-calendar-check" style={{ color: '#e76f51' }}></i>
                        Próximas Fechas
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <DateCard
                            month="Feb"
                            schedule="Viernes (Tarde)"
                            time="3:00 pm - 6:00 pm"
                            startDate="Por confirmar"
                            status="ABIERTO"
                        />
                        <DateCard
                            month="Mar"
                            schedule="Viernes (Tarde)"
                            time="3:00 pm - 6:00 pm"
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
                            <i className="fa-solid fa-coins" style={{ color: '#000' }}></i>
                            Inversión
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #ddd' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>50 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Inscripción</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #ddd' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>100 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Mensualidad</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #ddd' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>60 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Kit Estudio</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '10px', color: '#666', marginTop: '10px', marginBottom: 0 }}>
                            *Kit incluye: delantal, gorro y utensilios básicos. Financiamiento disponible.
                        </p>
                    </div>
                </div>

                {/* FOOTER */}
                <div style={{
                    background: 'linear-gradient(90deg, #f94144, #f3722c, #f9c74f, #90be6d, #43aa8b)',
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
                        boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
                        cursor: 'pointer'
                    }}>
                        ¡INSCRÍBELOS AHORA!
                    </div>
                    <div style={{
                        fontSize: '12px',
                        opacity: 0.95,
                        fontFamily: "'Azeret Mono', monospace",
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}>
                        <i className="fa-brands fa-whatsapp"></i> +1 786-302-8728 &nbsp;|&nbsp; Valencia, Vzla.
                    </div>
                </div>

            </div>
        </div>
    );
}
