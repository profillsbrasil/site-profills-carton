// templateEmail-improved.ts
// Drop-in replacement for your current templateEmail.tsx with better email UX & broad client compatibility.
// - Uses table-based layout (Outlook-friendly)
// - Bulletproof CTA button (works in Outlook via VML)
// - Mobile responsive with safe media queries
// - Dark-mode tweaks (Apple Mail / some clients)
// - Safe HTML escaping for user-provided fields
// - Optional CTA, address line, and UTM on links

import { type QuoteFormData } from "./formEmail";

export type EmailItemData = {
  title: string;
  qty?: number;
  notes?: string;
};

export type RenderOptions = {
  logoCid?: string; // ex.: 'logo'
  brandName?: string; // ex.: 'Pro-Fills Cartons'
  primary?: string; // ex.: '#2FA34F'
  text?: string; // ex.: '#1D2939'
  mutedText?: string; // ex.: '#475467'
  border?: string; // ex.: '#EAECF0'
  surface?: string; // ex.: '#FFFFFF'
  background?: string; // ex.: '#F9FAFB'
  ctaUrl?: string; // ex.: link pro CRM
  ctaLabel?: string; // ex.: 'Ver no CRM'
  supportEmail?: string; // ex.: 'site-profills-carton@gmail.com'
  siteUrl?: string; // ex.: 'https://profills.com'
  addressLine?: string; // ex.: endereço/rodapé
  addUtm?: boolean; // adiciona utm_source/medium/campaign no CTA
};

const escapeHtml = (input?: string | number | null): string => {
  if (input === undefined || input === null) return "—";
  const str = String(input);
  return (
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .trim() || "—"
  );
};

const telToWhatsapp = (phone: string | undefined): string => {
  if (!phone) return "";
  const clean = phone.replace(/\D/g, "");
  const withCountry =
    clean.length === 11
      ? `55${clean}`
      : clean.startsWith("55")
        ? clean
        : `55${clean}`;
  return `https://wa.me/${withCountry}`;
};

const withUtm = (url: string, enable?: boolean): string => {
  if (!enable) return url;
  try {
    const u = new URL(url);
    if (!u.searchParams.get("utm_source"))
      u.searchParams.set("utm_source", "crm-email");
    if (!u.searchParams.get("utm_medium"))
      u.searchParams.set("utm_medium", "transactional");
    if (!u.searchParams.get("utm_campaign"))
      u.searchParams.set("utm_campaign", "quote");
    return u.toString();
  } catch {
    return url; // caso não seja URL válida
  }
};

export function renderEmailHTML(
  data: QuoteFormData,
  opt: RenderOptions = {},
): string {
  const now = new Date();
  const dateBR = now.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const {
    logoCid = "logo",
    brandName = "Profills Carton",
    primary = "#2FA34F",
    text = "#1F2937",
    mutedText = "#6B7280",
    border = "#E5E7EB",
    surface = "#FFFFFF",
    background = "#F9FAFB",
    supportEmail = "site.profills.carton@gmail.com",
    siteUrl = "https://profills-carton.com",
    ctaUrl,
    ctaLabel = "Ver no CRM",
    addressLine,
    addUtm = true,
  } = opt;

  const previewText = `Nova cotação: ${escapeHtml(data.machineTitle)} - ${escapeHtml(data.name)}`;

  const buttonHref = ctaUrl ? withUtm(ctaUrl, addUtm) : "";

  // Styles centralizados para consistência
  const baseFont =
    "font-family: Inter, -apple-system, Segoe UI, Roboto, Arial, sans-serif;";
  const containerShadow = "box-shadow:0 4px 24px rgba(0,0,0,0.08)";

  // Bulletproof button (inclui VML para Outlook)
  const ctaButton = ctaUrl
    ? `
      <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${escapeHtml(
        buttonHref,
      )}" style="height:44px;v-text-anchor:middle;width:200px;" arcsize="12%" stroke="f" fillcolor="${primary}">
        <w:anchorlock/>
        <center style="color:#FFFFFF;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;">${escapeHtml(
          ctaLabel,
        )}</center>
      </v:roundrect>
      <![endif]-->
      <!--[if !mso]><!-- -->
      <a href="${escapeHtml(buttonHref)}" target="_blank"
         style="${baseFont} display:inline-block;background:${primary};color:#FFFFFF;text-decoration:none;border-radius:8px;padding:12px 20px;font-weight:700;font-size:14px;">
        ${escapeHtml(ctaLabel)}
      </a>
      <!--<![endif]-->
    `
    : "";

  // 3 colunas de especificações (caem para 1 col no mobile)
  const specs = `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:12px 0;">
      <tr>
        ${[
          {
            label: "Capacidade",
            value: `${escapeHtml(data.machineCapacity)} ${escapeHtml(data.machineCapacityUnit)}`,
          },
          {
            label: "Potência",
            value: `${escapeHtml(data.machinePowerConsumption)}kW`,
          },
          {
            label: "Área",
            value: `${escapeHtml(data.machineFootprint)}`,
          },
        ]
          .map(
            (s) => `
          <td align="center" valign="top" width="33%" style="background:${surface};border:1px solid ${border};border-radius:8px;padding:12px;">
            <div style="${baseFont} color:${primary};font-weight:800;font-size:15px;line-height:1.2;">${s.value}</div>
            <div style="${baseFont} color:${mutedText};font-size:12px;line-height:1.4;margin-top:4px;">${s.label}</div>
          </td>`,
          )
          .join("")}
      </tr>
    </table>
  `;

  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(brandName)} - Nova Cotação</title>
  <style>
    /* Mobile */
    @media (max-width:640px) {
      .container { width:100% !important; max-width:100% !important; }
      .px { padding-left:16px !important; padding-right:16px !important; }
      .stack { display:block !important; width:100% !important; }
      .stack td { display:block !important; width:100% !important; }
      .center { text-align:center !important; }
    }
    /* Dark mode (parcial) */
    @media (prefers-color-scheme: dark) {
      :root { color-scheme: dark; }
    }
  </style>
