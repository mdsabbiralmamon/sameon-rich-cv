import { useState, useEffect } from 'react';

export interface Timestamps {
    start: number;
  }
  
  export interface Activity {
    created_at: number;
    id: string;
    name: string;
    timestamps: Timestamps;
  }
  
  export interface DiscordStatus {
    discord_status: 'dnd' | 'idle' | 'offline' | 'online';
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    active_on_discord_web: boolean;
    activities: Activity[];
  }
  
export default function useActivity() {
    const [discordStatus, setDiscordStatus] = useState<DiscordStatus | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://api.lanyard.rest/v1/users/634075473462296595`);
                if (!response.ok) {
                    throw new Error(`Error fetching Discord status: ${response.statusText}`);
                }
                const data = await response.json();
                setDiscordStatus(data.data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { discordStatus, isLoading, error };
}
