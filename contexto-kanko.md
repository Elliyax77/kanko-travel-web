# CONTEXTO — Kanko Travel Web (観光)

> ⚠️ **REGLA OBLIGATORIA**
> Cada vez que se realice cualquier cambio en la web (nuevo componente, nueva sección, cambio de paquetes, ajuste de precios, nuevos enlaces de contacto, etc.), este archivo **debe actualizarse** para reflejar el estado actual del proyecto. El contexto siempre debe estar sincronizado con el código.

---

## ¿Qué es este proyecto?
Sitio web oficial de **Kanko Travel — Agencia de Viajes** (観光, *Kankō* significa "turismo" o "el arte de contemplar la belleza del mundo" en japonés). Es una agencia especializada en experiencias turísticas internacionales de alto nivel, con fuerte enfoque en:
- Rutas por **Japón y Asia** (Tokio, Kioto, Monte Fuji, Bali, etc.).
- Circuitos clásicos por **Europa** (París, Roma, Madrid, Venecia).
- Destinos de sol y lujo en el **Caribe** (Punta Cana, Maldivas, Los Roques, Curazao).
- **Full Days** nacionales de aventura y relax (Morrocoy Cayo Sombrero, Isla Larga, Colonia Tovar).
- Emisión de **Boletos Aéreos**, asesoría en visados y **Seguros de Asistencia Médica Internacional**.

La plataforma está construida con una filosofía estricta **Mobile-First**, garantizando que los usuarios que navegan desde teléfonos celulares vivan una experiencia fluida, rápida y con conversión directa a WhatsApp en un solo clic.

---

## Stack tecnológico
- **Framework:** React 19 + Vite
- **Animaciones:** Framer Motion (transiciones fluidas de slides, efectos de entrada y gestos táctiles de swipe)
- **Íconos:** Lucide React
- **Tipografías:**
  - Títulos, números y display: **Outfit** (Google Fonts — moderna, geométrica, elegante y de alta gama)
  - Cuerpo y lectura: **Plus Jakarta Sans** (Google Fonts — nitidez total en pantallas retina y móviles)
- **CSS:** Vanilla CSS modular por componente (sin Tailwind CSS)
- **Rendimiento de Scroll:** Implementación anti-flicker con histéresis de desplazamiento (compacta a > 60px, expande a < 15px), `overflow-anchor: none`, y aceleración por GPU (`transform: translateZ(0)`).

---

## Identidad Visual y Paleta de Colores
Inspirada en el isotipo oficial con el Kanji rojo **旅** (*Tabi*, travesía/viaje) y líneas de globo terráqueo en plata:

- **Rojo Torii Carmesí:** `#DC2626` (color primario de marca, energía, llamados a la acción, badges de distinción)
  - Hover / Dark: `#B91C1C` / `#991B1B`
  - Tinte suave: `#FEE2E2`
  - Resplandor: `rgba(220, 38, 38, 0.35)`
- **Tinta Sumi / Jet Black:** `#09090B` (elegancia, fondos de contraste, footer y acentos de lujo)
- **Charcoal / Pizarra Oscuro:** `#18181B` a `#27272A` (tarjetas dark, texto principal)
- **Oro Sol Naciente:** `#F59E0B` (acentos VIP, etiquetas de precio y elementos estelares)
- **Fondo Lienzo Seda:** `#F8F9FA` con sutiles degradados radiales translúcidos en rojo y carbón.
- **Blanco Puro:** `#FFFFFF` (tarjetas con sombras refinadas y cabecera limpia).

---

