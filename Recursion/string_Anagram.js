
function StringAnagram(str) {
    var words = [];
    // when passing array/ data structure, passing a referance 
    _rStringAnagram("", str, words);
    return words;
}


// name init as empty str '',
function _rStringAnagram(name, rem, words) {

    // console.log('name is', name, 'rem is', rem);

    // let depth = '';
    // for ( let i = 0; i < name.length; i++) {
    //     depth += '..........';
    // }

    if (rem == "") {
        words.push(name);
        // console.log(name);
        return;
    }

    // rem start with lim
    for ( let i = 0; i < rem.length; i++) {
        let new_rem = "";
        for ( let j = 0; j < rem.length; j++) {
            // if its not the same char, append the char to new_rem
            if ( i != j ) {
                new_rem += rem[j];
            }
        }
        // console.log(depth + name + rem[i]);

        // for each of remaining, create a clone/ call recursion
        _rStringAnagram(name + rem[i], new_rem, words);
    }
}


console.log(StringAnagram("lim"));




