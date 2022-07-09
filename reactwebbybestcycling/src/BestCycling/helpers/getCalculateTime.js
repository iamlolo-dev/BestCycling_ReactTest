
export const CalculateTime = (d) => {
    
        d = Number(d);
        let mDisplay = Math.floor(d % 3600 / 60);

        return mDisplay ; 
    }