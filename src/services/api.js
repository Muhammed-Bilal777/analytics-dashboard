// For future real API integration

export async function fetchMarketingData() {
  const response = await fetch("/mock-data.json");
  return response.json();
}
