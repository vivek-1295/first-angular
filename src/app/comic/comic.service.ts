export class ComicService {
    getMarvelComic(): string[]
    {
        return ["Iron Man", "Hulk","Spider-Man","Loki", "Doctor strange"];
    }

    getDCComic(): string[]
    {
        return ["BatMan","Flash", "Arrow", "SuperMan", "Wonder-Women"];
    }

    getTestComic(): string[]
    {
        return ["Test1", "Test2", "Test3", "Test4", "Test5"];
    }
}