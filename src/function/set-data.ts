import 'syncforeachloop';
import {dataset} from '../types/data-set';

export function set_datas(text:string,dataset:dataset) {

    var newtext = text;
    var keys = Object.keys(dataset);

    return new Promise<string>((resolve, reject) => {
        keys.syncForEach((key,next) => {
            newtext = newtext.replace(`#{${key}}`,dataset[key]);
            next();
        },() => {
            resolve(newtext);
        });
    });

}