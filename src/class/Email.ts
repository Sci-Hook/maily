import {Transporter} from 'nodemailer';
import { set_datas } from '../function/set-data';
import { set_html_texts } from '../function/set-html-texts';
import { dataset } from '../types/data-set';
import {readFileSync} from 'fs';

export class Email {

    transporter:Transporter;
    subject:object;
    text:object;
    html_texts:object;
    html:string;
    from:string;

    constructor(name:string,from:string,transporter:Transporter) {

        this.from = from;
        this.transporter = transporter;

        var subject = readFileSync(`email/${name}/subject.json`);
        this.subject = JSON.parse(`${subject}`);

        var text = readFileSync(`email/${name}/text.json`);
        this.text = JSON.parse(`${text}`);

        var html_texts = readFileSync(`email/${name}/html-texts.json`);
        this.html_texts = JSON.parse(`${html_texts}`);

        var html = readFileSync(`email/${name}/index.html`);
        this.html = `${html}`;
        
    }

    async send(email:string,lang:string,dataset?:dataset){

        var html;
        var subject = this.subject[lang];
        var text = this.subject[lang];
        var html_texts = this.html_texts[lang];

        if (this.html) { html = await set_html_texts(this.html,html_texts);       }

        if (dataset) {
            subject = await set_datas(subject,dataset);
            text = await set_datas(text,dataset);
            html = await set_datas(html,dataset);
        }

        this.transporter.sendMail({
            from:this.from,
            to: email,
            subject,text,html 
        });

    }

}