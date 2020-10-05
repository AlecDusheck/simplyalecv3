import {Component} from "@angular/core";

import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
    // Import FontAwesome icons
    linkedIn = faLinkedin;
    twitter = faTwitter;
}
