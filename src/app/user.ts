export class User {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public secretQuestion: string,
        public phoneNumber? : string    // "?" marks optional paramter
    ) { }
}
