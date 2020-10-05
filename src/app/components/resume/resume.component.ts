import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: "app-resume",
    templateUrl: "./resume.component.html",
    styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent implements OnInit {

    resumeRequestForm: FormGroup;
    loading: boolean;
    submitted: boolean;
    subText: string;

    checkingBlocked: boolean;
    blocked: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient
    ) {
        this.loading = false;
        this.submitted = false;
        this.subText = "Submit";

        this.checkingBlocked = true;
        this.blocked = false;

        this.resumeRequestForm = formBuilder.group({
            email: ["", Validators.compose([Validators.required, Validators.email, Validators.maxLength(75)])],
        });
    }

    async ngOnInit() {
        try {
            await this.http.get("https://api.simplyalec.com/resume/check").toPromise();
        } catch (e) {
            this.checkingBlocked = false;
            this.blocked = true;
            console.error(e);
        }
    }

    public onSubmit = async () => {
        if (this.resumeRequestForm.errors) {
            return;
        }

        this.submitted = true;
        this.loading = true;
        this.subText = "Loading...";

        try {
            await this.http.post("https://api.simplyalec.com/resume/send", {
                email: this.resumeRequestForm.controls.email.value
            }).toPromise();
            this.subText = "Sent";
            this.loading = false;
        } catch (e) {
            this.subText = "Error sending";
            this.loading = false;
        }
    }
}
