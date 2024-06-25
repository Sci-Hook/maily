import * as cheerio from 'cheerio';
import 'syncforeachloop';

export function set_html_texts(html:string,texts:{[key:string]:string}) {

    var keys = Object.keys(texts);
    var $ = cheerio.load(html);

    return new Promise<string>((resolve, reject) => {
        keys.syncForEach(function (key,next) {
            $(`[text="${key}"]`).html(texts[key]);
            $(`[text="${key}"]`).removeAttr('text');
            next();
        },() => {
            resolve($.html());
        }) 
    });
    
}