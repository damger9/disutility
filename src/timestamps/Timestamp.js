const TimestampType = require('./TimestampTypes') // Good idea to name these types and the timestamp argument the same thing... 

/**
 * Function to create a new discord timestamp to use.
 * @param {TimestampType} timestampType 
 * @param {number} date Date in unix epoch to use for the timestamp, defaults to current time 
 * @returns {string} Timestamp to use.
 */
function Timestamp(timestampType, date) {      
    let d = date

    if (!timestampType) throw new Error("No typestampType supplied")
    if (!d) {
        d = Math.round(new Date().getTime() / 1000)
    }

    switch(timestampType) {
        case TimestampType.RELATIVE:
            return `<t:${d}:R>`

        case TimestampType.SHORT_TIME:
            return `<t:${d}:t>`

        case TimestampType.LONG_TIME:
            return `<t:${d}:T>`

        case TimestampType.SHORT_DATE:
            return `<t:${d}:d>`   
                    
        case TimestampType.LONG_DATE:
            return `<t:${d}:D>`

        case TimestampType.LONG_DATE_SHORT_TIME:
            return `<t:${d}:f>`

        case TimestampType.LONG_DATE_DAY:
            return `<t:${d}:F>`

        default:
            return `<t:${d}:R>`
    }
}

module.exports = Timestamp