export const deleteEventOccurances = (ical, events) => {
    let lines = ical.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('DESCRIPTION:') && !events.some(event => lines[i].includes(event))) {
            // delete event block
            lines.splice(i-7, 9);
            i-=9;
        }
    }
    lines = lines.join('\n');
    return lines;
}

export const getEventsTitles = (ical) => {
    let lines = ical.split('\n');
    lines = lines.filter(line => {return line.startsWith('DESCRIPTION:')});
    lines = lines.filter((line, index) => {return lines.indexOf(line) == index});
    lines = lines.map(line => line.replace('DESCRIPTION:', ''));
    return lines;
}