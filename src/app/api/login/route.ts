import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { username, password } = await request.json();

    if (
        username === process.env.NEXT_PUBLIC_USERNAME &&
        password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
        const secret = process.env.NEXT_PUBLIC_AUTH_SCREET || '';
        const hashedSecret = bcrypt.hashSync(secret, 10);
        (await cookies()).set('auth', hashedSecret, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60, // 1 saat
            path: '/',
        });

        return NextResponse.json(
            { success: true, message: 'Login successful!' },
            { status: 200 }
        );
    }
    return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
    );
}
