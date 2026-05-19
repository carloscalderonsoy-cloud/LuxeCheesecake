# LUXE CHEESECAKE — BRANDBOOK v2.0

**Sistema de diseño** · Sistema dual · Soft luxury artesanal + Dark editorial
**Versión** 2.0 · Mayo 2026
**Owner** Carlos Calderón
**Aplicación principal** Web/ecommerce (landing + tienda) · Cliente B2C + Eventos

---

## 0. INSTRUCCIONES PARA CLAUDE CODE

Cuando construyas cualquier vista de Luxe Cheesecake:

1. **Importa `tokens.css` ANTES de cualquier otra hoja de estilos.**
2. **Por default, todo vive en surface blush** (`--rosa-100`). El dark mode es excepción, no norma.
3. **Usa siempre variables CSS**, nunca valores literales.
4. **Mobile-first 390px**, breakpoints en `48em` (tablet) y `72em` (desktop).
5. **Native `<details>/<summary>`** para todo acordeón. Nunca JS toggle.
6. **`opacity: 1` como default**, nunca `0` esperando animación.
7. **Touch targets ≥ 44×44px** en todo elemento clickeable.
8. **JS envuelto en IIFE**, sin dependencias externas para contenido visible.
9. **`iOS safe-area-inset`** en todo header/footer sticky.
10. **`font-size: 16px` mínimo** en inputs (evita zoom iOS).
11. **Precios y cifras**: `font-family: var(--font-mono)` + `font-variant-numeric: tabular-nums`.

---

## 1. EL SISTEMA DUAL

La marca opera en **dos surfaces que coexisten**, no compiten. Cada superficie tiene un propósito narrativo distinto y un canal de uso distinto.

### 1.1 Modo BLUSH (primario · 70% del sistema)

**Cuándo se usa:**
- Catálogo y listados de producto
- Homepage default
- About / proceso / artesanos
- Newsletter
- Confirmaciones, transaccional
- Empaque blanco/cremoso, papel kraft
- Stories y carruseles cotidianos

**Caracter:** suave, femenino, intimista, artesanal. Whitespace generoso. El producto respira sobre nude. Ladurée, Sézane, Le Labo apothecary.

**Tokens dominantes:** `--rosa-100`, `--rosa-200`, `--rosa-50`, `--ink`, `--bronce-500`.

### 1.2 Modo COCOA / WINE (secundario · 25% del sistema)

**Cuándo se usa:**
- Hero principal en homepage (un solo bloque)
- Product Detail Page de piezas signature / edición limitada
- Landing de Eventos B2B (wine es el mood)
- Empaque premium / negro
- Reels de producto en macro
- Stories de "drop" o lanzamiento

**Caracter:** denso, sensual, editorial, dramático. El producto se revela. Cherry Bombe night edition, Maison Pic.

**Tokens dominantes:** `--ink-950`, `--wine`, `--bronce-300` (highlight), `--rosa-50` (texto).

### 1.3 Modo TERRA (acento · 5%)

**Cuándo se usa:**
- Banners de campaña estacional
- Tags de "best seller", "novedad"
- Featured callout en homepage

**Tokens:** `--rosa-500` (fondo terracota) + `--rosa-50` (texto) + `--bronce-300` (acento).

### 1.4 El bridge: bronce

**El bronce/gold es el color firma que vive en AMBOS modos.** Es el hilo conductor visual. Si tienes duda de qué CTA usar entre los dos modos, **bronce siempre funciona**.

- `--bronce-500` sobre blush/cream (CTA primario en modo claro)
- `--bronce-300` sobre cocoa/wine (highlight en modo oscuro)
- `--bronce-700` para hover sobre claro

### 1.5 Regla de oro

**Nunca uses los dos modos compitiendo dentro de la misma vista por encima del fold.** Una vista = un modo dominante. Puede haber una sección secundaria del modo opuesto más abajo, pero arriba se decide y se compromete.

---

## 2. PALETA DE COLOR

### 2.1 Rosa / Nude — surface primaria

