import {Gender} from "../enums/gender";

interface INameMetadata {
  yearOfBirth: number;
  gender: Gender;
  ethnicity: string;
  name: string;
  numberOfBabies: number;
  rank: number;
}

class NameMetadata implements INameMetadata {
  yearOfBirth: number;
  gender: Gender;
  ethnicity: string;
  name: string;
  numberOfBabies: number;
  rank: number;

  constructor(row: string[]) {
    this.yearOfBirth = Number(row[0]);
    this.gender = row[1] as Gender;
    this.ethnicity = row[2];
    this.name = row[3];
    this.numberOfBabies = Number(row[4]);
    this.rank = Number(row[5]);
  }
}

export { INameMetadata, NameMetadata };