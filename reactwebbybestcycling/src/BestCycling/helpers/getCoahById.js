import { getData } from '../api/Api'

export const getCoahById = (intructor_id) => {
    return getData()
        .then(data => {
            if (intructor_id) {
                return (data.instructors.find(intructor => intructor.id == intructor_id)).name
            }
        });
}