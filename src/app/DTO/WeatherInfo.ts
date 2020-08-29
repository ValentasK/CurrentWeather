import { Request } from "./Request";
import { Current } from "./Current";
import { Location } from "./Location";

export interface WeatherInfo {
    request: Request;
    location: Location;
    current: Current;
}


