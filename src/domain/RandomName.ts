interface IRandomName {
  name: string;
  probability: number;
}

class RandomName implements IRandomName {
  name: string;
  probability: number;

  constructor(name: string, probability: number) {
    this.name = name;
    this.probability = probability;
  }
}

export { IRandomName, RandomName };