## Estructura del proyecto
```
kanko-travel-web/
├── public/
│   ├── kanko-logo.png           ← Logotipo oficial horizontal Kanko Travel (globo terráqueo a la izquierda y texto a la derecha)
│   ├── kanko-isotype.jpg        ← Isotipo circular oficial (kanji rojo 旅 en globo terráqueo)
│   ├── favicon.png              ← Isotipo para favicon del navegador
│   └── favicon.ico              ← Icono ICO para compatibilidad
├── src/
│   ├── App.jsx                  ← Ensamblador principal de la web y control de modales
│   ├── App.css                  ← Estilos del contenedor general y espaciado para barra móvil
│   ├── index.css                ← Variables globales, tokens de color, tipografía y utilidades
│   ├── main.jsx                 ← Punto de entrada React 19
│   ├── data/
│   │   ├── kankoData.js         ← Base de datos local (slides, paquetes, categorías, full days, pagos, seguros, FAQ)
│   │   └── legalContent.js      ← Redacción jurídica completa (Aviso Legal, Privacidad RGPD/ARCO, Cookies, Términos/Cancelaciones)
│   └── components/
│       ├── Header.jsx / .css        ← Encabezado sticky anti-parpadeo con logo Kanko, botón de cotizar y menú circular
│       ├── CategoryBar.jsx / .css   ← Barra horizontal swipeable con categorías rápidas (Todos, Japón, Europa, Caribe, Full Days, Vuelos)
│       ├── HeroSlider.jsx / .css    ← Slider panorámico (16:9 desktop / 4:3 móvil min 360px) con swipe táctil, precios y botón obligatorio abajo-izquierda
│       ├── TripPlanner.jsx / .css   ← Cotizador interactivo en 3 pasos con checkbox de privacidad no pre-marcada y generación de cotización
│       ├── PackagesGrid.jsx / .css  ← Grilla reactiva de paquetes filtrables, tags de vuelos, inclusiones y banner de asesoría
│       ├── FullDaysSection.jsx/.css ← Tours de 1 día (Morrocoy, Isla Larga, Colonia Tovar) con precios y reserva directa
│       ├── FeaturesSection.jsx/.css ← 4 pilares: Especialistas en Asia, Plan en cuotas al 30%, Seguro internacional y Asesoría 24/7
│       ├── PaymentMethodsSection.jsx/.css ← Métodos de pago (Zelle, BCV, Binance, Efectivo, Tarjetas) y banner de pago en cuotas
│       ├── NavDrawer.jsx / .css     ← Panel lateral desplegable estilo japonés con isotipo Kanko y 8 opciones de navegación
│       ├── DetailModals.jsx / .css  ← Modales con detalles para Seguro de Viaje Schengen y Quiénes Somos / Filosofía Kanko
│       ├── ContactModal.jsx / .css  ← Modal de contacto directo con checkbox activa de consentimiento previo y validación estricta
│       ├── LegalModals.jsx / .css   ← Visor modal accesible de textos legales con pestañas, selector directo y función de impresión
│       ├── CookieBanner.jsx / .css  ← Banner de consentimiento de cookies RGPD/ePrivacy con botones equilibrados (Aceptar, Rechazar, Configurar) y bloqueo previo
│       ├── MobileBottomBar.jsx/.css ← Barra de navegación fija inferior para celulares (Destinos, Cotizar WhatsApp, Menú)
│       └── Footer.jsx / .css        ← Pie de página premium en Sumi Black con barra accesible de enlaces legales y botón de ajuste de cookies
├── contexto-kanko.md            ← Documento de contexto y reglas obligatorias del proyecto Kanko Travel
├── package.json                 ← Dependencias (React 19, Vite, Framer Motion, Lucide React)
└── vite.config.js               ← Configuración de Vite con puerto 3000
```

---

## Secciones y Elementos de la Web (en orden de navegación)
1. **Header Kanko:**
   - Logotipo oficial horizontal Kanko Travel a la izquierda: disposición panorámica (~2.5:1) con isotipo a la izquierda y tipografía a la derecha (60px en desktop / 48px en smartphones y 48px/40px en modo scrolled), integrándose de forma limpia y estilizada.
   - A la derecha: Botón directo Carmesí de **Cotizar Viaje** + Botón de Menú circular estilizado.
   - Algoritmo de scroll estabilizado con histéresis (compacta a 60px y expande a 15px, con `overflow-anchor: none`).
2. **CategoryBar (Barra de Categorías Swipeable):**
   - Acceso inmediato en móviles y desktop a: *Todos, Japón & Asia, Europa, Caribe & Playas, Full Days y Boletos & Visas*.
3. **Hero Slider:**
   - Destinos insignia (Japón Fascinante, Europa Soñada, Dubái & Maldivas, Punta Cana Todo Incluido).
   - Tag flotante de precio y duración en esquina superior derecha.
   - Botón obligatorio **"Más información"** en la **esquina inferior izquierda** conectado directamente con WhatsApp.
