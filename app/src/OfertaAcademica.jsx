import React from 'react';

// Componente para los slides
const Slide = ({ children, className = '', id }) => (
    <div
        id={id}
        className={`slide-container ${className}`}
        style={{
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '0px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: "'Arimo', sans-serif",
            minHeight: '500px',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '40px 20px',
            position: 'relative',
            width: '100%',
            maxWidth: '1280px',
        }}
    >
        {/* Barra superior negra */}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '12px',
            backgroundColor: '#000',
            zIndex: 2
        }} />
        {children}
    </div>
);

// Tag component
const Tag = ({ variant = 'outline', children }) => {
    const styles = {
        black: { backgroundColor: '#000', color: '#fff', border: '1px solid #000' },
        outline: { backgroundColor: '#fff', color: '#000', border: '1px solid #000' },
        gray: { backgroundColor: '#f3f3f3', color: '#000', border: '1px solid #ccc' },
    };

    return (
        <span style={{
            display: 'inline-block',
            padding: '6px 12px',
            fontSize: '11px',
            fontWeight: 700,
            fontFamily: "'Azeret Mono', monospace",
            textTransform: 'uppercase',
            marginRight: '5px',
            letterSpacing: '0.5px',
            ...styles[variant]
        }}>
            {children}
        </span>
    );
};

