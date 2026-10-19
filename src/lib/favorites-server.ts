import "server-only"
import { createPrismaClient } from "@/lib/prisma";

export async function getFavoriteEventIds(): Promise<Set<string>>{
    const prisma = createPrismaClient();
    const favs = await prisma.favorite.findMany({ select: {eventId: true}});
    return new Set(favs.map((fav) => fav.eventId));
}