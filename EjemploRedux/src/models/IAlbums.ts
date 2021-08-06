import IPhoto from "./IPhoto";

export default interface IAlbums{
    userId: number;
    id:     number;
    title:  string;
    thumbnailUrl?: string;
    url?:  string;
}