import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const cookie = request.cookies.get('auth')?.value;
    const secret = process.env.NEXT_PUBLIC_AUTH_SCREET || '';
    if (cookie && bcrypt.compareSync(secret, cookie)) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/auth/login', request.nextUrl));
}

export const config = {
    matcher: ['/keystatic/:path*'],
};
