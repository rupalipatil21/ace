// /app/api/contact/route.ts

import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = "mongodb://localhost:27017"; // ✅ Corrected Mongo URI
const client = new MongoClient(uri);

type ContactForm = {
  name: string;
  email: string;
  phonenumber?: string;
  message: string;
}

type VolunteerForm = {
  message: string;
}

type FormData = VolunteerForm | ContactForm;

export async function POST(req: Request) {
  try {
    const {data, collectionName}: { data: FormData; collectionName: string } = await req.json();

    await client.connect();
    const db = client.db("acedb");

    const collection = db.collection(collectionName);

    await collection.insertOne({
        ...data,
        submittedAt: new Date(), 
    });

    return NextResponse.json({ message: "Saved successfully" }, { status: 200 });
  } catch (error) {
    console.error("[ERROR] Failed to save submission:", error);
    return NextResponse.json({ error: "Save failed" }, { status: 500 });
  } finally {
    await client.close();
  }
}
