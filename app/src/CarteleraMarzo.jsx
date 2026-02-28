import React from 'react';
import {
    Flask,
    Lightbulb,
    Users,
    CookingPot,
    Calendar,
    Clock,
    MapPin,
    Money,
    Certificate,
    WhatsappLogo,
    Star,
    Fire,
    Target,
    Brain,
    Handshake,
    ChefHat
} from '@phosphor-icons/react';
import EditableText from './components/EditableText';

// Tag component matching the rest of the app
const Tag = ({ variant = 'outline', children }) => {
    const styles = {
        black: { backgroundColor: '#000', color: '#fff', border: '1px solid #000' },
        outline: { backgroundColor: '#fff', color: '#000', border: '1px solid #000' },
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

// Info pill for workshop details
const InfoPill = ({ icon: Icon, label, value }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        padding: '15px 20px',
        backgroundColor: '#000',
        color: '#fff'
    }}>
        <Icon size={24} weight="light" color="#fff" />
        <div>
            <div style={{ fontSize: '11px', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</div>
            <div style={{ fontSize: '16px', fontWeight: 700 }}>{value}</div>
        </div>
    </div>
);

// Content Item
const ContentItem = ({ number, children }) => (
    <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        padding: '10px 0',
        borderBottom: '1px solid #eee',
        fontSize: '14px',
        lineHeight: 1.6
    }}>
        {number && (
            <span style={{
                backgroundColor: '#000',
                color: '#fff',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 700,
                flexShrink: 0,
                marginTop: '2px'
            }}>{number}</span>
        )}
        {!number && <span style={{ color: '#000' }}>✓</span>}
        <span>{children}</span>
    </div>
);

