const baseURL = "https://pokeapi.co/api/v2";

export const get = async (url) => {
  try {
    const response = await fetch(`${baseURL}/${url}`);
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};

export const searchBooks = async (search) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=30`
    );
    return await response.json();
  } catch (error) {
    console.log("Error", error);
  }
};
