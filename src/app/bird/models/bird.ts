export class Bird {

    id!: number;
    name!: string;
    description!: string;
    picture!: string;
    locations!: Array<string>
    created!: Date;

    constructor(
        name: string = "Entrer un nom",
        descriptiion: string = "Ajouter une description",
        picture: string = "",
        locations: string[] = ["Europe"],
        created: Date = new Date()
    ){
        this.name = name;
        this.description = descriptiion;
        this.picture = picture;
        this.locations = locations;
        this.created = created;
    }
}