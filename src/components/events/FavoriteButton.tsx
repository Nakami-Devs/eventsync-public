"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { addFavorite, removeFavorite } from "@/lib/api/favorites";
import { useRouter } from "next/navigation";

interface FavoriteButtonProps {
    eventId: string;
    initialFavorite?: boolean;
}

export default function FavoriteButton({
    eventId,
    initialFavorite = false
}: FavoriteButtonProps) {
    const router = useRouter();
    const [favorite, setFavorite] = useState(initialFavorite);
    const [loading, setLoading] = useState(false);

    useEffect(() => setFavorite(initialFavorite), [initialFavorite]);

    async function handleClick(
        e: React.MouseEvent
    ) {
        e.preventDefault();
        e.stopPropagation();
        if(loading) {
            return;
        }
        setLoading(true);
        try{
        if(favorite){
            await removeFavorite(eventId);
            setFavorite(false);
        }else{
            await addFavorite(eventId);
            setFavorite(true);
        }
        router.refresh();
        } catch(err){
            console.error(err);
        } finally{
            setLoading(false);
        }
    }

    return (
        <button onClick={handleClick} className="absolute bottom-4 right-4 transition hover:scale-110 z-10">
            <Heart
                size={24}
                className={
                    favorite
                    ? "fill-red-500 text-red-500"
                    : "text-gray-400"
                }
            />
        </button>
    )
}