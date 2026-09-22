import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const COOKIE_NAME = 'trainer_auth_token';
const DEFAULT_PASSWORD = 'trainer2026';
const SECRET_KEY = process.env.TRAINER_AUTH_SECRET || 'web-creator-ai-trainer-secret-key-2026';

function generateToken(payload: string): string {
  const signature = crypto.createHmac('sha256', SECRET_KEY).update(payload).digest('hex');
  return `${Buffer.from(payload).toString('base64url')}.${signature}`;
}

function verifyToken(token: string): boolean {
  try {
    const [payloadB64, signature] = token.split('.');
    if (!payloadB64 || !signature) return false;

    const payload = Buffer.from(payloadB64, 'base64url').toString('utf8');
    const expectedSignature = crypto.createHmac('sha256', SECRET_KEY).update(payload).digest('hex');

    // Constant-time check
    const sigBuffer = Buffer.from(signature, 'hex');
    const expectedBuffer = Buffer.from(expectedSignature, 'hex');
    if (sigBuffer.length !== expectedBuffer.length) return false;
    if (!crypto.timingSafeEqual(sigBuffer, expectedBuffer)) return false;

    const data = JSON.parse(payload);
    // Token valid for 7 days
    if (Date.now() - data.timestamp > 7 * 24 * 60 * 60 * 1000) {
      return false;
    }
    return data.role === 'trainer';
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password } = body;

    const expectedPassword = process.env.TRAINER_PASSWORD || DEFAULT_PASSWORD;

    // Secure timing-safe string comparison
    const inputBuffer = Buffer.from(String(password || ''));
    const targetBuffer = Buffer.from(expectedPassword);

    let isMatch = false;
    if (inputBuffer.length === targetBuffer.length) {
      isMatch = crypto.timingSafeEqual(inputBuffer, targetBuffer);
    }

    if (!isMatch) {
      return NextResponse.json(
        { success: false, error: 'كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.' },
        { status: 401 }
      );
    }

    const token = generateToken(
      JSON.stringify({ role: 'trainer', timestamp: Date.now() })
    );

    const res = NextResponse.json({
      success: true,
      user: { role: 'trainer', name: 'Abdulhakim Kanbr' },
    });

    res.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return res;
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json({ success: false, error: 'حدث خطأ في الخادم' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  const isAuthenticated = token ? verifyToken(token) : false;

  return NextResponse.json({
    authenticated: isAuthenticated,
    user: isAuthenticated ? { role: 'trainer', name: 'Abdulhakim Kanbr' } : null,
  });
}

export async function DELETE() {
  const res = NextResponse.json({ success: true, message: 'تم تسجيل الخروج بنجاح' });
  res.cookies.set(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
  return res;
}
