import {INameMetadata, RandomName} from "../../domain";

interface NameWithCumulativeWeight {
  name: string;
  numberOfBabies: number;
  weight: number;
}

/**
 * @param namesMetadata Array of names metadata
 * Returns a map where the key is a unique name, and the value is the total number of babies for that name,
 * independent of other params, like year or ethnicity
 */
const getUniqueNamesMap = (namesMetadata: INameMetadata[]): Map<string, number>  => {
  return namesMetadata.reduce((acc, curr) => {
    const name = curr.name.toLowerCase();
    if (acc.has(name)) {
      acc.set(name, acc.get(name) + curr.numberOfBabies);
    } else {
      acc.set(name, curr.numberOfBabies);
    }
    return acc;
  }, new Map());
};

/**
 * @param namesMap Map<string,number> with key as the name and the value as the total number of babies for that name
 * Returns an array of NameWithCumulativeWeight objects, where each name will be associated with a given weight
 * when calculating the randomness of the function
 */
const getNamesWithCumulativeWeights = (namesMap: Map<string, number>): NameWithCumulativeWeight[] => {
  const namesWithCumulativeWeight: NameWithCumulativeWeight[] = [];
  let i = 0;

  namesMap.forEach((numberOfBabies, name) => {
    if (i === 0) {
      namesWithCumulativeWeight.push({
        name,
        numberOfBabies,
        weight: numberOfBabies
      });
    } else {
      namesWithCumulativeWeight.push({
        name,
        numberOfBabies,
        weight: numberOfBabies + namesWithCumulativeWeight[i-1].weight
      })
    }
    i++;
  });

  return namesWithCumulativeWeight;
};

const pickNameWithWeightStrategy = (namesMetadata: INameMetadata[]): RandomName => {
  const namesMap = getUniqueNamesMap(namesMetadata);
  const namesWithCumulativeWeight = getNamesWithCumulativeWeights(namesMap);

  const maxCumulativeWeight: number = namesWithCumulativeWeight[namesWithCumulativeWeight.length - 1].weight;
  const random = maxCumulativeWeight * Math.random();
  const chosenName = namesWithCumulativeWeight.find(({weight}) => weight >= random);

  return new RandomName(
    chosenName.name,
    (chosenName.numberOfBabies / maxCumulativeWeight) * 100
  );
};

export { pickNameWithWeightStrategy };