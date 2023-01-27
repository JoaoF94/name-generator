const get = async (url: string): Promise<any> => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });
  return await response.json();
}

export { get };