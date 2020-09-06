export class Country{
    constructor(data){
        this.name = data.country;
        this.code = data.countryInfo.iso3;
        this.cases = data.cases;
        this.deaths = data.deaths;
        this.recovered = data.recovered;
        this.todayCases = data.todayCases;
        this.todayDeaths = data.todayDeaths;
        this.todayRecovered = data.todayRecovered;
    }
}