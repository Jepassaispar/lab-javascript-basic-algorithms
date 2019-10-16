var hacker1 = "Paul";

var hacker2 = "Paul";

var hacker1Length = hacker1.length;

var hacker2Length = hacker2.length;

var driverName = console.log("The driver's name is " + hacker1);

var navigatorName = console.log("The navigator's name is " + hacker2);

function longestName(a, b) {
    if (hacker1Length > hacker2Length) {
        console.log("The Driver has the longest name, it has " + hacker1Length + " characters")
    } else if (hacker1Length < hacker2Length) {
        console.log("Yo, navigator got the longest name, it has " + hacker2Length + " characters")
    } else {
        console.log("Wow, you both got equally long names, " + hacker2Length + " characters!")
    }
}

longestName(hacker2, hacker1);

var hacker1Uppercase = hacker1.toUpperCase();

function printDriverNameCharactersUppercase() {
    let nm = "";
    for (let i = 0; i < hacker1Length; i++)
        nm = nm + hacker1Uppercase[i] + " ";
    console.log(nm);
}

printDriverNameCharactersUppercase();

function printNavigatorNameReverseOrder() {
    let nm = "";
    for (let i = hacker2Length - 1; i >= 0; i--)
        nm = nm + hacker2[i];
    console.log(nm);
}

printNavigatorNameReverseOrder()


///////////////////////////////////

function whichNameGoesFirst() {
    if (hacker1Length < hacker2Length) {
        for (let i = 0; i < hacker1Length; i++)
            if ((hacker1[i] < hacker2[i]) || (hacker1[i] = hacker2[i])) {
                console.log("The driver's name goes first.");
                break;
            }
        else if (hacker1[i] > hacker2[i]) {
            console.log("Yo, the navigator goes first definitely.");
            break;
        }
    } else if (hacker1Length > hacker2Length) {
        for (let i = 0; i < hacker1Length; i++)
            if ((hacker1[i] > hacker2[i]) || (hacker1[i] = hacker2[i])) {
                console.log("Yo, the navigator goes first definitely.");
                break;
            }
        else if (hacker1[i] < hacker2[i]) {
            console.log("The driver's name goes first.");
            break;
        }
    } else if (hacker1Length === hacker2Length) {
        for (let i = 0; i < hacker1Length; i++)
            if (hacker1[i] < hacker2[i]) {
                console.log("The driver's name goes first.");
                break;
            }
        else if (hacker1[i] > hacker2[i]) {
            console.log("Yo, the navigator goes first definitely.");
            break;
        } else {
            console.log("You have the same name !");
            break;
        }
    }
}

whichNameGoesFirst()