```
--rosa-50:  #FAF1EC   /* paper, fondo claro casi blanco cálido */
--rosa-100: #F2DDD0   /* blush base, SURFACE DEFAULT */
--rosa-200: #E5C2AF   /* nude midtone, cards sobre blush */
--rosa-300: #D4A89B   /* rosa polvo, mid signature */
--rosa-400: #B58B74   /* nude denso, profundidad */
--rosa-500: #A66A5A   /* terracota, acento drama */
```

**Evolución desde el logo:** El blush original (~#F5C9C0) era demasiado pastel "cute baby pink". El nuevo `--rosa-100` mantiene la familia pero suma calidez y profundidad — lee como nude expensive, no como pastel infantil.

### 2.2 Bronce / Gold — accent firma

```
--bronce-300: #D4B98C   /* highlight sobre dark */
--bronce-400: #C9A574
--bronce-500: #A88A5C   /* SIGNATURE — matches "CHEESECAKE" del logo */
--bronce-600: #8B6F44   /* hover, focus */
--bronce-700: #6E5632   /* deep, sobre claro */
```

**Anclaje al logo:** `--bronce-500` es el mismo color que el caption "CHEESECAKE ARTESANAL" del logo. Es intocable como signature.

### 2.3 Ink — negro cálido

```
--ink:     #1A1414   /* texto sobre claro / serif display LUXE */
--ink-950: #14090A   /* dark mode surface principal */
--ink-900: #1F1410   /* dark mode cards */
--ink-800: #2D1F1A
--ink-700: #3D2A22
```

`--ink` es el negro del wordmark LUXE — ligeramente cálido, nunca puro `#000`.

### 2.4 Wine — drama editorial

```
--wine:      #5C1F2A
--wine-deep: #3D1018
```

Reservado para landing de Eventos y momentos de drama. Lee como femenino-profundo (no como masculino), por eso funciona como puente con la marca.

### 2.5 Combinaciones aprobadas

**Modo Blush (claro):**

| Fondo | Texto | CTA |
|---|---|---|
| `--rosa-100` | `--ink` | `--bronce-500` o `--ink` |
| `--rosa-50`  | `--ink` | `--bronce-500` |
| `--rosa-200` | `--ink` | `--ink` (botón sólido negro) |

**Modo Cocoa (oscuro):**

| Fondo | Texto | CTA |
|---|---|---|
| `--ink-950` | `--rosa-50` | `--bronce-300` |
| `--wine`    | `--rosa-50` | `--bronce-300` |

### 2.6 Don'ts de color

- ❌ Cero `--rosa-100` mezclado en la misma vista que `--ink-950` por encima del fold.
- ❌ Cero rosa pastel (#FFC0CB), lila, fucsia, salmón pálido. Mata la sofisticación.
- ❌ Cero degradados rainbow.
- ❌ Cero blanco puro (`#FFF`). Siempre `--rosa-50` o `--rosa-100`.
- ❌ Cero negro puro (`#000`). Siempre `--ink` o `--ink-950`.
- ❌ Cero bronce a gran área (cansa). Es accent, no surface.

---

## 3. TIPOGRAFÍA

### 3.1 Familias

| Familia | Uso | Fuente |
|---|---|---|
| **Bodoni Moda** (variable, italic + roman, opsz) | Wordmark LUXE, display, hero, product names | Google Fonts |
| **Manrope** (variable 300–700) | Body, UI, tracked caps captions | Google Fonts |
| **JetBrains Mono** (400–500) | Precios, specs, números | Google Fonts |

**Import en `<head>`:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,700;1,6..96,400;1,6..96,500&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
```

### 3.2 Reglas de uso

- **Wordmark LUXE**: Bodoni Moda 500 roman (no italic), tracking `0.05em`. Reproduce el logo.
- **Caption tracked caps** (matches "CHEESECAKE ARTESANAL"): Manrope 500, uppercase, tracking `0.18em`, en `--bronce-500`. Con dot ornaments antes y después.
- **Hero headlines**: Bodoni Moda italic 400, optical size automática.
- **Subheadings**: Bodoni Moda roman 500.
- **Body**: Manrope 400, leading 1.6.
- **Tasting notes**: Bodoni Moda *italic* 400, leading 1.85.
- **Captions / metadata**: Manrope 500, tracked caps `0.16em`.
- **Precios**: JetBrains Mono 500, tabular-nums.

### 3.3 Escala

```
--text-xs:    12px   /* captions, badges */
--text-sm:    14px   /* secundario, metadata */
--text-base:  16px   /* body — MÍNIMO en inputs */
--text-lg:    18px   /* body destacado */
--text-xl:    20px   /* lead, tasting notes */
--text-2xl:   24px   /* H3 */
--text-3xl:   28–36  /* H2 */
--text-4xl:   32–48  /* H1 */
--text-5xl:   40–72  /* Display sección */
--text-display: 48–160  /* Wordmark hero */
```

### 3.4 Patrón signature: el "lockup LUXE"

Cualquier título grande puede usar el patrón completo del logo:

```html
<div class="lockup">
  <h1 class="lockup__word">LUXE</h1>
  <p class="lockup__caption">· CHEESECAKE ARTESANAL ·</p>
  <hr class="lockup__rule">
</div>
```

- Word: Bodoni Moda 500 roman, mayúsculas, tracking `0.05em`, `--ink` (o `--rosa-50` en dark).
- Caption: Manrope 500 caps, tracking `0.18em`, `--bronce-500` (o `--bronce-300` en dark).
- Dots: caracteres `·` con `margin-inline: 0.5em`.
- Rule: hairline `--bronce-500` 1px, anchura ~40% del wordmark.

### 3.5 Tasting note — patrón canónico

> *Notas de [sabor dominante], base de [textura/soporte], terminado con [acabado].*

Ejemplo:
> *Notas de vainilla bourbon de Madagascar, base de galleta speculoos tostada, terminado con dulce de leche templado a mano.*

**Reglas:**
- Bodoni Moda **italic** siempre.
- Tres elementos, separados por coma.
- "Terminado con" para el highlight final.
- Adjetivos sensoriales: untuoso, sedoso, denso, fundente, templado, cremoso, tostado, ahumado, balanceado.
- **NUNCA**: delicioso, rico, increíble, único, el mejor.

---

## 4. ESPACIO Y LAYOUT

### 4.1 Escala 4pt + saltos 8pt

```
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128
```

### 4.2 Contenedores

```
--container-sm: 640px    /* lectura larga */
--container-md: 960px    /* contenido estándar */
--container-lg: 1200px   /* catálogo */
--container-xl: 1440px   /* hero full */
--gutter: clamp(1.25rem, 4vw, 2.5rem)
```

### 4.3 Layouts característicos

- **Centro suave en blush mode**: catálogo y listados pueden centrarse para sensación intimista.
- **Asimetría editorial en dark mode**: hero y eventos van con headers alineados a la izquierda, número de sección en mono flotando arriba.
- **Whitespace generoso**: mínimo `--space-7` (48px) entre secciones en mobile, `--space-9` (96px) en desktop.

---

## 5. COMPONENTES

### 5.1 Botones (3 tiers en cada modo)

**En modo BLUSH:**

| Tier | Estilo |
|---|---|
| **Primary** | Fondo `--ink`, texto `--rosa-50`, sin radius o `--radius-sm` |
| **Bronze** | Fondo `--bronce-500`, texto `--rosa-50` — alternativa luxury |
| **Secondary** | Borde 1px `--ink`, fondo transparente, texto `--ink` |
| **Ghost** | Sin fondo, texto `--bronce-700`, underline en hover |

**En modo COCOA:**

| Tier | Estilo |
|---|---|
| **Primary** | Fondo `--bronce-500`, texto `--rosa-50` |
| **Secondary** | Borde 1px `--rosa-50`, fondo transparente, texto `--rosa-50` |
| **Ghost** | Sin fondo, texto `--bronce-300` |

**Especificaciones comunes:**
- Padding: `--space-3 --space-5`
- Min-height: 44px
- Font: Manrope 500, tracking `0.16em`, uppercase
- Transition: 240ms `ease-out`
- Hover primary blush: `--ink-800`
- Hover bronze: `--bronce-600` + `--glow-bronce`

### 5.2 Product card

```
┌──────────────────────────┐
│                          │
│   [IMAGEN PRODUCTO 4:5]  │
│                          │
├──────────────────────────┤
│  · CATEGORÍA ·           │  ← Manrope caps bronce-500 tracking-caps
│                          │
│  Nombre del producto     │  ← Bodoni italic 2xl ink
│                          │
│  Notas de [...], base    │  ← Bodoni italic sm leading-loose
│  de [...], terminado     │
│  con [...]               │
│                          │
│  ──── hairline ────      │
│  $580 MXN     [Pedir →]  │  ← Mono price + Primary btn
└──────────────────────────┘
```

**Estilo blush mode:**
- Background `--rosa-50` sobre fondo `--rosa-100`.
- Border 1px `--rosa-200`.
- Sombras `--shadow-sm` máximo.

**Estilo cocoa mode:**
- Background `--ink-900` sobre `--ink-950`.
- Border 1px `--ink-800`.

### 5.3 Tasting note block

```html
<blockquote class="tasting-note">
  <p><em>Notas de vainilla bourbon, base de speculoos tostada, terminado con dulce de leche templado a mano.</em></p>
</blockquote>
```

- Bodoni italic, `--text-xl` (20px).
- Leading 1.85.
- Border-left 1px `--bronce-500` (blush) o `--bronce-300` (cocoa).
- Padding-left `--space-4`.
- Max-width `36ch`.

### 5.4 Price tag

```html
<span class="price">
  <span class="price__amount">580</span>
  <span class="price__currency">MXN</span>
</span>
```

- `--font-mono`, weight 500, `tabular-nums`.
- Currency en `--text-xs` uppercase tracking-caps en bronce.

### 5.5 Size selector

Variantes cheesecake siempre como pills horizontales radio, nunca dropdown.

```html
<fieldset class="size-selector">
  <legend>Tamaño</legend>
  <div class="size-selector__row">
    <label class="size-option"><input type="radio" name="size"><span>Individual</span><span>$120</span></label>
    <label class="size-option"><input type="radio" name="size"><span>6 p.</span><span>$580</span></label>
    <!-- ... -->
  </div>
</fieldset>
```

- Border 1px en estado normal.
- Border 2px `--ink` (blush) o `--bronce-300` (cocoa) en checked.
- Min-height 64px (touch generoso).

### 5.6 Hero — modo COCOA

El hero principal de la homepage va en cocoa, **siempre**. Es el único bloque dark above-the-fold.

```
┌─────────────────────────────────────┐
│                                     │
│         L U X E                     │  ← Bodoni 500 roman caps
│  · CHEESECAKE ARTESANAL ·           │  ← Manrope caps bronce
│         ─────                       │  ← Hairline bronce
│                                     │
│   El primer mordisco                │  ← Bodoni italic display
│   lo cambia todo.                   │
│                                     │
│   Hechos a mano en Guadalajara.     │  ← Body subhead
│   Edición limitada cada semana.     │
│                                     │
│   [Ver catálogo]  [Eventos]         │
└─────────────────────────────────────┘
```

### 5.7 Hero — modo BLUSH

Para landings secundarios (about, proceso, catálogo categoría):

```
┌─────────────────────────────────────┐
│  · NUEVA TEMPORADA ·                │  ← Caption caps bronce
│                                     │
│   Un objeto                         │  ← Bodoni italic display ink
│   de deseo.                         │
│                                     │
│   ───────                           │
│                                     │
│   [Ver la edición →]                │
└─────────────────────────────────────┘
```

### 5.8 Eventos CTA — modo WINE

Camino B2B nunca comparte CTA con B2C. Surface wine es exclusiva de eventos.

```html
<aside class="event-cta surface-wine">
  <p class="event-cta__eyebrow">· EVENTOS · BODAS · CORPORATIVOS ·</p>
  <h3 class="event-cta__head"><em>Mesas de postres a tu medida.</em></h3>
  <p class="event-cta__body">Selecciones únicas desde 40 personas. Respuesta en 24h.</p>
  <a class="btn btn--bronze" href="/eventos">Solicitar cotización</a>
</aside>
```

### 5.9 Navigation

- Sticky top, fondo `rgba(242, 221, 208, 0.85)` (blush) con `backdrop-filter: blur(16px)`.
- Logo izquierda: Bodoni 500 roman "LUXE" + caption "· CHEESECAKE ·" debajo en mini.
- Links centro: Manrope 500 tracked caps.
- CTA derecha: bronze primary "Pedir".
- En modo dark hero: la nav se vuelve transparente con texto cream.

### 5.10 Accordion (FAQ)

Native `<details>/<summary>` siempre.

```html
<details class="accordion">
  <summary>¿Cuánto dura un cheesecake en refrigeración?</summary>
  <div class="accordion__body">
    <p>Hasta 5 días en refrigerador, sellado.</p>
  </div>
</details>
```

- Marker custom: signo `+` que rota 45° a `×` en `[open]`.
- Color: `--bronce-500`.
- Hairline divider bottom.

---

## 6. ICONOGRAFÍA Y ORNAMENTOS

### 6.1 Set de íconos

- **Lucide** (stroke 1.5px) o **Phosphor Light**.
- Tamaño base 20px, 24px en navegación.
- Color tonal con el texto, nunca acento independiente.

### 6.2 Dot ornament (signature)

El patrón `·` antes y después de captions es el ornamento firma del logo. Se reproduce en cualquier label:

```html
<span class="caption-dotted">· Cheesecake artesanal ·</span>
```

```css
.caption-dotted {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--bronce-500);
}
```

### 6.3 Hairline + lockup divisor

Tres patrones de divisor según contexto:

```html
<!-- Hairline simple -->
<hr class="rule">

<!-- Hairline con dot centrado (matches logo bottom rule) -->
<hr class="rule rule--dot">

<!-- Lockup completo (logo recreation) -->
<div class="rule-lockup">
  <span class="rule-lockup__line"></span>
  <span class="rule-lockup__mark">·</span>
  <span class="rule-lockup__line"></span>
</div>
```

---

## 7. VOZ Y COPY

### 7.1 Reglas generales

- **Susurrar, nunca gritar**. Frases cortas, mucho aire.
- **Italicizar la idea clave** en headlines (Bodoni italic).
- **Cero adjetivos vacíos**: prohibido "delicioso", "rico", "increíble", "el mejor".
- **Adjetivos sensoriales**: untuoso, sedoso, denso, fundente, templado, cremoso, tostado, ahumado, balanceado, infusionado.
- **Verbos físicos**: templar, fundir, reposar, infusionar, tostar.
- **Cifras siempre exactas**: "48 horas de reposo", "6 personas", "5 días".

### 7.2 Modulación por modo

- **Modo blush**: tono romántico, íntimo, artesanal. "Una pieza hecha a mano para ti."
- **Modo cocoa/wine**: tono editorial, sensual, dramático. "El primer mordisco lo cambia todo."

La voz es la misma; el tono se modula por surface.

### 7.3 Headlines — patrones

| Patrón | Ejemplo |
|---|---|
| Sentencia con italic final | `El primer mordisco *lo cambia todo.*` |
| Promesa contenida | `Lo único que pedirás dos veces.` |
| Sustantivo + adjetivo sensorial | `Densidad untuosa. Equilibrio templado.` |
| Numérico + objeto | `48 horas de reposo. Una sola pieza.` |
| Romántico íntimo | `Un objeto de deseo, hecho a mano.` |

### 7.4 CTAs por contexto

| Contexto | CTA |
|---|---|
| Producto individual B2C | `Pedir ahora →` |
| Catálogo | `Ver el catálogo →` |
| Eventos B2B | `Solicitar cotización` |
| Newsletter | `Suscribirme` |
| FAQ | `Conocer más` |

### 7.5 Microcopy

- Confirmación: `Tu pieza está en camino.`
- Carrito vacío: `Aún no eliges tu pieza.`
- Loading: `Templando…` / `Reposando…`
- Error: `Algo no salió. ¿Lo intentamos de nuevo?`

---

## 8. CÓDIGO — CONVENCIONES OBLIGATORIAS

### Reglas duras

- ✅ CSS variables siempre.
- ✅ Mobile-first 390px → 768px → 1280px.
- ✅ `font-size: 16px` mínimo en `<input>`/`<textarea>`.
- ✅ Touch targets ≥ 44×44px.
- ✅ `padding-bottom: var(--safe-bottom)` en sticky bottom bars.
- ✅ `<details>` / `<summary>` nativos.
- ✅ JS en IIFE: `(() => { ... })()`.
- ✅ `aria-label` en íconos sin texto.
- ✅ `loading="lazy"` en imágenes below-the-fold.
- ❌ Sin librerías JS externas para contenido visible.
- ❌ Sin frameworks de UI (Tailwind admitido, opcional).
- ❌ Sin `opacity: 0` por default esperando animación.
- ❌ Sin `box-shadow` con colores grises (siempre tinte ink).
- ❌ Sin mezclar surfaces blush y cocoa por encima del fold.

---

## 9. ASSETS — FOTOGRAFÍA

### 9.1 Dirección por modo

**Modo blush (catálogo, default):**
- Luz natural difusa, mañana, 5500K.
- Fondos blush o cream cálido.
- Producto con whitespace generoso.
- Props: cake server plateado, paño lino, flor seca individual.
- Composición simétrica o centrada.

**Modo cocoa (hero, signature, eventos):**
- Luz lateral cálida candlelight, 3200K.
- Fondos negros o wine profundo.
- Macro close-up: textura del relleno, gota de caramelo cayendo.
- Composición asimétrica, sombras largas.

### 9.2 Formato

- Producto catálogo: ratio **4:5** (1080×1350).
- Hero web: ratio **16:9** o **3:2**.
- Stories/social: ratio **9:16**.
- WebP, fallback JPG, calidad 85.

### 9.3 Placeholder CSS (mientras no haya foto real)

**Blush:**
```css
.photo-placeholder--blush {
  background:
    radial-gradient(ellipse at 35% 35%, var(--rosa-50) 0%, transparent 55%),
    radial-gradient(ellipse at 65% 65%, var(--bronce-300) 0%, transparent 50%),
    var(--rosa-200);
  aspect-ratio: 4/5;
}
```

**Cocoa:**
```css
.photo-placeholder--cocoa {
  background:
    radial-gradient(ellipse at 40% 40%, var(--bronce-300) 0%, transparent 55%),
    radial-gradient(ellipse at 60% 60%, var(--rosa-200) 0%, transparent 60%),
    var(--ink-800);
  aspect-ratio: 4/5;
}
```

---

## 10. CHECKLIST PRE-PRODUCCIÓN

Antes de publicar cualquier vista:

- [ ] `tokens.css` importado primero.
- [ ] Una vista = un modo dominante above the fold (blush O cocoa, no ambos).
- [ ] Wordmark LUXE reproduce el lockup completo (palabra + caption + hairline).
- [ ] Bronce signature presente en CTA o accent visible.
- [ ] Mobile-first verificado en 390×844.
- [ ] Inputs con `font-size: 16px`.
- [ ] Touch targets ≥ 44px.
- [ ] Acordeones con `<details>/<summary>`.
- [ ] Headlines en Bodoni italic con palabra clave italicizada.
- [ ] Tasting notes con patrón `Notas de…, base de…, terminado con…`.
- [ ] Precios con `--font-mono` + tabular-nums.
- [ ] Caminos B2C y eventos visualmente distintos (modo cocoa/wine para eventos).
- [ ] Cero "delicioso", "rico", "increíble", "el mejor".
- [ ] Cero rosa pastel (#FFC0CB ish), lila, fucsia.
- [ ] `aria-label` en íconos.
- [ ] `loading="lazy"` below-fold.
- [ ] `safe-area-inset` en headers/footers sticky.

---

*Sistema de diseño v2.0 · Carlos Calderón · 2026*
