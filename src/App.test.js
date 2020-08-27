
import { expect } from 'chai';
chai.use(chaiAsPromised);
global.expect = expect;

var OpenWeather = require('./open-weather')
describe('OpenWeatherApp', () => {
  it('should check if API KEY is provided', () => {
    const resp = OpenWeather(null, 'London,uk', 'http://api.openweathermap.org/data/2.5/weather')
    expect("Please provide API KEY").to.equal(resp);
  });

  it('should check if City is provided', () => {
    const resp = OpenWeather('DDDF26363RHFE2', null, 'http://api.openweathermap.org/data/2.5/weather')
    expect("Please provide City").to.equal(resp);
  });

  it("should validate co-ordinates", async () => {
    const coord = {
      lat: 51.51,
      lon: -0.13
    };
    const res = OpenWeather('5cf0f41ae327c25ad1c2fde64d628ee1', 'London,uk', 'http://api.openweathermap.org/data/2.5/weather')
    console.log(res.coord)
    expect(coord.lat).to.equal(res.coord.lat);
    expect(coord.lon).to.equal(res.coord.lon);
  });

  it('should return error incase of invalid uri', () => {
    const resp = OpenWeather('DDDF26363RHFE2', 'London,uk', 't-h-er.com')
    expect("TypeError: Failed to fetch").to.equal(resp.err.name);
  });
});