import models from '../../../models';
import axios from 'axios';

export default function createDisease(req, res, next) {
    axios.get('https://disease-info-api.herokuapp.com/diseases').then(res => {
        res.data.diseases.forEach(disease => {
            // models.Disease.create({
            //     description: disease.facts[0],
            //     name: disease.name,
            //     symptoms: disease.symptoms,
            //     prevention:disease.prevention
            // });
        })
    });
}
