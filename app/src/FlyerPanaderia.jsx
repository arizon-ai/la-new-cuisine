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

export default function FlyerPanaderia() {
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

            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                backgroundColor: '#fff'
            }}>

                {/* PORTADA ESTILO OFERTA ACADÉMICA */}
                <div style={{
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
                        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2572&auto=format&fit=crop"
                        alt="Panadería Artesanal"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            top: 0,
                            left: 0
                        }}
                    />

                    {/* Cuadro central REDUCIDO */}
                    <div style={{
                        position: 'relative',
                        zIndex: 10,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '40px 60px',
                        width: '500px',
                        textAlign: 'center',
                        border: '2px solid #000',
                        boxShadow: '15px 15px 0px rgba(0,0,0,1)'
                    }}>
                        <img
                            src="/logo.png"
                            alt="La New Cuisine"
                            style={{ width: '320px', height: 'auto', margin: '0 auto 15px' }}
                        />
                        <h2 style={{ fontSize: '24px', color: '#333', fontWeight: 400, marginTop: 0, letterSpacing: '2px', fontFamily: "'Arimo', sans-serif", textTransform: 'uppercase' }}>
                            CARRERA CHEF PANADERO
                        </h2>
                        <hr style={{ border: 0, height: '2px', background: '#000', margin: '25px auto', width: '60px' }} />
                        <p style={{ fontSize: '14px', fontFamily: "'Azeret Mono'", color: '#000', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}>
                            Técnicas ancestrales y vanguardia en masas
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
                        Carrera de<br />Panadería Artesanal
                    </h1>
                    <span style={{
                        fontFamily: "'Azeret Mono', monospace",
                        fontSize: '13px',
                        color: '#555',
                        marginBottom: '30px',
                        display: 'block',
                        borderLeft: '3px solid #000',
                        paddingLeft: '10px'
                    }}>
                        Técnicas ancestrales y vanguardia en masas.
                    </span>

                    {/* DATES GRID */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <DateCard
                            month="Feb"
                            schedule="Lunes (Tarde)"
                            time="2:00 pm - 5:30 pm"
                            startDate="9 Feb"
                            status="CONFIRMADO"
                        />
                        <DateCard
                            month="Feb"
                            schedule="Lunes Nocturno"
                            time="6:00 pm - 9:30 pm"
                            startDate="9 Feb"
                            status="CONFIRMADO"
                        />
                    </div>

                    {/* WAITLIST */}
                    <div style={{
                        marginTop: '30px',
                        backgroundColor: '#f4f4f4',
                        padding: '20px',
                        border: '1px dashed #000'
                    }}>
                        <div style={{
                            fontSize: '14px',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            marginBottom: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <i className="fa-solid fa-wheat-awn" style={{ color: '#000' }}></i>
                            Próximas Aperturas
                        </div>
                        <p style={{ fontSize: '12px', lineHeight: 1.6, color: '#333', margin: 0 }}>
                            • <strong>Sábado Mañana:</strong> Cupo se libera en Marzo.<br />
                            • <strong>Otros Turnos:</strong> Lunes (8am/2pm) y Mié/Jue (2pm).
                        </p>

                        {/* Junior Chef Banner */}
                        <div style={{
                            background: '#000',
                            color: '#fff',
                            fontFamily: "'Azeret Mono', monospace",
                            fontSize: '10px',
                            textAlign: 'center',
                            padding: '5px',
                            marginTop: '10px',
                            textTransform: 'uppercase'
                        }}>
                            También disponible: Junior Chef (Viernes)
                        </div>
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
                        ¡INÍCIATE EN EL PAN!
                    </div>
                    <div style={{
                        fontSize: '12px',
                        opacity: 0.8,
                        fontFamily: "'Azeret Mono', monospace"
                    }}>
                        <i className="fa-brands fa-whatsapp"></i> 0414-4197356 &nbsp;|&nbsp; Valencia, Vzla.
                    </div>
                </div>

            </div>
        </div>
    );
}
