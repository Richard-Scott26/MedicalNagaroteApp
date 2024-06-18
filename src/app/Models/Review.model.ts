export class Review{
    id: number = 0;
    title: string = '';
    category: string = '';
    description: string = '';
    context: string = '';
    img: string = '';
    references: string = '';
}

export class Data {
    Review: Review[] = [];
}