import { getData } from '../api/Api'

export const getTrainingById = (id) => {
    return getData()
        .then(data => {
            return data.training_classes.find(training => training.id == id)
        });
}