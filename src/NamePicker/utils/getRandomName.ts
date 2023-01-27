import {Gender} from "../../enums/gender";
import {getNamesStats} from "../../api/getNamesStats";
import {INameMetadata, NameMetadata} from "../../domain/NameMetadata";
import {filterByGender} from "./filterByGender";
import {pickNameWithWeightStrategy} from "./pickNameWithWeightStrategy";
import {RandomName} from "../../domain";

const getRandomName = (gender: Gender): RandomName => {
  const namesStats: string[][] = getNamesStats();
  const namesMetadataByGender: INameMetadata[] = filterByGender(
    namesStats.map(nameInfo => new NameMetadata(nameInfo)),
    gender
  );

  return pickNameWithWeightStrategy(namesMetadataByGender);
};

export { getRandomName };