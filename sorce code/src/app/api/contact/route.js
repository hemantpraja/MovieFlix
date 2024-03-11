import dbConnect from "@/utils/dbConfig.js";
import Contact from "@/models/contact.js";
import { NextResponse } from "next/server";

export async function POST(request, response) {
    try {
        const body = await request.json();
        console.log("body : ",body);
        await dbConnect();
        await Contact.create(body);

        return NextResponse.json({ message: "Message sent successfully" }, { status: 201 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: "An error occurred while sending the message" }, { status: 500 });
    }
}