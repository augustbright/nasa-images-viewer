export const selectNasaId = item => item.data[0].nasa_id;
export const selectTitle = item => item.data[0].title;
export const selectPreviewSrc = item => item.links.filter(linkInfo => linkInfo.rel === 'preview')[0].href;
export const selectPreviewDescription = item => item.data[0].description;
export const selectPreviewPhotographer = item => item.data[0].photographer;