</head>
<body style="margin:0;padding-top:20px;padding-bottom:20px;background:${background};${baseFont} color:${text};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${previewText}</div>

  <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="max-width:600px;">
    <tr>
      <td class="px" style="padding:0;">

        <!-- Card container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="container" style="background:${surface};border:1px solid ${border};border-radius:12px;overflow:hidden;${containerShadow}">

          <!-- Header -->
          <tr>
            <td align="center" style="padding:24px;border-bottom:1px solid ${border};">
              <img src="cid:${escapeHtml(logoCid)}" alt="${escapeHtml(brandName)}" width="140" height="140" style="display:block;max-width:100%;height:auto;border-radius:12px;margin:0 auto 12px;" />
              <h1 style="${baseFont} margin:8px 0 4px;font-size:20px;line-height:1.3;color:${text};font-weight:800;">Nova Solicitação de Cotação</h1>
              <p style="${baseFont} margin:0;color:${mutedText};font-size:14px;">Recebido em ${escapeHtml(dateBR)}</p>
              <div style="margin-top:12px;display:inline-block;background:${primary}15;color:${primary};padding:6px 12px;border-radius:999px;${baseFont} font-weight:700;font-size:12px;">Lead Qualificado</div>
            </td>
          </tr>

          <!-- Resumo -->
          <tr>
            <td class="px" style="padding:20px;border-bottom:1px solid ${border};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr class="stack">
                  <td width="50%" style="vertical-align:top;padding-right:10px;">
                    <div style="${baseFont} color:${mutedText};font-size:12px;margin-bottom:4px;">Máquina</div>
                    <div style="${baseFont} color:${primary};font-size:16px;font-weight:800;">${escapeHtml(data.machineTitle)}</div>
                    <div style="${baseFont} color:${mutedText};font-size:13px;margin-top:4px;">${escapeHtml(data.machineSubtitle)}</div>
                  </td>
                  <td width="50%" style="vertical-align:top;padding-left:10px;">
                    <div style="${baseFont} color:${mutedText};font-size:12px;margin-bottom:4px;">Contato</div>
                    <div style="${baseFont} color:${text};font-size:16px;font-weight:700;">${escapeHtml(data.name)}</div>
                    <div style="${baseFont} color:${mutedText};font-size:13px;margin-top:4px;">${escapeHtml(data.company || "Não informado")}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Especificações da máquina -->
          <tr>
            <td class="px" style="padding:20px;border-bottom:1px solid ${border};">
              <h2 style="${baseFont} font-size:16px;line-height:1.3;margin:0 0 12px;color:${text};font-weight:800;">Especificações</h2>
              ${specs}
            </td>
          </tr>

          <!-- Informações de contato -->
          <tr>
            <td class="px" style="padding:20px;border-bottom:1px solid ${border};">
              <h2 style="${baseFont} font-size:16px;line-height:1.3;margin:0 0 12px;color:${text};font-weight:800;">Informações de Contato</h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr class="stack">
                  <td width="50%" style="vertical-align:top;padding-right:10px;">
                    <div style="${baseFont} font-weight:600;color:${text};font-size:14px;">Nome</div>
                    <div style="${baseFont} color:${mutedText};font-size:14px;margin:4px 0 12px;">${escapeHtml(data.name)}</div>
                    <div style="${baseFont} font-weight:600;color:${text};font-size:14px;">Empresa</div>
                    <div style="${baseFont} color:${mutedText};font-size:14px;margin:4px 0 12px;">${escapeHtml(data.company || "Não informado")}</div>
                  </td>
                  <td width="50%" style="vertical-align:top;padding-left:10px;">
                    <div style="${baseFont} font-weight:600;color:${text};font-size:14px;">E-mail</div>
                    <div style="${baseFont} font-size:14px;margin:4px 0 12px;"><a href="mailto:${escapeHtml(
                      data.email,
                    )}" style="color:${primary};text-decoration:none;">${escapeHtml(data.email)}</a></div>
                    <div style="${baseFont} font-weight:600;color:${text};font-size:14px;">Telefone</div>
                    <div style="${baseFont} font-size:14px;margin:4px 0 12px;"><a href="${escapeHtml(
                      telToWhatsapp(data.phone),
                    )}" target="_blank" style="color:${primary};text-decoration:none;">${escapeHtml(data.phone)}</a></div>
                  </td>
                </tr>
              </table>
              ${ctaButton ? `<div class="center" style="margin-top:8px;">${ctaButton}</div>` : ""}
            </td>
          </tr>

          ${
            data.message
              ? `
          <!-- Mensagem adicional -->
          <tr>
            <td class="px" style="padding:20px;border-bottom:1px solid ${border};">
              <h2 style="${baseFont} font-size:16px;line-height:1.3;margin:0 0 8px;color:${text};font-weight:800;">Mensagem do Cliente</h2>
              <div style="${baseFont} color:${mutedText};font-size:14px;line-height:1.6;background:${background};border:1px solid ${border};border-radius:8px;padding:12px;">${escapeHtml(
                data.message,
              )}</div>
            </td>
          </tr>
          `
              : ""
          }

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:20px;background:${background};">
              <div style="${baseFont} color:${text};font-weight:700;font-size:15px;margin-bottom:4px;">${escapeHtml(
                brandName,
              )}</div>
              <div style="${baseFont} color:${mutedText};font-size:13px;margin-bottom:12px;">Soluções Profissionais em Embalagens</div>
              <div style="${baseFont} color:${mutedText};font-size:12px;line-height:1.6;">
                <a href="mailto:${escapeHtml(
                  supportEmail,
                )}" style="color:${primary};text-decoration:none;">${escapeHtml(
                  supportEmail,
                )}</a><br/>
                <a href="${escapeHtml(siteUrl)}" style="color:${primary};text-decoration:none;">${escapeHtml(
                  siteUrl.replace(/^https?:\/\//, ""),
                )}</a>${addressLine ? `<br/>${escapeHtml(addressLine)}` : ""}
              </div>
              <div style="${baseFont} color:${mutedText};font-size:11px;margin-top:12px;padding-top:12px;border-top:1px solid ${border};">E-mail gerado automaticamente pelo sistema de cotações</div>
            </td>
          </tr>

        </table>
        <!-- /Card container -->

      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function renderEmailText(
  data: QuoteFormData,
  brand = "Profills Carton",
): string {
  const safe = (v?: string | number | null) =>
    v === undefined || v === null ? "—" : String(v).trim() || "—";
  const now = new Date().toLocaleString("pt-BR");

  return (
    `${brand} - Nova Cotação\n\n` +
    `MÁQUINA: ${safe(data.machineTitle)}\n` +
    `Descrição: ${safe(data.machineSubtitle)}\n` +
    `Categoria: ${safe(data.machineCategory)}\n` +
    `Capacidade: ${safe(data.machineCapacity)} ${safe(data.machineCapacityUnit)}\n` +
    `Potência: ${safe(data.machinePowerConsumption)}kW\n` +
    `Área: ${safe(data.machineFootprint)}\n\n` +
    `CLIENTE:\n` +
    `Nome: ${safe(data.name)}\n` +
    `Empresa: ${safe(data.company) || "Não informado"}\n` +
    `E-mail: ${safe(data.email)}\n` +
    `Telefone: ${safe(data.phone)}\n` +
    `${data.message ? `Mensagem: ${safe(data.message)}\n` : ""}\n` +
    `Data: ${now}\n` +
    `ID: ${safe(data.machineId)}`
  );
}
