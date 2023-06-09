import { environment } from "src/environments/environment";


const base_url = environment.base_url;

export class User {

    constructor(
        public name: string,
        public email: string,
        public password?: string,
        public img?: string,
        public role?: 'ADMIN_ROLE' | 'USER_ROLE',
        public google?: boolean,
        public uid?: string,
        public favouriteArtists?: string[]
        
    ) { }

    get imageUrl() {
        //upload/users/6446d9c7c42298892ff9f0d8
        if (!this.img) {
            return `${base_url}/upload/users/no-img`;
        } else if (this.img?.includes('https')) {
            return this.img;
        } else if (this.img) {
            return `${base_url}/upload/users/${this.img}`;
        } else {
            return `${base_url}/upload/users/no-img`;
        }
    }
}