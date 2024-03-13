import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    if (req.headers.get("Content-Type") !== "application/json") {
        return new NextResponse("must be json", { status: 400 });
    }
    const slug = "pageviews:cv:mukesh";
    const ip = req.headers.get('X-Forwarded-For');
    if (ip) {
        // Hash the IP in order to not store it directly in your db.
        const buf = await crypto.subtle.digest(
            "SHA-256",
            new TextEncoder().encode(ip),
        );
        const hash = Array.from(new Uint8Array(buf))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
    }

    return new NextResponse(null, { status: 202 });
}
