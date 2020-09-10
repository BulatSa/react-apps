export default class SwapiService {
  _apiBase = "https://swapi.dev/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    const id = this.extractId(planet);
    return {
      id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  _transformPerson(person) {
    const id = this.extractId(person);
    return {
      id,
      name: person.name,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      gender: person.gender,
    };
  }

  _transformStarship(starship) {
    const id = this.extractId(starship);
    return {
      id,
      name: starship.name,
      model: starship.model,
      starshipClass: starship.starship_class,
      manufacturer: starship.manufacturer,
      length: starship.length,
      crew: starship.crew,
      costInCredits: starship.cost_in_credits,
    };
  }
}