export default function CarteleraMarzo() {
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

                {/* ============================================ */}
                {/* HERO - CARTELERA DE MARZO                     */}
                {/* ============================================ */}
                <div className="responsive-hero" style={{
                    position: 'relative',
                    height: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    backgroundColor: '#000'
                }}>
                    {/* Barra superior */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '12px',
                        backgroundColor: '#000',
                        zIndex: 20
                    }} />

                    {/* Background image */}
                    <img
                        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2670&auto=format&fit=crop"
                        alt="Cocina profesional"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            top: 0,
                            left: 0,
                            opacity: 0.4
                        }}
                    />

                    {/* Hero content */}
                    <div className="responsive-card" style={{
                        position: 'relative',
                        zIndex: 10,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '40px 60px',
                        width: '580px',
                        maxWidth: '90%',
                        textAlign: 'center',
                        border: '2px solid #000',
                        boxShadow: '15px 15px 0px rgba(0,0,0,1)'
                    }}>
                        <img
                            src="/logo.png"
                            alt="La New Cuisine"
                            className="responsive-logo"
                            style={{ width: '280px', maxWidth: '70%', height: 'auto', margin: '0 auto 15px' }}
                        />
                        <EditableText
                            id="cartelera-hero-title"
                            defaultValue="CARTELERA DE MARZO"
                            tag="h1"
                            style={{ fontSize: '28px', color: '#000', fontWeight: 700, marginTop: 0, marginBottom: '10px', letterSpacing: '3px', fontFamily: "'Arimo', sans-serif", textTransform: 'uppercase' }}
                        />
                        <hr style={{ border: 0, height: '2px', background: '#000', margin: '15px auto', width: '60px' }} />
                        <EditableText
                            id="cartelera-hero-subtitle"
                            defaultValue="Talleres y Masterclass • Marzo 2026"
                            tag="p"
                            style={{ fontSize: '13px', fontFamily: "'Azeret Mono'", color: '#555', textTransform: 'uppercase', lineHeight: 1.6, margin: 0 }}
                        />
                    </div>
                </div>

                {/* ============================================ */}
                {/* TALLER 1: ABC COCINA MOLECULAR                */}
                {/* ============================================ */}
                <div style={{ padding: '40px 30px', borderBottom: '4px solid #000' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                        <Tag variant="black">🧪 TALLER PRÁCTICO</Tag>
                        <Tag variant="outline">CUPOS LIMITADOS</Tag>
                    </div>

                    <EditableText
                        id="cartelera-molecular-title"
                        defaultValue="ABC de la Cocina Molecular"
                        tag="h2"
                        style={{ fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px', lineHeight: 1.1 }}
                    />
                    <EditableText
                        id="cartelera-molecular-subtitle"
                        defaultValue="¿Listo para desafiar los límites del sabor y la textura? 🧪✨"
                        tag="p"
                        style={{ fontFamily: "'Azeret Mono', monospace", fontSize: '14px', color: '#555', marginBottom: '20px', borderLeft: '3px solid #000', paddingLeft: '12px' }}
                    />

                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        marginBottom: '25px',
                        border: '1px solid #000'
                    }}>
                        <EditableText
                            id="cartelera-molecular-desc"
                            defaultValue="¿Te imaginas encapsular sabores y crear texturas que desafíen los sentidos? Únete a nuestro exclusivo Taller de Cocina Molecular impartido por el Chef Jesús Gil. En esta clase práctica, aprenderás los secretos detrás de los platos más innovadores del mundo: esferificaciones, espumas, aires y técnicas de vanguardia que transformarán tu visión de la cocina."
                            tag="p"
                            style={{ fontSize: '14px', lineHeight: 1.7, color: '#333', margin: 0 }}
                            multiline={true}
                        />
                    </div>

                    <div style={{
                        backgroundColor: '#fff',
                        padding: '20px',
                        marginBottom: '20px',
                        border: '1px solid #eee',
                        borderLeft: '3px solid #000'
                    }}>
                        <EditableText
                            id="cartelera-molecular-nota"
                            defaultValue="No necesitas ser un científico, ¡solo tener pasión por la buena mesa y la innovación! Los cupos se agotan rápido debido a que es 100% práctico."
                            tag="p"
                            style={{ fontSize: '14px', lineHeight: 1.7, color: '#555', margin: 0, fontStyle: 'italic' }}
                            multiline={true}
                        />
                    </div>

                    {/* Info grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '10px',
                        marginBottom: '20px'
                    }}>
                        <InfoPill icon={Calendar} label="Fecha" value="5 de Marzo 2026" />
                        <InfoPill icon={Clock} label="Hora" value="2:00 a 6:00 PM" />
                        <InfoPill icon={MapPin} label="Lugar" value="La New Cuisine" />
                        <InfoPill icon={Certificate} label="Incluye" value="Certificado + Insumos" />
                    </div>

                    {/* Inversión */}
                    <div style={{
                        backgroundColor: '#f9f9f9',
                        padding: '20px',
                        border: '1px solid #000'
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
                            <Money size={20} weight="light" color="#000" /> Inversión
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ textAlign: 'center', padding: '15px 25px', backgroundColor: '#fff', border: '1px solid #000', flex: '0 0 auto' }}>
                                <EditableText id="cartelera-molecular-precio" defaultValue="65 €" tag="div" style={{ fontSize: '28px', fontWeight: 700, color: '#000' }} />
                                <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>Todo incluido</div>
                            </div>
                            <EditableText
                                id="cartelera-molecular-duracion"
                                defaultValue="5 horas académicas de formación con certificado"
                                tag="p"
                                style={{ fontSize: '13px', color: '#555', margin: 0 }}
                            />
                        </div>
                    </div>
                </div>


                {/* ============================================ */}
                {/* TALLER 2: DE CHEF A MARCA                     */}
                {/* ============================================ */}
                <div style={{ padding: '40px 30px', borderBottom: '4px solid #000' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                        <Tag variant="black">💡 MASTER CLASS</Tag>
                        <Tag variant="outline">CUPOS LIMITADOS</Tag>
                    </div>

                    <EditableText
                        id="cartelera-marca-title"
                        defaultValue="De Chef a Marca"
                        tag="h2"
                        style={{ fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px', lineHeight: 1.1 }}
                    />
                    <EditableText
                        id="cartelera-marca-subtitle"
                        defaultValue="Cómo convertir tu talento en un negocio rentable"
                        tag="p"
                        style={{ fontSize: '18px', color: '#333', marginBottom: '5px', fontStyle: 'italic' }}
                    />
                    <EditableText
                        id="cartelera-marca-subtitle2"
                        defaultValue="Ingeniería de Marca: Monetiza tu Talento en la Cocina"
                        tag="p"
                        style={{ fontFamily: "'Azeret Mono', monospace", fontSize: '14px', color: '#555', marginBottom: '20px', borderLeft: '3px solid #000', paddingLeft: '12px' }}
                    />

                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        marginBottom: '25px',
                        border: '1px solid #000'
                    }}>
                        <EditableText
                            id="cartelera-marca-desc"
                            defaultValue="Deja de vender comida y empieza a vender una marca. Los cupos son limitados para garantizar asesoría personalizada durante la sesión. Únete a nuestra exclusiva Master Class."
                            tag="p"
                            style={{ fontSize: '14px', lineHeight: 1.7, color: '#333', margin: 0 }}
                            multiline={true}
                        />
                    </div>

                    <div style={{
                        backgroundColor: '#fff',
                        padding: '20px',
                        marginBottom: '20px',
                        border: '1px solid #eee',
                        borderLeft: '3px solid #000'
                    }}>
                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#555', margin: 0 }}>
                            <strong>Pensado en ti, tenemos 2 horarios:</strong> Mañana 8:00 AM - 12:00 M y Tarde 2:00 - 6:00 PM. Regístrate en el que más te convenga.
                        </p>
                    </div>

                    {/* Info grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '10px',
                        marginBottom: '20px'
                    }}>
                        <InfoPill icon={Calendar} label="Fecha" value="20 de Marzo 2026" />
                        <InfoPill icon={Clock} label="Horarios" value="8AM-12M / 2-6PM" />
                        <InfoPill icon={MapPin} label="Lugar" value="La New Cuisine" />
                        <InfoPill icon={Certificate} label="Incluye" value="Certificado" />
                    </div>

                    {/* Inversión */}
                    <div style={{
                        backgroundColor: '#f9f9f9',
                        padding: '20px',
                        border: '1px solid #000'
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
                            <Money size={20} weight="light" color="#000" /> Inversión
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ textAlign: 'center', padding: '15px 25px', backgroundColor: '#fff', border: '1px solid #000', flex: '0 0 auto' }}>
                                <EditableText id="cartelera-marca-precio" defaultValue="35 €" tag="div" style={{ fontSize: '28px', fontWeight: 700, color: '#000' }} />
                            </div>
                            <EditableText
                                id="cartelera-marca-duracion"
                                defaultValue="5 horas académicas de formación con certificado"
                                tag="p"
                                style={{ fontSize: '13px', color: '#555', margin: 0 }}
                            />
                        </div>
                    </div>
                </div>


                {/* ============================================ */}
                {/* TALLER 3: GERENCIA DE CONFLICTOS               */}
                {/* ============================================ */}
                <div style={{ padding: '40px 30px', borderBottom: '4px solid #000' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                        <Tag variant="black">🔥 TALLER</Tag>
                        <Tag variant="outline">CUPOS LIMITADOS</Tag>
                    </div>

                    <EditableText
                        id="cartelera-conflictos-title"
                        defaultValue="Gerencia de Conflictos"
                        tag="h2"
                        style={{ fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px', lineHeight: 1.1 }}
                    />
                    <EditableText
                        id="cartelera-conflictos-subtitle"
                        defaultValue="Controlando el Fuego en el Equipo"
                        tag="p"
                        style={{ fontSize: '18px', color: '#333', marginBottom: '5px', fontStyle: 'italic' }}
                    />
                    <EditableText
                        id="cartelera-conflictos-subtitle2"
                        defaultValue="Herramientas reales para liderar bajo presión"
                        tag="p"
                        style={{ fontFamily: "'Azeret Mono', monospace", fontSize: '14px', color: '#555', marginBottom: '20px', borderLeft: '3px solid #000', paddingLeft: '12px' }}
                    />

                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        marginBottom: '25px',
                        border: '1px solid #000'
                    }}>
                        <p style={{ fontSize: '14px', fontWeight: 700, marginTop: 0, marginBottom: '15px', color: '#000' }}>
                            Aprenderás herramientas reales para:
                        </p>
                        <div style={{ display: 'grid', gap: '0' }}>
                            <ContentItem>Manejar momentos de alta presión sin perder el control.</ContentItem>
                            <ContentItem>Resolver roces entre personal de sala y cocina.</ContentItem>
                            <ContentItem>Liderar con autoridad, no con autoritarismo.</ContentItem>
                        </div>
                    </div>

                    {/* Temario */}
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
                            <Target size={20} weight="light" color="#000" /> Objetivos
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '0 20px'
                        }}>
                            <ContentItem number="1">Conocer la importancia del manejo del conflicto en las organizaciones</ContentItem>
                            <ContentItem number="2">Aprender las diferentes técnicas para un manejo adecuado del conflicto</ContentItem>
                            <ContentItem number="3">Reflexionar sobre la prospectiva del manejo del conflicto en el entorno personal</ContentItem>
                            <ContentItem number="4">Conocer la importancia de una autoestima sana en el manejo de los conflictos</ContentItem>
                            <ContentItem number="5">Aprender a fortalecer la autoestima de cada trabajador en la organización</ContentItem>
                            <ContentItem number="6">Reflexionar sobre la importancia de una autoestima sana en el desarrollo personal y laboral</ContentItem>
                        </div>
                    </div>

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
                            <Brain size={20} weight="light" color="#000" /> Contenido
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '0 20px'
                        }}>
                            <ContentItem>Concepto de conflicto</ContentItem>
                            <ContentItem>Posiciones teóricas sobre el conflicto</ContentItem>
                            <ContentItem>Etapas, clases y niveles de conflicto</ContentItem>
                            <ContentItem>Causas y formas de intervención para el manejo de conflictos</ContentItem>
                            <ContentItem>Métodos para la solución de los conflictos</ContentItem>
                            <ContentItem>Reflexiones sobre el manejo de conflictos en la organización y personal</ContentItem>
                            <ContentItem>Concepto y tipos de autoestima</ContentItem>
                            <ContentItem>Influencia de una autoestima sana en el manejo de conflictos</ContentItem>
                            <ContentItem>Desventajas de una autoestima baja en la resolución de conflictos</ContentItem>
                            <ContentItem>Estrategias para fortalecer la autoestima de cada trabajador</ContentItem>
                            <ContentItem>Reflexiones sobre saber manejar conflictos y tener una autoestima sana para crear un ambiente laboral exitoso</ContentItem>
                        </div>
                    </div>

                    {/* Info grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '10px',
                        marginBottom: '20px'
                    }}>
                        <InfoPill icon={Calendar} label="Fecha" value="18 de Marzo 2026" />
                        <InfoPill icon={Clock} label="Hora" value="3:00 a 6:00 PM" />
                        <InfoPill icon={MapPin} label="Lugar" value="La New Cuisine" />
                        <InfoPill icon={Certificate} label="Incluye" value="Certificado" />
                    </div>

                    {/* Inversión */}
                    <div style={{
                        backgroundColor: '#f9f9f9',
                        padding: '20px',
                        border: '1px solid #000'
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
                            <Money size={20} weight="light" color="#000" /> Inversión
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ textAlign: 'center', padding: '15px 25px', backgroundColor: '#fff', border: '1px solid #000', flex: '0 0 auto' }}>
                                <EditableText id="cartelera-conflictos-precio" defaultValue="35 €" tag="div" style={{ fontSize: '28px', fontWeight: 700, color: '#000' }} />
                            </div>
                            <EditableText
                                id="cartelera-conflictos-duracion"
                                defaultValue="4 horas académicas de formación con certificado"
                                tag="p"
                                style={{ fontSize: '13px', color: '#555', margin: 0 }}
                            />
                        </div>
                    </div>
                </div>


                {/* ============================================ */}
                {/* TALLER 4: COCINA ITALIANA INTENSIVO             */}
                {/* ============================================ */}
                <div style={{ padding: '40px 30px', borderBottom: '4px solid #000' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                        <Tag variant="black">🇮🇹 CURSO INTENSIVO</Tag>
                        <Tag variant="outline">CUPOS LIMITADOS</Tag>
                    </div>

                    <EditableText
                        id="cartelera-italiana-title"
                        defaultValue="Cocina Italiana Intensivo"
                        tag="h2"
                        style={{ fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px', lineHeight: 1.1 }}
                    />
                    <EditableText
                        id="cartelera-italiana-subtitle"
                        defaultValue="¡Domina la cocina italiana en 4 semanas!"
                        tag="p"
                        style={{ fontSize: '18px', color: '#333', marginBottom: '5px', fontStyle: 'italic' }}
                    />
                    <EditableText
                        id="cartelera-italiana-subtitle2"
                        defaultValue="20 horas académicas con certificación"
                        tag="p"
                        style={{ fontFamily: "'Azeret Mono', monospace", fontSize: '14px', color: '#555', marginBottom: '20px', borderLeft: '3px solid #000', paddingLeft: '12px' }}
                    />

                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        marginBottom: '25px',
                        border: '1px solid #000'
                    }}>
                        <EditableText
                            id="cartelera-italiana-desc"
                            defaultValue="¿Cansado de la pasta de paquete? En La New Cuisine te enseñamos a hacerla con tus propias manos. Hemos diseñado un curso intensivo de 4 clases con un menú de lujo."
                            tag="p"
                            style={{ fontSize: '14px', lineHeight: 1.7, color: '#333', margin: 0 }}
                            multiline={true}
                        />
                    </div>

                    {/* Clases detalle */}
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
                            <CookingPot size={20} weight="light" color="#000" /> Programa de 4 Clases
                        </h3>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '15px'
                        }}>
                            <div style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                                    <span style={{
                                        backgroundColor: '#000', color: '#fff', width: '28px', height: '28px',
                                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '13px', fontWeight: 700
                                    }}>1</span>
                                    <strong style={{ textTransform: 'uppercase', fontSize: '14px' }}>Entradas y Clásicos</strong>
                                </div>
                                <p style={{ fontSize: '13px', color: '#555', margin: 0, lineHeight: 1.6 }}>
                                    Berenjena Parmesana y Cannoli
                                </p>
                                <div style={{ marginTop: '8px' }}><Tag variant="outline">09 Mar</Tag></div>
                            </div>

                            <div style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                                    <span style={{
                                        backgroundColor: '#000', color: '#fff', width: '28px', height: '28px',
                                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '13px', fontWeight: 700
                                    }}>2</span>
                                    <strong style={{ textTransform: 'uppercase', fontSize: '14px' }}>Pastas Largas y Rellenas</strong>
                                </div>
                                <p style={{ fontSize: '13px', color: '#555', margin: 0, lineHeight: 1.6 }}>
                                    Raviolis, Linguinis, Pesto y Bolognesa, Tiramisú
                                </p>
                                <div style={{ marginTop: '8px' }}><Tag variant="outline">16 Mar</Tag></div>
                            </div>

                            <div style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                                    <span style={{
                                        backgroundColor: '#000', color: '#fff', width: '28px', height: '28px',
                                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '13px', fontWeight: 700
                                    }}>3</span>
                                    <strong style={{ textTransform: 'uppercase', fontSize: '14px' }}>Técnicas de Masa y Postre</strong>
                                </div>
                                <p style={{ fontSize: '13px', color: '#555', margin: 0, lineHeight: 1.6 }}>
                                    Capeletti, Ñoquis, Carbonara y Panna Cotta
                                </p>
                                <div style={{ marginTop: '8px' }}><Tag variant="outline">23 Mar</Tag></div>
                            </div>

                            <div style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #000' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                                    <span style={{
                                        backgroundColor: '#000', color: '#fff', width: '28px', height: '28px',
                                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '13px', fontWeight: 700
                                    }}>4</span>
                                    <strong style={{ textTransform: 'uppercase', fontSize: '14px' }}>El Mundo de las Masas</strong>
                                </div>
                                <p style={{ fontSize: '13px', color: '#555', margin: 0, lineHeight: 1.6 }}>
                                    Pizza, Focaccia, Salsa Napolitana y Sfogliatelle
                                </p>
                                <div style={{ marginTop: '8px' }}><Tag variant="outline">30 Mar</Tag></div>
                            </div>
                        </div>
                    </div>

                    {/* Info grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '10px',
                        marginBottom: '20px'
                    }}>
                        <InfoPill icon={Calendar} label="Inicio" value="09 de Marzo 2026" />
                        <InfoPill icon={Clock} label="Hora" value="Jueves 2 a 6 PM" />
                        <InfoPill icon={MapPin} label="Lugar" value="La New Cuisine" />
                        <InfoPill icon={Certificate} label="Incluye" value="Certificado" />
                    </div>

                    {/* Inversión */}
                    <div style={{
                        backgroundColor: '#f9f9f9',
                        padding: '20px',
                        border: '1px solid #000'
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
                            <Money size={20} weight="light" color="#000" /> Inversión
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ textAlign: 'center', padding: '15px 25px', backgroundColor: '#fff', border: '1px solid #000', flex: '0 0 auto' }}>
                                <EditableText id="cartelera-italiana-precio" defaultValue="80 €" tag="div" style={{ fontSize: '28px', fontWeight: 700, color: '#000' }} />
                            </div>
                            <div>
                                <EditableText
                                    id="cartelera-italiana-duracion"
                                    defaultValue="20 horas académicas de formación con certificado"
                                    tag="p"
                                    style={{ fontSize: '13px', color: '#555', margin: 0 }}
                                />
                                <p style={{ fontSize: '12px', color: '#888', margin: '5px 0 0' }}>
                                    4 clases (Jueves) • Incluye insumos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ============================================ */}
                {/* FOOTER CTA                                     */}
                {/* ============================================ */}
                <div style={{
                    backgroundColor: '#000',
                    color: '#fff',
                    padding: '30px',
                    textAlign: 'center'
                }}>
                    <EditableText
                        id="cartelera-footer-title"
                        defaultValue="¡Reserva tu cupo ahora!"
                        tag="p"
                        style={{ fontSize: '20px', fontWeight: 700, marginBottom: '5px', marginTop: 0 }}
                    />
                    <EditableText
                        id="cartelera-footer-desc"
                        defaultValue="Haz clic en el enlace o envíanos un mensaje directo para asegurar tu lugar."
                        tag="p"
                        style={{ fontSize: '14px', color: '#aaa', marginBottom: '20px' }}
                    />
                    <a
                        href="https://wa.me/584244635196"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: '#fff',
                            color: '#000',
                            display: 'inline-block',
                            padding: '12px 30px',
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
                        <EditableText id="cartelera-footer-cta" defaultValue="¡INSCRÍBETE VÍA WHATSAPP!" tag="span" />
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
                        <WhatsappLogo size={16} weight="light" color="#fff" /> <EditableText id="cartelera-footer-phone" defaultValue="+58 424-4635196 | Valencia, Vzla." tag="span" />
                    </div>
                </div>

            </div>
        </div>
    );
}
