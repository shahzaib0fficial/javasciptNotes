// object destucturing
const band = {
    bandName : "led zeppelin",
    famousSong : "stairway to heaven",
    start : 1968,
    end : 1980,
    anotherFamousSong : "Kashmir",
};
// const band_name = band.bandName;
// const famous_song = band.famousSong;
// console.log(band_name,famous_song);

const {bandName , famousSong , start:From , ...restprops} = band;
console.log(bandName, famousSong , From , restprops);
