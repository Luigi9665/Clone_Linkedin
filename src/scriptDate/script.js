export const timeSince = (dateString) => {
  const now = new Date();
  const created = new Date(dateString);
  const diffInSeconds = Math.floor((now - created) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds !== 1 ? "i" : "o"} fa`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const remainingSeconds = diffInSeconds % 60;

  if (diffInMinutes < 60) {
    if (remainingSeconds === 0) {
      return `${diffInMinutes} minut${diffInMinutes !== 1 ? "i" : "o"} fa`;
    }
    return `${diffInMinutes} minut${diffInMinutes !== 1 ? "i" : "o"} e ${remainingSeconds} second${remainingSeconds !== 1 ? "i" : "o"} fa`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  const remainingMinutes = diffInMinutes % 60;

  if (diffInHours < 24) {
    if (remainingMinutes === 0) {
      return `${diffInHours} or${diffInHours !== 1 ? "e" : "a"} fa`;
    }
    return `${diffInHours} or${diffInHours !== 1 ? "e" : "a"} e ${remainingMinutes} minut${remainingMinutes !== 1 ? "i" : "o"} fa`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} giorn${diffInDays !== 1 ? "i" : "o"} fa`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} settiman${diffInWeeks !== 1 ? "e" : "a"} fa`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} mes${diffInMonths !== 1 ? "i" : "e"} fa`;
  }

  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears} anno${diffInYears !== 1 ? "i" : ""} fa`;
};
