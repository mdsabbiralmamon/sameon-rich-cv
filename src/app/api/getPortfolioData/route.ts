import client from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await client.connect();
        const portfolioDataCollection = client.db("sameonCV").collection("portfolioData");
        const portfolioData = await portfolioDataCollection.find({}).toArray();
        
        return NextResponse.json({
            portfolioData: portfolioData,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            ServerStatus: "Error",
            message: error,
        }, { status: 500 });
    }
}
