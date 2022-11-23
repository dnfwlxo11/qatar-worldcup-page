import * as dateFns from 'date-fns';

function dateFormat(date, format) {
    return dateFns.format(date, format);
};

const dateUtils = {
    dateFormat
}

export default dateUtils;