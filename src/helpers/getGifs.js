export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VAQR4weX7fRY4TG8zbQLcK9n8Ie8lrF3&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}