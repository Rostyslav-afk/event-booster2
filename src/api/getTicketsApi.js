export const getTickets = async (keyword, country, page) => {
  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Z85ENznHLZiiD4emV1glh7STR86oVhNw&keyword=${encodeURIComponent(
      keyword
    )}&countryCode=${country}&page=${page}`
  );

  const data = await response.json();
  return data;
};
