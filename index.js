const formatDate = (timeInSeconds) => {
    
    const hours = Math.floor(timeInSeconds/ 3600);
    const minuts = Math.floor((timeInSeconds % 3600) / 60);
    const second = Math.floor((timeInSeconds % 3600) % 60);
    
   if (typeof timeInSeconds !== "undefined") {
        if (timeInSeconds < 60) {
            return `${second}s`;
        }

        if (timeInSeconds >= 60 && timeInSeconds < (3600)) {
            if ( second != 0) {
                return `${minuts}m ${second}s`;
            } else {
                return `${minuts}m`;
            }
        }

        if (timeInSeconds >= (3600)) {
            if  ( minuts === 0 && second === 0) {
                return `${hours}h`;
            } else if ( second === 0) {
                return `${hours}h ${minuts}m`;
            } else if ( minuts === 0) {
                return `${hours}h ${second}s`;
            } else {
                return `${hours}h ${minuts}m ${second}s`;
            }
        }
   } else {return '0s';}
}

module.exports = formatDate;
