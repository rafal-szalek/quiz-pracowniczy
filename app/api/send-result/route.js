import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const GROUP_LABELS = {
  A: "A",
  B: "B",
  C: "C",
  D: "D",
};

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, result, diagramSvg } = body;
    console.log("diagramSvg length:", diagramSvg?.length);
    console.log("diagramSvg preview:", diagramSvg?.slice(0, 100));

    if (!name || !result) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const html = `
      <div style="font-family:Arial,sans-serif;padding:24px;background:#f8fafc;color:#0f172a">
        <h1>Nowa ankieta pracownicza</h1>

        <p><strong>Imię i nazwisko:</strong> ${escapeHtml(name)}</p>

        <h2>Dominujący typ</h2>
        <p style="font-size:24px;font-weight:bold;">
          ${GROUP_LABELS[result.winnerKey] || result.winnerLabel || "-"}
        </p>

        <h2>Punkty</h2>
        <ul>
          <li>A: ${Number(result.scores?.A || 0)}</li>
          <li>B: ${Number(result.scores?.B || 0)}</li>
          <li>C: ${Number(result.scores?.C || 0)}</li>
          <li>D: ${Number(result.scores?.D || 0)}</li>
        </ul>

        ${
          diagramSvg
            ? `<p><strong>Diagram lidera znajduje się w załączniku.</strong></p>`
            : ""
        }

        <p>Wynik został wygenerowany automatycznie.</p>
      </div>
    `;

    const attachments = diagramSvg
      ? [
          {
            filename: "diagram-lidera.svg",
            content: Buffer.from(diagramSvg, "utf-8"),
          },
        ]
      : [];

    await resend.emails.send({
      from: process.env.FROM_EMAIL || "Ankieta <onboarding@resend.dev>",
      to: [process.env.ADMIN_EMAIL],
      subject: `Nowa ankieta: ${name}`,
      html,
      attachments,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("SEND_RESULT_ERROR:", error);
    return Response.json({ error: "Could not send email" }, { status: 500 });
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