4. **TripPlanner (Cotizador Interactivo a la Medida):**
   - Selector en 3 pasos: Destino -> Época del año -> Cantidad de viajeros.
   - **Cumplimiento legal:** Casilla de verificación activa (no pre-marcada) de aceptación de Política de Privacidad y Términos con enlace directo.
   - Validación que impide el envío si no está marcada, mostrando advertencia visual clara.
5. **Cuadrícula de Paquetes Internacionales:**
   - Tarjetas modernas con relación de aspecto adaptada, etiquetas de *Vuelo incluido*, lista de inclusiones clave, precio referencial y botón de acción en esquina inferior izquierda.
   - Banner interactivo: *"¿Tienes una ruta diferente en mente? Creamos tu itinerario personalizado con plan de cuotas al 30%"*.
6. **Full Days & Escapadas Cortas:**
   - Tours de 1 día (Morrocoy VIP, Isla Larga y Colonia Tovar) con detalles de transporte, lanchas e hidratación.
7. **¿Por qué viajar con Kanko Travel?:**
   - Tarjetas de respaldo: Especialistas en Rutas Mundiales, Reserva en Cuotas (30%), Seguro Internacional Schengen y Asistencia 24/7.
8. **Métodos de Pago & Facilidades en Cuotas:**
   - Zelle, Pago Móvil (tasa BCV), Binance Pay (USDT), Efectivo USD/EUR y Tarjetas Internacionales.
   - Destacado especial del Plan de Reserva en Cuotas.
9. **Footer Accesible & Enlaces Legales Obligatorios:**
   - Diseño Sumi Black con isotipo Kanko, lema de marca, canales de atención y sellos de confianza.
   - **Barra de navegación legal accesible (`.footer-legal-bar`):** Enlaces directos a *Aviso Legal*, *Política de Privacidad*, *Política de Cookies*, *Términos de Contratación & Cancelación* y botón persistente `⚙️ Configurar Cookies` para revocar o alterar consentimientos en cualquier momento.
10. **Mobile Bottom Bar (Barra fija inferior móvil):**
    - Acceso persistente con 1 solo toque en smartphones: *Destinos*, *Cotizar por WhatsApp* (botón carmesí elevado) y *Menú*.
11. **Sistema Normativo y Cumplimiento Digital (RGPD / LOPDGDD / Ley de Comercio Electrónico):**
    - **Banner de Cookies:** Consentimiento previo obligatorio (no se inyectan cookies analíticas/marketing antes de consentimiento expreso). Botones visualmente equilibrados de *Aceptar Todas*, *Rechazar Opcionales* y *Configurar Preferencias*. Panel granular con interruptores independientes para Cookies Necesarias (fijas), Analíticas y Publicitarias. Persistencia en `localStorage` y emisión de eventos `kankoConsentChanged`.
    - **Visor Modal de Textos Legales (`LegalModals`):** Lectura rápida y accesible de los 4 cuerpos normativos redactados profesionalmente (sin placeholders genéricos ni *lorem ipsum*), con pestañas de intercambio dinámico, botón de impresión y cierre accesible.
    - **Formularios con consentimiento expreso:** Checkboxes en `TripPlanner` y `ContactModal` no pre-marcadas por defecto con enlace a la Política de Privacidad y bloqueo de acción con aviso en caso de omitirse.

---

## Reglas de diseño y cumplimiento a respetar
- **Identidad de Kanko:** Distinguirse totalmente de InspiraViaje. Kanko utiliza Rojo Torii Carmesí, Negro Tinta Sumi y Blanco Seda con toques dorados, evocando precisión, lujo y viaje internacional.
- **Tipografías:** Siempre **Outfit** para encabezados y **Plus Jakarta Sans** para cuerpo.
- **Ubicación del botón de acción en imágenes:** Siempre en la **parte inferior izquierda**.
- **Mobile-First:** Botones generosos (mínimo 44px de altura), soporte para gestos táctiles (swipe), sin recortes indeseados de texto y barra fija inferior en móviles.
- **Vanilla CSS modular:** Sin Tailwind CSS. Todo ordenado en archivos `.css` limpios por componente.
- **Cumplimiento legal y privacidad digital:** NINGUNA casilla de consentimiento puede estar pre-marcada (Reglamento UE 2016/679 / RGPD Sentencia Planet49). El banner de cookies debe ofrecer opciones simétricas de aceptación y rechazo. La configuración de cookies debe permanecer accesible en todo momento desde el pie de página.
