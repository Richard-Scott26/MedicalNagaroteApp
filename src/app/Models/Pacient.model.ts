import { ParentAntecedents } from "./ParentsAntecedents.model";
import { Person } from "./Person.model";
import { PersonalAntecedents } from "./PersonalAntecedents.model";

export class Pacient{
    person: Person[] = [];
    heigth: string = '';
    weigth: string = '';
    parentsAntecedents: ParentAntecedents[] = [];
    personalAntecedents: PersonalAntecedents[] = [];
}