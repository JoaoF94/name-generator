import {INameMetadata} from "../../domain/NameMetadata";
import {Gender} from "../../enums/gender";

const filterByGender = (namesMetadata: INameMetadata[], gender: Gender): INameMetadata[] => {
  return namesMetadata.filter(meta => meta.gender === gender);
}

export { filterByGender };
