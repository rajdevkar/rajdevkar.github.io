import { Resend } from 'resend';

const resend = new Resend("re_QG7BYyDk_3YkNyQrKjMCAMqNBW4ByZu5F");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    const { data, error } = await resend.emails.send({
      from: 'no-reply@rajdevkar.dev',
      to: ['rajdevkar.6@gmail.com'],
      subject: 'From Website',
      text: message,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}