import React from 'react';
import {
    Briefcase, ChartLineUp, GlobeHemisphereWest, ChartBar, DeviceMobile, Brain,
    Users, PaintBrush, ClipboardText, CurrencyDollar, Scales, FirstAid, GraduationCap,
    Clock, MapPin, CalendarBlank
} from '@phosphor-icons/react';

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
            <Clock size={16} weight="fill" /> {time}
        </div>
        <div style={{
            fontSize: '11px',
            marginTop: '5px',
            color: '#666',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
        }}>
            <MapPin size={14} weight="fill" /> {location}
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

// Módulo Card - Black/White style with Phosphor Icons
const ModuleCard = ({ number, title, Icon }) => (
    <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '15px',
        padding: '15px',
        backgroundColor: number % 2 === 0 ? '#f8f9fa' : '#fff',
        border: '1px solid #000',
        marginBottom: '10px'
    }}>
        <div style={{
            minWidth: '50px',
            height: '50px',
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 700,
            fontFamily: "'Azeret Mono', monospace"
        }}>
            {number}
        </div>
        <div style={{ flex: 1 }}>
            <div style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#000',
                marginBottom: '4px'
            }}>
                {title}
            </div>
            <div style={{ color: '#00cc66' }}>
                <Icon size={24} weight="fill" />
            </div>
        </div>
    </div>
);

// Feature Card - Black/White with Phosphor Icons
const FeatureCard = ({ Icon, title, description }) => (
    <div style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        border: '1px solid #000'
    }}>
        <div style={{
            marginBottom: '10px',
            color: '#00cc66'
        }}>
            <Icon size={40} weight="fill" />
        </div>
        <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>{title}</div>
        <div style={{ fontSize: '11px', color: '#666', lineHeight: 1.4 }}>{description}</div>
    </div>
);

export default function FlyerGerencia() {
    const modulos = [
        { number: 1, title: "Emprendimiento Modelo Negocio Gastronómico bajo CANVAS", Icon: ChartBar },
        { number: 2, title: "Marketing Gastronómico", Icon: DeviceMobile },
        { number: 3, title: "Neuromarketing y Neurogastronomía", Icon: Brain },
        { number: 4, title: "Capital Humano, Liderazgo y Coaching Organizacional", Icon: Users },
        { number: 5, title: "Diseño y Ambientación de los Espacios Gastronómicos", Icon: PaintBrush },
        { number: 6, title: "Ingeniería del Menú y Catering", Icon: ClipboardText },
        { number: 7, title: "Manejo de Presupuestos de Producción, Planificación y Control Gastronómico", Icon: CurrencyDollar },
        { number: 8, title: "Marco Jurídico para Negocio Gastronómico", Icon: Scales },
        { number: 9, title: "Educación Gastronómica en Higiene y Salud Ocupacional en la Manipulación de Alimentos", Icon: FirstAid },
        { number: 10, title: "Proyecto Final de Negocio Gastronómico bajo CANVAS", Icon: GraduationCap }
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
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2570&auto=format&fit=crop"
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
                        <p style={{ fontSize: '13px', fontFamily: "'Azeret Mono'", color: '#333', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}>
                            4 Meses • 10 Módulos • Certificación Profesional
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
                        Formación integral para chefs, emprendedores y profesionales del sector alimentario
                    </span>

                    {/* DESCRIPCIÓN */}
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        marginBottom: '25px',
                        border: '1px solid #000'
                    }}>
                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#333', margin: 0 }}>
                            El <strong>Diplomado en Gerencia Gastronómica</strong> de La New Cuisine está diseñado para formar líderes capaces de <strong>gestionar negocios gastronómicos rentables y sostenibles</strong>. A través de 10 módulos especializados, desarrollarás competencias en emprendimiento, marketing, finanzas y gestión de equipos. El programa incluye formación en tendencias globales como <strong>sostenibilidad, marketing digital y control de costos</strong> en entornos reales de restaurantes y hoteles.
                        </p>
                    </div>

                    {/* CARACTERÍSTICAS PRINCIPALES */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '15px',
                        marginBottom: '25px'
                    }}>
                        <FeatureCard
                            Icon={Briefcase}
                            title="Visión Estratégica"
                            description="Planificación y dirección de negocios gastronómicos"
                        />
                        <FeatureCard
                            Icon={ChartLineUp}
                            title="Rentabilidad"
                            description="Optimización de costos y maximización de beneficios"
                        />
                        <FeatureCard
                            Icon={GlobeHemisphereWest}
                            title="Tendencias Globales"
                            description="Sostenibilidad y marketing digital aplicado"
                        />
                    </div>

                    {/* CONTENIDO DEL PROGRAMA */}
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <ClipboardText size={20} weight="fill" style={{ color: '#00cc66' }} /> Contenido del Programa - 10 Módulos
                    </h3>
                    <div>
                        {modulos.map((modulo) => (
                            <ModuleCard
                                key={modulo.number}
                                number={modulo.number}
                                title={modulo.title}
                                Icon={modulo.Icon}
                            />
                        ))}
                    </div>

                    {/* FECHAS */}
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginTop: '25px',
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <CalendarBlank size={20} weight="fill" style={{ color: '#00cc66' }} /> Próximas Fechas
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '20px'
                    }}>
                        <ScheduleCard
                            label="Horario A"
                            day="Martes (Tarde)"
                            time="2:00 PM - 6:00 PM"
                            location="Sede Valencia"
                            code="ABIERTO"
                            isOpen={true}
                        />
                        <ScheduleCard
                            label="Horario B"
                            day="Sábados (Mañana)"
                            time="8:00 AM - 12:30 PM"
                            location="Sede Valencia"
                            code="ABIERTO"
                            isOpen={true}
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
                            <CurrencyDollar size={20} weight="fill" style={{ color: '#00cc66' }} /> Inversión
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>50 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Inscripción</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>130 €</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Mensualidad</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>Incluido</div>
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Material Digital</div>
                            </div>
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
                        ¡LIDERA TU PROPIO NEGOCIO GASTRONÓMICO!
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
