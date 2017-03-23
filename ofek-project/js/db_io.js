function writeBaseNames(base_names) {
    firebase.database().ref('base_names/').set({
        base_name_list: base_names
    });
}

function writeBase(base_name, base_properties) {
    firebase.database().ref('bases/' + base_name).set({
        properties: base_properties
    });
    readBases().then(function (bases) {
        var found = false;
        var count = 0;
        if (bases != null) {
            if (Array.isArray(bases)) {
                bases.forEach(function (base) {
                    if (base_name == base) {
                        found = true;
                    }
                });
                count = bases.length;
            }
            else {
                if (bases == base_name) {
                    found == true;
                }
                count = 1;
            }
        }
        if (!found) {
            firebase.database().ref('bases_with_data/' + count + '/').set(base_name);
        }
    });
}
function updateBase(base_name,key,value)
{
    var updates={};
    updates[key]=value;
    return firebase.database().ref('bases/' + base_name+'/properties/').update(updates);
}

function readBaseNamesPromise() {
    return firebase.database().ref('base_names/').once("value");
}

function readBasePromise(base_name) {
    return firebase.database().ref('bases/' + base_name).once("value");
}
function readBases() {
    return new Promise(function (resolve, reject) {
        firebase.database().ref('bases_with_data/').once("value").then(function (bases) {
            resolve(bases.val());
        })
    });
}
/*
writeBase("עובדה",[{
        key: "מידע כללי",
        value: 'בסיס עובדה ממוקם בבקעת עובדה בדרום. מקור שמו של הבסיס הוא מבצע "עובדה", לכיבוש דרום הנגב ואילת על-ידי חטיבות "הנגב" ו"גולני", במלחמת העצמאות. הבסיס הוא ממשיכו של בסיס "עציון" שהוקם בשנת 1972 בבקעת הירח בסיני שכלל שתי טייסות: טייסת "נשר הזהב" וטייסת "עוף החול" שהשתתפו במלחמת יום הכיפורים מהבסיס.'
    },
        {
            key: "דרכי הגעה",
            value:  "ניתן להגיע בתחבורה ציבורית - קו אוטובוס 391 מתחנה מרכזית באשר שבע" +
            "לתחנה מרכזית באר שבע ניתן להגיע בתחבורה ציבורית מכל הארץ - ברכבת או באוטובוס"

        },
        {
            key: "ציוד שכדאי להביא",
            value: "לחיילים המתכננים לשהות במקום, מומלץ להביא ציוד אישי ומצעים"
        },
        {
            key: "שירותים לחייל",
            value: 'במקום שק"ם גדול הכולל גם חלבייה ופתוח מ8:00 עד 18:00.' + 'בבסיס מתקני ספורט רבים, כגון מגרשי ספורט, חדר כושר ובריכה.'


        }]


)

writeBase("עובדה",
    {
        "מידע כללי": 'בסיס עובדה ממוקם בבקעת עובדה בדרום. מקור שמו של הבסיס הוא מבצע "עובדה", לכיבוש דרום הנגב ואילת על-ידי חטיבות "הנגב" ו"גולני", במלחמת העצמאות. הבסיס הוא ממשיכו של בסיס "עציון" שהוקם בשנת 1972 בבקעת הירח בסיני שכלל שתי טייסות: טייסת "נשר הזהב" וטייסת "עוף החול" שהשתתפו במלחמת יום הכיפורים מהבסיס.',
        "דרכי הגעה": '<p>' + "ניתן להגיע בתחבורה ציבורית - קו אוטובוס 391 מתחנה מרכזית באר שבע" + '</p>' +
        '<p>'+ "לתחנה מרכזית באר שבע ניתן להגיע בתחבורה ציבורית מכל הארץ - ברכבת או באוטובוס"+'</p>',
        "ציוד שכדאי להביא": "לחיילים המתכננים לשהות במקום, מומלץ להביא ציוד אישי ומצעים",
        "שירותים לחייל":   '<p>' + 'במקום שק"ם גדול הכולל גם חלבייה ופתוח מ8:00 עד 18:00.' +  '</p>' +  '<p>' +'בבסיס מתקני ספורט רבים, כגון מגרשי ספורט, חדר כושר ובריכה.' +  '</p>'
    }
)

 */



