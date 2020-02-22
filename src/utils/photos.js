import config from '../config/api.json';

export const getRecentPhotos = async () => {
    try
    {
        let response = await fetch(`${config.API.RECENT}${config.API.KEY}${config.API.END}`);
        let result = await response.json();
        return (result);
    }
    catch
    {
        alert("There was an error with fetching photos. Try again")
    }
}

export const getPhotoLink = async (id, size) => {
    let inject = `&photo_id=${id}`
    try 
    {
        let response = await fetch(`${config.API.PHOTO_INFO}${config.API.KEY}${inject}${config.API.END}`);
        let result = await response.json();
        let photoObj = {
            id: result['photo']['id'],
            url: ( size === 'o' ? `https://farm${result['photo']['farm']}.staticflickr.com/${result['photo']['server']}` +
            `/${result['photo']['id']}_${result['photo']['secret']}.jpg`
            :
            `https://farm${result['photo']['farm']}.staticflickr.com/${result['photo']['server']}` +
            `/${result['photo']['id']}_${result['photo']['secret']}_${size}.jpg`),
        }
            return photoObj
    }
    catch
    {
        alert("There was an error with fetching photos. Try again")
    }
    
}