export default function OfertaAcademica() {
    return (
        <div style={{
            backgroundColor: '#fff',
            margin: 0,
            padding: '32px',
            display: 'grid',
            justifyItems: 'center',
            gap: '32px',
            color: '#000',
            minHeight: '100vh',
        }}>
            {/* Importar fuentes */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;700&family=Azeret+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

            {/* Slide 1: Portada */}
            <Slide id="slide1" className="full-bg-image">
                <img
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2777&auto=format&fit=crop"
                    alt="Estudiantes de cocina uniforme blanco"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        top: 0,
                        left: 0
                    }}
                />
                <div className="responsive-card" style={{
                    position: 'relative',
                    zIndex: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '40px 60px',
                    width: '500px',
                    maxWidth: '90%',
                    textAlign: 'center',
                    border: '2px solid #000',
                    boxShadow: '15px 15px 0px rgba(0,0,0,1)'
                }}>
                    {/* Logo oficial */}
                    <img
                        src="/logo.png"
                        alt="La New Cuisine"
                        className="responsive-logo"
                        style={{ width: '320px', maxWidth: '80%', height: 'auto', margin: '0 auto 15px' }}
                    />
                    <h2 style={{ fontSize: '24px', color: '#333', fontWeight: 400, marginTop: 0, letterSpacing: '2px', fontFamily: "'Arimo', sans-serif", textTransform: 'uppercase' }}>
                        OFERTA ACADÉMICA & PREINSCRIPCIONES
                    </h2>
                    <hr style={{ border: 0, height: '2px', background: '#000', margin: '25px auto', width: '60px' }} />
                    <p style={{ fontSize: '14px', fontFamily: "'Azeret Mono'", color: '#000', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}>
                        Formando Artistas Culinarios
                    </p>
                </div>
            </Slide>

            {/* Slide 2: Cocina Internacional */}
            <div className="slide-container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                padding: 0,
                alignItems: 'center',
                backgroundColor: '#fff',
                minHeight: '500px',
                width: '100%',
                maxWidth: '1280px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                overflow: 'hidden'
            }} id="slide2">
                {/* Barra superior */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '12px', backgroundColor: '#000', zIndex: 2 }} />

                <div style={{ padding: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                    <h2 style={{ fontSize: '42px', fontWeight: 700, marginBottom: '10px', fontFamily: "'Arimo', sans-serif", textTransform: 'uppercase', color: '#000', letterSpacing: '-0.5px' }}>
                        COCINA INTERNACIONAL
                    </h2>
                    <p style={{ fontSize: '16px', fontFamily: "'Azeret Mono'", marginBottom: '30px', color: '#555', lineHeight: 1.6 }}>
                        // DATOS DE INICIO 2026
                    </p>

                    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', borderTop: '2px solid #000', borderBottom: '2px solid #000' }}>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: '#000', color: '#fff', fontWeight: 500, textTransform: 'uppercase', textAlign: 'left', padding: '18px', letterSpacing: '1px', fontSize: '14px' }}>Turno</th>
                                <th style={{ backgroundColor: '#000', color: '#fff', fontWeight: 500, textTransform: 'uppercase', textAlign: 'left', padding: '18px', letterSpacing: '1px', fontSize: '14px' }}>Horario</th>
                                <th style={{ backgroundColor: '#000', color: '#fff', fontWeight: 500, textTransform: 'uppercase', textAlign: 'left', padding: '18px', letterSpacing: '1px', fontSize: '14px' }}>Inicio (Estimado)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '20px 18px', borderBottom: '1px solid #ddd', fontSize: '18px', verticalAlign: 'middle', color: '#000' }}>
                                    <strong>Lunes</strong><br /><span style={{ fontSize: '12px', color: '#666' }}>Cód: CR 1655</span>
                                </td>
                                <td style={{ padding: '20px 18px', borderBottom: '1px solid #ddd', fontSize: '18px', verticalAlign: 'middle', color: '#000' }}>2:00 - 5:30 pm</td>
                                <td style={{ padding: '20px 18px', borderBottom: '1px solid #ddd', fontSize: '18px', verticalAlign: 'middle', color: '#000' }}><Tag variant="outline">26 ENE</Tag></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '20px 18px', borderBottom: '1px solid #ddd', fontSize: '18px', verticalAlign: 'middle', color: '#000' }}>
                                    <strong>Martes</strong><br /><span style={{ fontSize: '12px', color: '#666' }}>Cód: CR 1656</span>
                                </td>
                                <td style={{ padding: '20px 18px', borderBottom: '1px solid #ddd', fontSize: '18px', verticalAlign: 'middle', color: '#000' }}>2:00 - 5:30 pm</td>
                                <td style={{ padding: '20px 18px', borderBottom: '1px solid #ddd', fontSize: '18px', verticalAlign: 'middle', color: '#000' }}><Tag variant="outline">27 ENE</Tag></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '20px 18px', borderBottom: '1px solid #ddd', fontSize: '18px', verticalAlign: 'middle', color: '#000' }}>
                                    <strong>Sábado</strong><br /><span style={{ fontSize: '12px', color: '#666' }}>Básico</span>
                                </td>
                                <td style={{ padding: '20px 18px', borderBottom: '1px solid #ddd', fontSize: '18px', verticalAlign: 'middle', color: '#000' }}>8:00 - 12:30 pm</td>
                                <td style={{ padding: '20px 18px', borderBottom: '1px solid #ddd', fontSize: '18px', verticalAlign: 'middle', color: '#000' }}><Tag variant="outline">31 ENE</Tag></td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{ marginTop: '20px', fontSize: '12px', color: '#666', borderLeft: '2px solid #000', paddingLeft: '10px', lineHeight: 1.6 }}>
                        *Nota para ventas: Informar como "Fecha Estimada" según documento oficial.
                    </p>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2670&auto=format&fit=crop"
                    alt="Sushi gourmet nivel michelin"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* Slide 3: Pastelería */}
            <div className="slide-container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                padding: 0,
                alignItems: 'center',
                backgroundColor: '#fff',
                minHeight: '500px',
                width: '100%',
                maxWidth: '1280px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                overflow: 'hidden'
            }} id="slide3">
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '12px', backgroundColor: '#000', zIndex: 2 }} />

                <img
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2589&auto=format&fit=crop"
                    alt="Decoración pastelería fina"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                <div style={{ padding: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                    <h2 style={{ fontSize: '38px', fontWeight: 700, marginBottom: '20px', fontFamily: "'Arimo', sans-serif", textTransform: 'uppercase', color: '#000', letterSpacing: '-0.5px' }}>
                        PASTELERÍA: INICIOS
                    </h2>

                    <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
                        {/* Enero */}
                        <li style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <strong style={{ color: '#000', fontSize: '20px' }}>ENERO</strong>
                                <Tag variant="black">CONFIRMADO</Tag>
                            </div>
                            <div style={{ fontSize: '16px', marginTop: '5px', color: '#333', lineHeight: 1.6 }}>
                                Martes 2:00 pm | <strong>Inicio: 13 Ene</strong>
                            </div>
                        </li>
                        {/* Febrero */}
                        <li style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <strong style={{ color: '#000', fontSize: '20px' }}>FEBRERO</strong>
                                <Tag variant="outline">ESTIMADO</Tag>
                            </div>
                            <div style={{ fontSize: '16px', marginTop: '5px', color: '#333', lineHeight: 1.6 }}>
                                Mié/Jue 8:00 am | <strong>Inicio: 25 Feb</strong>
                            </div>
                        </li>
                        {/* Marzo */}
                        <li style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <strong style={{ color: '#000', fontSize: '20px' }}>MARZO</strong>
                                <Tag variant="black">PROGRAMADO</Tag>
                            </div>
                            <div style={{ fontSize: '16px', marginTop: '5px', color: '#333', lineHeight: 1.6 }}>
                                Viernes 8:00 am | <strong>Inicio: 20 Mar</strong>
                            </div>
                        </li>
                    </ul>

                    <div style={{
                        backgroundColor: '#f9f9f9',
                        border: '1px solid #000',
                        padding: '20px',
                        marginTop: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                    }}>
                        <i className="fa-solid fa-star" style={{ fontSize: '20px', color: '#000' }}></i>
                        <div>
                            <p style={{ margin: 0, fontSize: '12px', textTransform: 'uppercase', fontWeight: 700, lineHeight: 1.6 }}>Oportunidad Premium</p>
                            <p style={{ margin: 0, fontSize: '14px', color: '#333', lineHeight: 1.6 }}>El curso de Sábado (Mañana) finaliza en Febrero. Preparar lista de espera.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 4: Programación Extendida */}
            <Slide id="slide4">
                <div style={{ width: '100%', padding: '0 40px' }}>
                    <h2 style={{
                        fontSize: '42px',
                        fontWeight: 700,
                        marginBottom: '40px',
                        width: '100%',
                        borderBottom: '4px solid #000',
                        paddingBottom: '15px',
                        color: '#000',
                        fontFamily: "'Arimo', sans-serif",
                        textTransform: 'uppercase'
                    }}>
                        PROGRAMACIÓN EXTENDIDA
                    </h2>
                    <p style={{ marginBottom: '40px', fontSize: '18px', color: '#333', lineHeight: 1.6 }}>
                        Opciones disponibles para preinscripción (sin fecha de inicio asignada).
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', width: '100%' }}>
                        {/* Junior Chef */}
                        <div style={{ background: 'white', padding: '30px', border: '1px solid #000', boxShadow: '10px 10px 0px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Arimo', sans-serif", textTransform: 'uppercase', color: '#000', letterSpacing: '-0.5px' }}>
                                <i className="fa-solid fa-child" style={{ color: '#000' }}></i> JUNIOR CHEF
                            </h3>
                            <p style={{ color: '#666', fontStyle: 'italic', lineHeight: 1.6 }}>Programa especial para jóvenes.</p>
                            <div style={{ background: '#f4f4f4', padding: '15px', borderLeft: '3px solid #000', marginTop: '20px' }}>
                                <strong>Viernes (Tarde)</strong><br />
                                2:00 pm - 5:30 pm
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <Tag variant="outline">Preinscripción Abierta</Tag>
                            </div>
                        </div>

                        {/* Lista de Espera Pastelería */}
                        <div style={{ background: 'white', padding: '30px', border: '1px solid #000', boxShadow: '10px 10px 0px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Arimo', sans-serif", textTransform: 'uppercase', color: '#000', letterSpacing: '-0.5px' }}>
                                <i className="fa-solid fa-clipboard-list" style={{ color: '#000' }}></i> ESPERA: PASTELERÍA
                            </h3>
                            <p style={{ color: '#333', lineHeight: 1.6 }}>Turnos disponibles para conformar grupo:</p>
                            <ul style={{ paddingLeft: '20px', fontSize: '16px', marginTop: '20px', color: '#333' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Lunes:</strong> 8:00 am y 2:00 pm</li>
                                <li style={{ marginBottom: '10px' }}><strong>Miércoles:</strong> 2:00 pm</li>
                                <li style={{ marginBottom: '10px' }}><strong>Jueves:</strong> 2:00 pm</li>
                            </ul>
                            <div style={{ marginTop: '20px' }}>
                                <Tag variant="gray">Sin fecha definida</Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* Slide 5: Diplomado */}
            <div className="slide-container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                padding: 0,
                alignItems: 'center',
                backgroundColor: '#fff',
                minHeight: '500px',
                width: '100%',
                maxWidth: '1280px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                overflow: 'hidden'
            }} id="slide5">
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '12px', backgroundColor: '#000', zIndex: 2 }} />

                <div style={{ padding: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                    <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '20px', fontFamily: "'Arimo', sans-serif", textTransform: 'uppercase', color: '#000', letterSpacing: '-0.5px' }}>
                        DIPLOMADO EN GERENCIA
                    </h2>
                    <p style={{ fontSize: '18px', marginBottom: '30px', color: '#333', lineHeight: 1.6 }}>
                        Gestión estratégica de negocios gastronómicos.
                    </p>

                    <div style={{ background: 'white', padding: '25px', border: '1px solid #000', marginBottom: '20px', boxShadow: '5px 5px 0px #000' }}>
                        <strong style={{ fontSize: '20px', display: 'block', textTransform: 'uppercase' }}>Martes (Noche)</strong>
                        <span style={{ fontSize: '16px', color: '#333' }}>5:00 pm - 9:00 pm</span><br />
                        <div style={{ marginTop: '10px' }}>
                            <Tag variant="black">CÓDIGO: DP27587</Tag>
                        </div>
                    </div>

                    <div style={{ background: 'white', padding: '25px', border: '1px solid #ccc' }}>
                        <strong style={{ fontSize: '20px', display: 'block', textTransform: 'uppercase' }}>Sábado (Mañana)</strong>
                        <span style={{ fontSize: '16px', color: '#333' }}>8:00 am - 12:30 pm</span><br />
                        <div style={{ marginTop: '10px' }}>
                            <Tag variant="outline">DIPLOMADO</Tag>
                        </div>
                    </div>
                </div>

                <img
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2670&auto=format&fit=crop"
                    alt="Gerente de restaurante con tablet"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
        </div>
    );
}
