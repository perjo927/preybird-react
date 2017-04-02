import PlayDataService from './PlayDataService';
import * as mockData from './MockPlayData';

describe('As a developer I want my PlayDataService extract and map Play data', () => {
    const service = new PlayDataService("foo");

    describe('Given that there is a method for extracting data', () => {
        describe('When I call it with the desired data', () => {
            const mappedData = service.extractPlayData(mockData.PlayData);
            
            test('Then the GridView must not crash', () => {
                expect(mappedData[0].title).toEqual('Grey\'s Anatomy');
            });
        });
    });
});