import { useEffect, useState } from "react"
import { getData } from "../api/Api";

export const useCyclingData = (param) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(param) {
            getData()
                .then(res => {
                    setData(res[param]);
                    setLoading(false);
                });
        }
    }, [param]);

    return {
        data,
        loading,
    };
};