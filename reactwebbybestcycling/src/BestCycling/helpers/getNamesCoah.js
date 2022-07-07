import { useEffect } from "react";

import { getCoahById } from "./getCoahById";

export const getNamesCoah = (instructor_id, setCoachName) => {

    useEffect(() => {
        getCoahById(instructor_id)
            .then(data => {
                setCoachName(data)
            });
    }, [instructor_id])

}
