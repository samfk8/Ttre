export const formatTimeRemaining = (eventDate: string): string => {
  const now = new Date();
  const event = new Date(eventDate);
  const diffMs = event.getTime() - now.getTime();
  
  if (diffMs < 0) return 'Started';
  
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
  if (diffHours >= 24) {
    const days = Math.floor(diffHours / 24);
    const hours = diffHours % 24;
    return `${days}d ${hours}h`;
  }
  
  return `${diffHours}h ${diffMinutes}m`;
};

export const formatDateTime = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

export const formatOdds = (odds: number): string => {
  // Convert decimal odds to American odds
  if (odds <= 1.0) {
    return 'N/A'; // Invalid odds
  }
  
  if (odds >= 2.0) {
    return `+${Math.round((odds - 1) * 100)}`;
  } else {
    return `-${Math.round(100 / (odds - 1))}`;
  }
};

export const formatEV = (ev: number): string => {
  return `${ev > 0 ? '+' : ''}${ev.toFixed(1)}%`;
};
