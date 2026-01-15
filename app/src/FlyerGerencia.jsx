import React from 'react';

// Tarjeta de horario estilo ejecutivo
const ScheduleCard = ({ label, day, time, location, code, isOpen }) => (
    <div style={{
        border: '1px solid #000',
        padding: '20px',
        position: 'relative'
    }}>
        {/* Etiqueta superior derecha */}
        <div style={{
            position: 'absolute',
            top: '-10px',
            right: '20px',
            background: '#000',
            color: '#fff',
            fontFamily: "'Azeret Mono', monospace",
            fontSize: '10px',
            padding: '4px 8px',
            textTransform: 'uppercase'
        }}>
            {label}
        </div>
        <span style={{
            fontSize: '20px',
            fontWeight: 800,
            textTransform: 'uppercase',
            marginBottom: '5px',
            display: 'block'
        }}>
            {day}
        </span>
        <div style={{
            fontFamily: "'Azeret Mono', monospace",
            fontSize: '14px',
            color: '#444',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }}>
            <i className="fa-regular fa-clock" style={{ color: '#444' }}></i> {time}
        </div>
        <div style={{
            fontSize: '11px',
            marginTop: '5px',
            color: '#666',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
        }}>
            <i className="fa-solid fa-chalkboard-user" style={{ color: '#666' }}></i> {location}
        </div>
        <div style={{
            marginTop: '15px',
            display: 'inline-block',
            background: isOpen ? '#000' : '#eee',
            color: isOpen ? '#fff' : '#000',
            padding: '4px 8px',
            fontSize: '11px',
            fontWeight: 700,
            fontFamily: "'Azeret Mono', monospace"
        }}>
            {code}
        </div>
    </div>
);

export default function FlyerGerencia() {
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

                    {/* Imagen de fondo - FULL COLOR */}
                    <img
                        src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2670&auto=format&fit=crop"
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
                            DIPLOMADO EN GERENCIA GASTRONÓMICA
                        </h2>
                        <hr style={{ border: 0, height: '2px', background: '#000', margin: '25px auto', width: '60px' }} />
                        <p style={{ fontSize: '14px', fontFamily: "'Azeret Mono'", color: '#000', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}>
                            Liderazgo estratégico para el sector HORECA
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
                        Diplomado en<br />Gerencia Gastronómica
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
                        Liderazgo estratégico y rentabilidad para el sector HORECA.
                    </span>

                    {/* SCHEDULE LIST */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <ScheduleCard
                            label="Turno Tarde"
                            day="Martes 3 Febrero"
                            time="2:00 pm - 6:00 pm"
                            location="Salón de Teoría"
                            code="INICIO CONFIRMADO"
                            isOpen
                        />
                        <ScheduleCard
                            label="Turno Sabatino"
                            day="Sábado 28 Febrero"
                            time="8:00 am - 12:30 pm"
                            location="Salón de Teoría"
                            code="FECHA ESTIMADA"
                        />
                    </div>

                    {/* VALUE PROPOSITION */}
                    <div style={{
                        marginTop: '30px',
                        backgroundColor: '#f9f9f9',
                        padding: '20px',
                        borderLeft: '4px solid #000'
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
                            <i className="fa-solid fa-chart-line" style={{ color: '#000' }}></i>
                            Enfoque del Programa
                        </div>
                        <ul style={{
                            listStyle: 'none',
                            fontSize: '12px',
                            lineHeight: 1.6,
                            color: '#333',
                            padding: 0,
                            margin: 0
                        }}>
                            {[
                                'Modelo Canvas y Plan de Negocios',
                                'Marketing y Neuromarketing Gastronómico',
                                'Liderazgo y Capital Humano',
                                'Ingeniería del Menú y Catering',
                                'Manejo y Control Gastronómico',
                                'Higiene y Salud Ocupacional'
                            ].map((item, i) => (
                                <li key={i} style={{
                                    marginBottom: '5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <i className="fa-solid fa-square" style={{ fontSize: '6px', color: '#000' }}></i>
                                    {item}
                                </li>
                            ))}
                        </ul>
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
                        ¡LIDERA TU COCINA!
                    </div>
                    <div style={{
                        fontSize: '12px',
                        opacity: 0.8,
                        fontFamily: "'Azeret Mono', monospace"
                    }}>
                        <i className="fa-brands fa-whatsapp"></i> 0414-4197356 &nbsp;|&nbsp; Valencia, Vzla.
                    </div>
                </div>

            </div >
        </div >
    );
}
